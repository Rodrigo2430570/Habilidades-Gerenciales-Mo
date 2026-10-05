# Auditoría visual y de contenido — MO Co.

## Referencias consultadas

- [Apple Services México](https://www.apple.com/mx/services/): navegación sobria; introducción con titular amplio y texto corto; módulos de servicio con una idea principal, imagen dominante y acción clara; ritmo generoso entre secciones.
- [Lando Norris](https://landonorris.com/): portada inmersiva; tipografía de gran escala; fotografía como relato; secuencias de contenido numeradas, composiciones editoriales y contraste entre secciones.

Se toman patrones de jerarquía y composición. No se usan textos, imágenes, logos ni colores de esas marcas. La solución conserva la identidad petróleo, menta y amarillo de MO Co. La proporción buscada es aproximadamente 70 % corporativa y 30 % editorial.

## Sitio de partida

La versión anterior era HTML, CSS y JavaScript estáticos. Incluía hero, misión, visión, cinco valores, FODA, tres objetivos SMART con 15 criterios desplegables, navegación por anclas y dos ilustraciones locales. La ampliación usa Next.js y Tailwind porque se solicitaron los componentes y `src/app/page.tsx`; `npm run build` genera una exportación estática en `dist` para el alojamiento existente.

## Patrones aplicados

| Patrón | Aplicación propia |
|---|---|
| Titulares amplios y espacio blanco | Separación clara de los cuatro grandes apartados y sus subtemas. |
| Cards de una idea | Filosofía, FODA, objetivos y acciones sin bloques largos de lectura. |
| Gran visual de portada | Retrato MO ya existente, sin assets de las referencias. |
| Composición editorial | Números de sección, listas abiertas, imagen panorámica y bloque narrativo. |
| Navegación mínima | Cuatro anclas principales y menú móvil nativo. |
| Indicadores visibles | Las cifras del PDF se identifican explícitamente como metas previstas. |

## Fuente de verdad y límites

La planeación de `U1 A2. Planeación estratégica_Eqverde.pdf` aporta filosofía (p. 2), FODA (p. 3), objetivos (pp. 4–6), estrategias (p. 7) y plan de acción (pp. 8–10). Las instrucciones de entrega adjuntas definen apartados requeridos, pero no se usan como texto de la interfaz.

El documento no describe organigrama general, departamentos formales, estilo de liderazgo, canales internos, políticas de motivación ni un ciclo integral de mejora. La web muestra solo los frentes y responsables de los planes documentados y señala los vacíos con lenguaje empresarial. Ningún porcentaje se presenta como resultado alcanzado.

## Verificación de cobertura

- **Nuestra estrategia:** filosofía, panorama FODA, objetivos y metas, estrategias y plan de acción.
- **Nuestra organización:** estructura de ejecución documentada, frentes de trabajo y funciones de Moe y unidades MO. Falta información para un organigrama empresarial completo.
- **Nuestra forma de trabajar:** valores como principios, función de Moe, registros y manuales previstos, capacitación y colaboración asignada. Faltan políticas formales de liderazgo, comunicación y motivación.
- **Nuestro compromiso:** criterios de mantenimiento, datos y conocimiento; indicadores como metas; verificaciones previstas. Falta un procedimiento general de seguimiento y mejora.
