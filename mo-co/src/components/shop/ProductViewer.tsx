'use client';

import { createElement, useCallback, useEffect, useRef, useState } from 'react';

type ViewerElement = HTMLElement & {
  cameraOrbit: string;
  jumpCameraToGoal(): void;
};

type Props = { slug: string; name: string; image: string; alt: string };

const initialOrbit = '24deg 77deg 105%';
const motionPreference = '(prefers-reduced-motion: reduce)';
let webGLAvailable: boolean | undefined;

function supportsWebGL() {
  if (webGLAvailable === undefined) {
    const context = document.createElement('canvas').getContext('webgl2');
    webGLAvailable = context !== null;
    context?.getExtension('WEBGL_lose_context')?.loseContext();
  }
  return webGLAvailable;
}

export function ProductViewer({ slug, name, image, alt }: Props) {
  const stage = useRef<HTMLDivElement>(null);
  const viewer = useRef<ViewerElement>(null);
  const [mount, setMount] = useState(false);
  const [status, setStatus] = useState<'loading' | 'ready' | 'failed'>('loading');
  const [showModel, setShowModel] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    let active = true;
    let observer: IntersectionObserver | undefined;
    async function load() {
      observer?.disconnect();
      try {
        if (supportsWebGL()) {
          await import('@google/model-viewer');
          if (active) setMount(true);
        }
      } catch {
        if (active) setStatus('failed');
      }
    }
    if (stage.current && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) void load();
      }, { rootMargin: '160px' });
      observer.observe(stage.current);
    } else {
      void load();
    }
    return () => {
      active = false;
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    const preference = window.matchMedia(motionPreference);
    const sync = () => setReducedMotion(preference.matches);
    sync();
    preference.addEventListener('change', sync);
    return () => preference.removeEventListener('change', sync);
  }, []);

  const bindViewer = useCallback((element: ViewerElement | null) => {
    if (!element) return;
    viewer.current = element;
    const ready = () => setStatus('ready');
    const failed = () => setStatus('failed');
    element.addEventListener('load', ready);
    element.addEventListener('error', failed);
    return () => {
      element.removeEventListener('load', ready);
      element.removeEventListener('error', failed);
      viewer.current = null;
    };
  }, []);

  const interactive = status === 'ready' && showModel;

  function resetView() {
    if (!viewer.current) return;
    viewer.current.cameraOrbit = initialOrbit;
    if (reducedMotion) viewer.current.jumpCameraToGoal();
  }

  return <div className="product-portrait">
    <div className="product-viewer" data-interactive={interactive} ref={stage}>
      <img className="product-viewer__poster" src={image} alt={alt} width={1024} height={1024} fetchPriority="high" aria-hidden={interactive || undefined} />
      {mount && status !== 'failed' && createElement('model-viewer', {
        ref: bindViewer,
        className: 'product-viewer__scene',
        src: `/assets/models/${slug}.glb`,
        alt: `Modelo 3D de ${name}. Usa las flechas para girarlo.`,
        inert: !interactive,
        'aria-hidden': !interactive || undefined,
        loading: 'eager',
        'camera-controls': true,
        'camera-orbit': initialOrbit,
        'min-camera-orbit': 'auto 10deg auto',
        'max-camera-orbit': 'auto 165deg auto',
        'interpolation-decay': reducedMotion ? 0 : 72,
        'interaction-prompt': 'none',
        'environment-image': 'neutral',
        'shadow-intensity': '0.65',
        'shadow-softness': '0.8',
        'disable-pan': true,
        'disable-zoom': true,
        'disable-tap': true,
        'touch-action': 'none',
      })}
      {status === 'ready' && <div className="product-viewer__toolbar">
        <button type="button" aria-pressed={interactive} onClick={() => setShowModel(previous => !previous)}>Vista 3D</button>
        {interactive && <><span>Arrastra para girar</span><button type="button" onClick={resetView} aria-label="Restablecer vista del modelo">Centrar</button></>}
      </div>}
    </div>
    <span>Ilustración conceptual · MO Co.</span>
  </div>;
}
