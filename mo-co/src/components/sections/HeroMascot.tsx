'use client';

import { createElement, useEffect, useRef, useState } from 'react';

type Reaction = 'idle' | 'hello' | 'joy' | 'curious';
type ModelViewerElement = HTMLElement & {
  availableAnimations?: string[];
  animationName?: string;
  play?: () => void;
  pause?: () => void;
};

// Add the finished GLB to public/assets and set this value at build time.
// Until then the original, high-quality illustration remains the hero asset.
const modelSrc = process.env.NEXT_PUBLIC_MO_HERO_MODEL || null;
const reactions: Reaction[] = ['hello', 'joy', 'curious'];

function HeroModel({ src, reaction }: { src: string; reaction: Reaction }) {
  const viewer = useRef<ModelViewerElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [motionAllowed, setMotionAllowed] = useState(false);

  useEffect(() => {
    let active = true;
    import('@google/model-viewer').catch(() => { /* The illustration stays visible. */ });
    const node = viewer.current;
    const onLoad = () => { if (active) setLoaded(true); };
    node?.addEventListener('load', onLoad);
    return () => { active = false; node?.removeEventListener('load', onLoad); };
  }, []);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setMotionAllowed(!preference.matches);
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const node = viewer.current;
    if (!loaded || !node) return;
    if (!motionAllowed) { node.pause?.(); return; }
    if (!node.availableAnimations?.length) return;
    const wanted = reaction === 'idle' ? 'Idle' : reaction === 'hello' ? 'Wave' : reaction === 'joy' ? 'Happy' : 'Curious';
    const match = node.availableAnimations.find(name => name.toLowerCase() === wanted.toLowerCase());
    const idle = node.availableAnimations.find(name => name.toLowerCase() === 'idle');
    if (match || idle) {
      node.animationName = match || idle;
      node.play?.();
    }
  }, [loaded, reaction, motionAllowed]);

  return <div className={`hero__model-shell${loaded ? ' is-loaded' : ''}`}>
    <img className="hero__model-poster" src="/assets/bmo-institute.png" width="1122" height="1402" alt="" aria-hidden="true" />
    {createElement('model-viewer', {
      ref: viewer,
      src,
      alt: 'Robot MO tridimensional con cuerpo verde azulado y rostro luminoso',
      poster: '/assets/bmo-institute.png',
      'environment-image': 'neutral',
      'camera-orbit': '0deg 75deg auto',
      'camera-target': 'auto auto auto',
      'field-of-view': '30deg',
      'shadow-intensity': '0.8',
      'shadow-softness': '0.9',
      exposure: '1.05',
      'interaction-prompt': 'none',
      'touch-action': 'pan-y',
      className: 'hero__model',
    })}
  </div>;
}

export function HeroMascot() {
  const art = useRef<HTMLDivElement>(null);
  const [reaction, setReaction] = useState<Reaction>('idle');
  const [blink, setBlink] = useState(false);
  const [visible, setVisible] = useState(true);
  const [motionAllowed, setMotionAllowed] = useState(false);
  const reactionIndex = useRef(0);
  const introPlayed = useRef(false);
  const userInteracted = useRef(false);
  const hovering = useRef(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (resetTimer.current) clearTimeout(resetTimer.current); }, []);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setMotionAllowed(!preference.matches);
    const updateVisibility = () => {
      const box = art.current?.getBoundingClientRect();
      setVisible(Boolean(box && box.bottom > 0 && box.top < innerHeight && !document.hidden));
    };
    const observer = new IntersectionObserver(updateVisibility, { threshold: 0 });
    if (art.current) observer.observe(art.current);
    updateMotion();
    updateVisibility();
    preference.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', updateMotion);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (!motionAllowed || !visible || introPlayed.current) return;
    introPlayed.current = true;
    const enter = setTimeout(() => {
      if (!userInteracted.current) setReaction('hello');
    }, 1450);
    const settle = setTimeout(() => {
      if (!userInteracted.current) setReaction(hovering.current ? 'curious' : 'idle');
    }, 2420);
    return () => { clearTimeout(enter); clearTimeout(settle); };
  }, [motionAllowed, visible]);

  useEffect(() => {
    if (modelSrc || !motionAllowed || !visible || reaction !== 'idle') return;
    let next: ReturnType<typeof setTimeout>;
    let close: ReturnType<typeof setTimeout>;
    const schedule = () => {
      next = setTimeout(() => {
        setBlink(true);
        close = setTimeout(() => { setBlink(false); schedule(); }, 150);
      }, 3200 + Math.random() * 3600);
    };
    schedule();
    return () => { clearTimeout(next); clearTimeout(close); setBlink(false); };
  }, [motionAllowed, visible, reaction]);

  function interact() {
    userInteracted.current = true;
    const next = reactions[reactionIndex.current % reactions.length];
    reactionIndex.current += 1;
    if (resetTimer.current) clearTimeout(resetTimer.current);
    setReaction(next);
    resetTimer.current = setTimeout(() => setReaction(hovering.current ? 'curious' : 'idle'), 1100);
  }

  return <div className="hero__art" ref={art} data-reaction={reaction} data-blink={blink ? 'true' : 'false'}>
    <div className="hero__ambient" aria-hidden="true" />
    <div className="hero__halo" aria-hidden="true" />
    <span className="hero__art-word" aria-hidden="true">MO</span>
    <span className="hero__particle hero__particle--one" aria-hidden="true" />
    <span className="hero__particle hero__particle--two" aria-hidden="true" />
    <span className="hero__particle hero__particle--three" aria-hidden="true" />
    <span className="hero__ground-shadow" aria-hidden="true" />
    <div className="hero__mascot-entry">
      <div className="hero__mascot-parallax">
        <div className="hero__mascot-reactive">
          <div className="hero__mascot-float">
            <button className="hero__mascot-button" type="button" onClick={interact} onPointerEnter={event => { if (event.pointerType === 'mouse') { hovering.current = true; if (reaction === 'idle') setReaction('curious'); } }} onPointerLeave={() => { hovering.current = false; if (reaction === 'curious') setReaction('idle'); }} aria-label="Interactuar con MO">
              {modelSrc ? <HeroModel src={modelSrc} reaction={reaction} /> : <span className="hero__mascot-frames">
                <img className="hero__mascot-frame hero__mascot-frame--base" src="/assets/bmo-institute.png" width="1122" height="1402" alt="Robot MO verde azulado, con rostro sonriente y controles de colores" fetchPriority="high" />
                <img className="hero__mascot-frame hero__mascot-frame--wave" src="/assets/bmo-wave-v2.png" width="1122" height="1402" alt="" aria-hidden="true" fetchPriority="low" />
                <img className="hero__mascot-frame hero__mascot-frame--surprise" src="/assets/bmo-surprise-v2.png" width="1122" height="1402" alt="" aria-hidden="true" fetchPriority="low" />
                <img className="hero__mascot-frame hero__mascot-frame--blink" src="/assets/bmo-blink-v2.png" width="1122" height="1402" alt="" aria-hidden="true" fetchPriority="low" />
              </span>}
              <span className="hero__screen-light" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <p>UN PROPÓSITO EN CADA CIRCUITO</p>
  </div>;
}
