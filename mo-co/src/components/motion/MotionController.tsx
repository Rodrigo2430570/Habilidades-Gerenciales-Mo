'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';

export function MotionController() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector<HTMLElement>('.site-header');
    const hero = document.querySelector<HTMLElement>('.hero');
    const mascot = hero?.querySelector<HTMLElement>('.hero__mascot-reactive');
    const mascotParallax = hero?.querySelector<HTMLElement>('.hero__mascot-parallax');
    const targets = [...document.querySelectorAll<HTMLElement>('[data-reveal], [data-stagger]')];
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const desktop = window.matchMedia('(min-width: 851px)');
    const finePointer = window.matchMedia('(min-width: 851px) and (hover: hover) and (pointer: fine)');
    const running = new Set<Animation>();
    let frame = 0;
    let pointerFrame = 0;
    let pointerX = 0;
    let pointerY = 0;

    function resetPointer() {
      if (pointerFrame) cancelAnimationFrame(pointerFrame);
      pointerFrame = 0;
      pointerX = 0;
      pointerY = 0;
      mascot?.style.setProperty('--mascot-pointer-x', '0px');
      mascot?.style.setProperty('--mascot-pointer-y', '0px');
      mascot?.style.setProperty('--mascot-pointer-rotate', '0deg');
    }

    function onPointerMove(event: PointerEvent) {
      if (!hero || !mascot || reduced.matches || !finePointer.matches || document.hidden || event.pointerType !== 'mouse') return;
      const box = hero.getBoundingClientRect();
      pointerX = Math.max(-1, Math.min(1, ((event.clientX - box.left) / box.width) * 2 - 1));
      pointerY = Math.max(-1, Math.min(1, ((event.clientY - box.top) / box.height) * 2 - 1));
      if (pointerFrame) return;
      pointerFrame = requestAnimationFrame(() => {
        pointerFrame = 0;
        mascot.style.setProperty('--mascot-pointer-x', `${(pointerX * 6).toFixed(2)}px`);
        mascot.style.setProperty('--mascot-pointer-y', `${(pointerY * 4).toFixed(2)}px`);
        mascot.style.setProperty('--mascot-pointer-rotate', `${(pointerX * .8).toFixed(2)}deg`);
      });
    }

    function play(element: Element | null, keyframes: Keyframe[], duration: number, delay = 0) {
      if (!element || reduced.matches) return;
      const animation = element.animate(keyframes, { duration, delay, easing: ease, fill: 'both' });
      running.add(animation);
      animation.onfinish = () => { animation.cancel(); running.delete(animation); };
      animation.oncancel = () => running.delete(animation);
    }

    function reveal(target: HTMLElement) {
      target.classList.add('is-revealing');
      const rise = window.innerWidth <= 650 ? 16 : 24;
      if (target.dataset.stagger !== undefined) {
        [...target.children].forEach((child, index) => {
          play(child, [{ opacity: 0, transform: `translateY(${rise}px)` }, { opacity: 1, transform: 'translateY(0)' }], 610, Math.min(index, 4) * 85);
        });
      } else if (target.dataset.reveal === 'heading') {
        play(target.querySelector('.section-number'), [{ opacity: 0, transform: `translateY(${rise}px) scale(.94)` }, { opacity: 1, transform: 'translateY(0) scale(1)' }], 630);
        target.querySelectorAll('.section-heading__word-mask > span').forEach((word, index) => {
          play(word, [{ opacity: 0, transform: 'translateY(110%)' }, { opacity: 1, transform: 'translateY(0)' }], 720, 110 + index * 95);
        });
        play(target.querySelector('p'), [{ opacity: 0, transform: 'translateY(14px)' }, { opacity: 1, transform: 'translateY(0)' }], 560, 300);
      } else if (target.dataset.reveal === 'image') {
        play(target, [{ clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0 0 0 0)' }], 900);
        play(target.querySelector('img'), [{ transform: 'scale(1.05)' }, { transform: 'scale(1)' }], 1000);
      } else if (target.dataset.reveal === 'org') {
        target.classList.add('is-revealing');
        play(target.querySelector('.org-chart__lead'), [{ opacity: 0, transform: 'translateY(20px)' }, { opacity: 1, transform: 'translateY(0)' }], 620);
        target.querySelectorAll('.org-chart__branches > div').forEach((branch, index) => {
          play(branch, [{ opacity: 0, transform: 'translateY(18px)' }, { opacity: 1, transform: 'translateY(0)' }], 600, 320 + index * 90);
        });
      } else if (target.dataset.reveal === 'fade') {
        play(target, [{ opacity: 0 }, { opacity: 1 }], 480);
      } else {
        play(target, [{ opacity: 0, transform: `translateY(${rise}px)` }, { opacity: 1, transform: 'translateY(0)' }], 650);
      }
    }

    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver((entries, instance) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const target = entry.target as HTMLElement;
            instance.unobserve(target);
            reveal(target);
          });
        }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' })
      : null;

    if (observer) targets.forEach(target => observer.observe(target));

    function update() {
      frame = 0;
      const heroBox = hero?.getBoundingClientRect();
      const heroVisible = Boolean(heroBox && heroBox.bottom > 0 && heroBox.top < innerHeight && !document.hidden);
      root.classList.toggle('hero-visible', heroVisible);
      header?.classList.toggle('is-scrolled', window.scrollY > 20);

      if (heroBox && desktop.matches && !reduced.matches) {
        const progress = Math.min(1, Math.max(0, -heroBox.top / Math.max(heroBox.height, 1)));
        root.style.setProperty('--hero-depth', `${Math.round(progress * 24)}px`);
        mascotParallax?.style.setProperty('--mascot-scroll-y', `${Math.round(progress * 24)}px`);
      } else {
        root.style.setProperty('--hero-depth', '0px');
        mascotParallax?.style.setProperty('--mascot-scroll-y', '0px');
      }
      if (!heroVisible || !finePointer.matches || reduced.matches) resetPointer();
    }

    function scheduleUpdate() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    function updatePreference() {
      root.classList.toggle('motion-ready', !reduced.matches);
      if (reduced.matches) {
        running.forEach(animation => animation.cancel());
        running.clear();
        resetPointer();
      }
      scheduleUpdate();
    }

    // Mark only the initial viewport before enabling motion; all other content
    // remains visible by default and is animated only when encountered.
    updatePreference();
    update();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    hero?.addEventListener('pointermove', onPointerMove, { passive: true });
    hero?.addEventListener('pointerleave', resetPointer);
    document.addEventListener('visibilitychange', scheduleUpdate);
    reduced.addEventListener('change', updatePreference);
    desktop.addEventListener('change', scheduleUpdate);
    finePointer.addEventListener('change', scheduleUpdate);

    return () => {
      observer?.disconnect();
      if (frame) cancelAnimationFrame(frame);
      resetPointer();
      running.forEach(animation => animation.cancel());
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      hero?.removeEventListener('pointermove', onPointerMove);
      hero?.removeEventListener('pointerleave', resetPointer);
      document.removeEventListener('visibilitychange', scheduleUpdate);
      reduced.removeEventListener('change', updatePreference);
      desktop.removeEventListener('change', scheduleUpdate);
      finePointer.removeEventListener('change', scheduleUpdate);
      root.classList.remove('motion-ready', 'hero-visible');
      root.style.removeProperty('--hero-depth');
      mascotParallax?.style.removeProperty('--mascot-scroll-y');
      mascot?.style.removeProperty('--mascot-pointer-x');
      mascot?.style.removeProperty('--mascot-pointer-y');
      mascot?.style.removeProperty('--mascot-pointer-rotate');
    };
  }, [pathname]);

  return null;
}
