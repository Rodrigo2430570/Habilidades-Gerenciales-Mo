# Motion system — MO Co.

La entrada del Hero es el momento principal. El resto del movimiento explica la lectura vertical, la jerarquía de los apartados y la relación entre iniciativas, responsables e indicadores. La identidad visual y la planeación permanecen; las imágenes interiores ahora presentan la fábrica y la comunidad MO.

## Continuidad entre páginas

La iteración del recorrido añade View Transitions entre documentos (salida 140 ms, entrada 240 ms y 6 px), con cabecera estable. En navegadores sin soporte se conservan los enlaces HTML normales. El menú móvil aparece desde su botón en 200 ms; la respuesta de pulsación tarda 80 ms. Las preferencias de movimiento reducido desactivan las transiciones espaciales entre documentos. Las de transparencia reducida y contraste alto vuelven sólidas las barras flotantes. Los detalles completos están en `recorrido-y-contexto.md`.

## Tecnología

- CSS keyframes para la entrada del Hero, el desplazamiento ambiental de la mascota, la línea de los procesos y los estados hover.
- `IntersectionObserver` en `MotionController.tsx` activa únicamente detalles de líneas y un ajuste leve de las imágenes. El texto no cambia de opacidad ni se oculta al recorrer la página.
- Un listener pasivo de scroll, procesado con `requestAnimationFrame`, para visibilidad del Hero y desplazamiento máximo de 24 px del monograma de fondo y de la mascota en escritorio.
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
| Secciones / cards | Al entrar al viewport | El texto permanece visible; solo se dibujan líneas de relación y las imágenes ajustan su escala durante 420 ms. |

Easing de llegada: `cubic-bezier(.16, 1, .3, 1)`. Transiciones de interfaz: `cubic-bezier(.4, 0, .2, 1)`.

## Cobertura

- **Estrategia:** filosofía, valores, FODA, metas, estrategias y planes se leen continuamente; la línea de acción se dibuja al entrar.
- **Organización:** el texto de Moe, áreas y equipo permanece visible; se dibuja la conexión del organigrama.
- **Forma de trabajar:** el texto permanece visible. La columna de cultura permanece sticky solo en escritorio.
- **Compromiso:** estándares, KPIs y seguimiento permanecen visibles; se dibuja la línea del proceso. No hay count-up: las cifras son metas futuras y animarlas desde cero podría sugerir avance alcanzado.
- **Galería:** la imagen realiza un ajuste mínimo de escala sin taparse; el texto permanece visible.
- **Navegación:** ruta activa con `aria-current="page"`, subrayado de enlaces y cabecera estable al desplazarse.

## Accesibilidad y captura

Sin JavaScript, todo el contenido permanece visible. El observador activa solo los detalles gráficos una vez; no hay replay al volver a pasar. Con `prefers-reduced-motion: reduce` no hay parallax, flotación, reacción al cursor ni desplazamientos, y el scroll de anclas es inmediato. La mascota ambiental se detiene al quedar fuera de pantalla o cuando la pestaña está oculta. En móvil no se activa la reacción al cursor ni el parallax. No se ocultan requisitos tras hover o animaciones continuas.
