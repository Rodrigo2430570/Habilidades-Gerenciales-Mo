# MO Co. — Tecnología con corazón

Sitio académico en español inspirado en Hora de Aventura. Primera entrega: identidad empresarial, diagnóstico estratégico y compromisos. El contenido procede de `U1 A2. Planeación estratégica_Eqverde.pdf`, páginas 2–6; se mantienen los textos, indicadores y plazos de esas páginas.

## Iniciar

No requiere paquetes ni compilación. Desde esta carpeta:

```sh
python -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Abre http://127.0.0.1:4173. También funciona abriendo `dist/index.html` directamente. Publica el contenido de `dist` en un alojamiento estático. La configuración de Sites se encuentra en `.openai/hosting.json`.

## Organización

- `dist/index.html`: contenido semántico, metadatos y estructura de la página.
- `dist/styles.css`: estilos organizados en capas; tokens de diseño en `:root`, componentes y adaptaciones móviles.
- `dist/app.js`: mejora opcional que indica la sección activa en navegación.
- `dist/assets/mundo-mo.png`: ilustración original generada para el proyecto.
- `dist/assets/bmo-institute.png`: retrato de BMO con fondo transparente para la portada.
- `dist/assets/fonts/`: Chakra Petch y Manrope alojadas localmente, con sus licencias OFL.
- `docs/decisiones.md`: trazabilidad del contenido, referencias y decisiones UX.

## Convenciones

Mantener contenido en HTML, estilos en CSS y comportamiento en JS. Usar elementos nativos antes de controles personalizados. Conservar los identificadores de sección para no romper enlaces. Editar colores y medidas compartidas mediante variables. Evitar dependencias si HTML y CSS resuelven la necesidad. No incorporar secretos o datos privados en archivos públicos.

Toda la información y los desplegables funcionan sin JavaScript. El sitio incorpora enlace para saltar al contenido, foco visible, idioma español, imagen con texto alternativo, jerarquía de encabezados, navegación por teclado y respeto a la preferencia de movimiento reducido. Los plazos son relativos: no se inventan fechas de inicio, resultados ni porcentajes de avance.

## Verificación manual al editar

1. Revisar a 1440, 1050, 900, 760 y 390 píxeles, y con texto ampliado al 200 %.
2. Recorrer enlaces y desplegables con Tab y Enter.
3. Verificar anclas, legibilidad, imágenes y ausencia de desbordamiento horizontal.
4. Comparar cada cambio de contenido con las páginas 2–6 de la presentación.

El proyecto no incluye backend ni recopilación de datos. Estrategias y planes de acción de las páginas 7–10 quedan fuera de esta primera entrega, conforme al alcance solicitado.
