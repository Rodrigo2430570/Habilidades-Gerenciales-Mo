# Decisiones de contenido y experiencia

## Traducción de la estructura académica a navegación corporativa

| Presentación | Nombre en el sitio | Fuente |
| --- | --- | --- |
| Filosofía empresarial | Nuestra esencia | Página 2 |
| Análisis FODA | Nuestro horizonte | Página 3 |
| Objetivos SMART | Compromisos de futuro | Páginas 4–6 |

Se conservan íntegros misión, visión, los cinco valores, los 22 puntos del análisis (5 fortalezas, 5 oportunidades, 6 debilidades y 6 amenazas), los tres objetivos y sus 15 criterios. Solo se normalizan espacios y saltos de línea de la presentación. Los títulos de entrada, introducciones y resúmenes visuales son textos editoriales adicionales. Las etiquetas de misión/visión y los cuatro grupos del diagnóstico mantienen claridad conceptual sin usar los títulos académicos como navegación.

Los cinco criterios se presentan como Qué haremos, Cómo lo mediremos, Con qué contamos, Por qué importa y En qué plazo. Cada texto original se conserva en un desplegable nativo; no se ocultan los objetivos completos ni sus principales indicadores. Los indicadores son metas, nunca resultados alcanzados.

## Referencias corporativas consultadas

- [LEGO — Who we are](https://www.lego.com/en-us/careers/who-we-are): reúne misión, visión, valores e identidad bajo un nombre cercano al público.
- [IKEA — Culture and values](https://www.ikea.com/global/en/our-business/how-we-work/ikea-culture-and-values/): conecta cultura, forma de trabajar y valores.
- [IKEA — Building a stronger IKEA for the future](https://www.inter.ikea.com/en/newsroom/building-a-stronger-ikea-for-the-future): comunica capacidades, entorno y dirección futura con lenguaje empresarial.

Estas referencias orientan la arquitectura de información; no se copian sus textos ni diseños. “Nuestro horizonte” y “Compromisos de futuro” son nombres propuestos para MO Co., no categorías atribuidas a esas empresas.

## Diseño

El rediseño adopta un instituto de robótica de Ooo: petróleo profundo, superficies claras, verde MO y amarillo señal. Chakra Petch aporta el carácter técnico de los titulares y Manrope mantiene la lectura cómoda; ambas fuentes se sirven localmente. La portada presenta un retrato escultórico de BMO, misión y visión usan columnas asimétricas, los valores acompañan la ilustración original, el diagnóstico forma una matriz de cuatro paneles y los compromisos usan filas numeradas con indicadores destacados.

La navegación permanece visible y pasa a dos filas en pantallas intermedias. En móvil conserva los tres destinos, sin menú oculto. Los criterios siguen usando desplegables nativos y la sección activa se indica con una mejora opcional en JavaScript. El sistema visual se documenta en DESIGN.md en la raíz del espacio de trabajo y el contrato de esta superficie en `.impeccable/surfaces/mo-co-dist-index-html.md` dentro de `mo-co`.

El nuevo retrato `dist/assets/bmo-institute.png` fue generado con la herramienta integrada de imágenes: BMO como prototipo industrial de esmalte mate, vista tres cuartos, gesto curioso, cuerpo y extremidades completos, controles de colores y fondo transparente. El prompt exacto está incorporado en los metadatos del PNG. También se conserva la procedencia de la ilustración original; el escaneo de las dos imágenes no encontró metadatos de prompt faltantes.

La ilustración `dist/assets/mundo-mo.png` se creó con la herramienta integrada de generación de imágenes. Prompt final: “Use case: illustration-story. Asset type: standalone hero illustration for a fictional MO Co robotics company website; image will appear in the large right column of a mint-colored page. Primary request: recognizable BMO from Adventure Time, a happy teal handheld-console robot, full body in the foreground right, accompanied by a few other small MO robots. Scene/backdrop: sweeping vivid green hills, fantastical Adventure Time treehouse in the distant left, tiny robot factory in the distant right, pale mint sky. Style/medium: polished Adventure Time 2D cel cartoon atmosphere, crisp dark outlines, simple flat colors. Composition/framing: landscape 3:2, ideally 1536x1024. Clean balanced composition. BMO is the focal point and every key subject remains fully inside the frame, including arms and feet. Lighting/mood: bright, cheerful and welcoming. Color palette: flat jade and vivid meadow green, pale mint sky, warm yellow accents. Constraints: one single illustration, no text, no lettering on robots, no UI, no logos, no watermark.”

## Extensión futura

Mantener esta base estática mientras el sitio sea informativo. Si se requieren rutas o muchos contenidos repetidos, separar datos y plantillas con un generador estático. Formularios, cuentas o almacenamiento requieren definir primero su finalidad y manejo de datos; no se incluyen de forma anticipada.
