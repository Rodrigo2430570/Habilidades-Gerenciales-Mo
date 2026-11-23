# Integración del modelo 3D del Hero

La portada usa actualmente `public/assets/bmo-institute.png` y tres poses
adicionales descritas en `hero-pose-production.md`. Son ilustraciones con
transparencia, no un modelo tridimensional; los cambios de gesto son
transiciones entre imágenes y no articulación continua de ojos, boca o brazos.

El componente `HeroMascot.tsx` ya admite un GLB real mediante `@google/model-viewer`.
La carga del visor se difiere y la ilustración permanece como poster hasta que
el modelo esté listo. Si el GLB no carga, la ilustración sigue visible.

## Preparación en Blender

1. Modelar la carcasa redondeada, pantalla, controles, brazos, manos, piernas y
   pies como mallas con volumen. Tomar la ilustración actual como referencia de
   proporciones, silueta, color y expresión.
2. Usar materiales PBR con rugosidad moderada en el plástico, emisión suave en
   la pantalla y detalles de volumen en los botones. Evitar luces horneadas que
   hagan imposible integrarlo con el fondo del sitio.
3. Separar y riggear ojos, boca y brazos si se quieren expresiones, parpadeos o
   saludos reales. Los clips de animación reconocidos por el componente son
   `Idle`, `Wave`, `Happy` y `Curious` (sin importar mayúsculas). Si un clip no
   existe, se utiliza `Idle` cuando esté disponible.
4. Dejar el origen del modelo cerca del centro de la figura y los pies a la
   altura del suelo. Comprobar que el encuadre se vea bien con cámara frontal.
5. Exportar como GLB con texturas incluidas. Antes de incorporarlo, comprimir
   geometría y texturas con una herramienta compatible con el visor, y revisar
   peso, normales, sombras y animaciones en escritorio y móvil.

## Activación

Colocar el archivo, por ejemplo, en `public/assets/mo-hero.glb` y compilar con
`NEXT_PUBLIC_MO_HERO_MODEL=/assets/mo-hero.glb`. En PowerShell:

```powershell
$env:NEXT_PUBLIC_MO_HERO_MODEL = '/assets/mo-hero.glb'
npm run build
```

La variable se lee al compilar porque el sitio usa exportación estática. Sin
ella, el visor 3D no se carga y se mantiene la ilustración actual. La animación
de entrada, la iluminación ambiental, los movimientos de interfaz y las
reacciones al clic funcionan en ambos modos; el movimiento de ojos, boca y
brazos requiere clips riggeados en el GLB.
