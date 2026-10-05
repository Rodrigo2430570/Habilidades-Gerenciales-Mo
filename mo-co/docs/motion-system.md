# Motion system — MO Co.

La entrada del Hero es el momento principal. El resto del movimiento explica la lectura vertical, la jerarquía de los apartados y la relación entre iniciativas, responsables e indicadores. La identidad visual, textos y assets permanecen intactos.

## Tecnología

- CSS keyframes para la entrada del Hero, el desplazamiento ambiental de la mascota, la línea de los procesos y los estados hover.
- Web Animations API e `IntersectionObserver` en `MotionController.tsx` para entradas de una sola vez al recorrer la página.
- Un listener pasivo de scroll, procesado con `requestAnimationFrame`, para navegación activa, visibilidad del Hero y desplazamiento máximo de 24 px del monograma de fondo y de la mascota en escritorio.
- Un listener de puntero limitado al Hero actualiza la mascota con un máximo de 6 px en X, 4 px en Y y 0.8° de rotación. CSS suaviza el movimiento y la devuelve a su posición al salir.
- Sin Motion, Framer Motion, GSAP, Lenis ni nuevas dependencias. El scroll suave de anclas continúa con CSS.

## Ritmo

| Pieza | Inicio | Duración / efecto |
|---|---:|---|
| Marca MO Co. | 0 ms | 520 ms, opacidad y 12 px. |
| Lema | 150 ms | 520 ms, opacidad y 12 px. |
| Primera línea del título | 300 ms | 750 ms, máscara vertical. |
| Segunda línea del título | 450 ms | 750 ms, máscara vertical. |
| Mascota | 520 ms | 900 ms, 30 px, escala .96 y 1°; en móvil 18 px y escala .98. |
| Descripción | 650 ms | 660 ms, opacidad y 20 px; en móvil 15 px. |
| CTA | 800 ms | 620 ms, opacidad y 20 px; en móvil 15 px. |
| Mascota ambiental | Después de la entrada | 6 px y 0.4° en 6 s, solo mientras el Hero esté visible; en móvil, 3 px y 0.2°. |
| Mascota interactiva | Escritorio | Reacción sutil al cursor, parallax de hasta 24 px y elevación de 4 px al pasar sobre ella. |
| Secciones / cards | Al entrar al viewport | 480–900 ms, una sola vez, con 85 ms entre elementos del grupo. |

Easing de llegada: `cubic-bezier(.16, 1, .3, 1)`. Transiciones de interfaz: `cubic-bezier(.4, 0, .2, 1)`.

## Cobertura

- **Estrategia:** encabezado numerado, filosofía, valores, FODA, metas, lista de estrategias y línea de acción.
- **Organización:** encabezado numerado, nodo de Moe, conexión y unidades MO; áreas y equipo con stagger.
- **Forma de trabajar:** encabezado, frase editorial y secuencia de prácticas. La columna de cultura permanece sticky solo en escritorio.
- **Compromiso:** encabezado, estándares, KPIs y línea del proceso de seguimiento. No hay count-up: las cifras son metas futuras y animarlas desde cero podría sugerir avance alcanzado.
- **Galería:** una máscara de imagen y una entrada corta del texto. El pie solo usa fade.
- **Navegación:** estado activo con `aria-current="location"`, subrayado de enlaces y cabecera estable al desplazarse.

## Accesibilidad y captura

Sin JavaScript, todo el contenido permanece visible. El observador anima únicamente bloques que entran a la pantalla y deja de observarlos; no hay replay al volver a pasar. Con `prefers-reduced-motion: reduce` no hay parallax, flotación, máscaras, reacción al cursor ni desplazamientos, y el scroll de anclas es inmediato. La mascota ambiental se detiene al quedar fuera de pantalla o cuando la pestaña está oculta. En móvil no se activa la reacción al cursor ni el parallax. No se ocultan requisitos tras hover o animaciones continuas.
