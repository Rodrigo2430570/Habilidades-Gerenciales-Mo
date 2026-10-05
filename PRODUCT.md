# MO Co.

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

El público principal son personas que quieren conocer MO Co. como empresa: su identidad, misión, visión, valores, estructura, departamentos, objetivos y forma de trabajo.

El origen académico del proyecto no define la experiencia principal. La página debe leerse y percibirse como el sitio oficial de una empresa real dentro del universo ficticio de Hora de Aventura, no como una presentación escolar.

## Product Purpose

Presentar a MO Co. mediante un sitio empresarial claro, coherente y fácil de recorrer, basado en la planeación proporcionada por el equipo. Permitir que sus visitantes comprendan qué hace la empresa, qué principios la guían, qué retos reconoce y qué se propone lograr.

El éxito consiste en comunicar esa información con fidelidad, identidad propia y una experiencia usable en distintos tamaños de pantalla. No se han definido metas de ventas, conversión ni indicadores de uso.

## Positioning

MO Co. es la empresa ficticia elegida para el proyecto, ambientada en Hora de Aventura. La planeación vincula su propósito con los robots MO, sus capacidades especializadas, la preservación de conocimientos y recuerdos, y la continuidad del legado tecnológico de Moe.

La presentación corporativa pertenece a la ficción: no debe convertirse en una afirmación de afiliación oficial del proyecto con los propietarios de Hora de Aventura.

## Operating Context

- Proyecto académico elaborado a partir de `U1 A2. Planeación estratégica_Eqverde.pdf`.
- La versión actual incorpora las páginas 2–10: filosofía empresarial, análisis FODA, objetivos SMART, estrategias y planes de acción.
- El sitio fuente está en `mo-co/src/` con Next.js, TypeScript y Tailwind CSS. `mo-co/dist/` contiene la exportación estática para el alojamiento existente.
- La guía de ejecución local está en `mo-co/README.md`; puede servirse desde `mo-co` con `python -m http.server 4173 --bind 127.0.0.1 --directory dist`.
- Impeccable se utilizará para revisar, rediseñar y pulir la interfaz conforme avance el proyecto.

## Capabilities and Constraints

### Alcance existente

- **Nuestra estrategia:** misión, visión, cinco valores, 22 puntos FODA, tres objetivos SMART, estrategias y planes de acción.
- **Nuestra organización:** responsables y frentes de las iniciativas documentadas; el organigrama general sigue pendiente.
- **Nuestra forma de trabajar:** principios y colaboración que pueden sustentarse en la planeación; las políticas formales aún no están documentadas.
- **Nuestro compromiso:** estándares derivados de los objetivos, metas previstas y verificaciones especificadas en los planes.
- Navegación entre secciones, enlaces de regreso al inicio y lectura del contenido sin depender de JavaScript.
- Sitio informativo; actualmente no incluye cuentas, formularios, backend ni recopilación de datos.

### Restricciones confirmadas por el usuario

- Trabajar sobre la página actual mediante iteraciones; no reconstruirla desde cero.
- Conservar todos los textos, secciones y funcionalidades existentes salvo indicación expresa del usuario.
- Priorizar diseño visual, jerarquía, navegación, experiencia de usuario, adaptación a pantallas y coherencia con MO Co.
- Mantener el contenido de la planeación; los nombres públicos de los apartados deben resultar naturales para un sitio empresarial.
- Interpretar futuras solicitudes de revisión o pulido dentro de estas restricciones. Una petición general de rediseño no autoriza por sí sola eliminar contenido o reconstruir el proyecto.

### Decisiones abiertas y alcance futuro

- La estructura, los departamentos y la forma de trabajo forman parte de la información que el público desea conocer. La planeación solo documenta los responsables y frentes de tres iniciativas. Completar el organigrama y las políticas requiere datos adicionales.
- Las estrategias y planes de acción de las páginas 7–10 se incorporaron por solicitud posterior del usuario.
- No hay nuevas fechas de inicio, resultados alcanzados ni datos organizacionales confirmados. No inventarlos para completar la página.
- Presentarse como una empresa dentro de la ficción no autoriza retirar automáticamente el aviso académico y de sitio no oficial que ya existe.

## Brand Commitments

- Nombre empresarial: **MO Co.**
- Ambientación vinculante: el universo de **Hora de Aventura**, los robots MO y el legado de Moe.
- Idioma actual del contenido: español.
- Comunicación orientada a visitantes de una empresa, con denominaciones empresariales para los apartados y una identidad coherente con MO Co.
- Conservar la página y sus recursos actuales como punto de partida. La paleta, tipografía y composición existentes son evidencia de la implementación, no nuevas restricciones estéticas fijadas por este documento.

## Evidence on Hand

- `U1 A2. Planeación estratégica_Eqverde.pdf`: fuente de la planeación y de sus textos.
- `mo-co/src/app/page.tsx` y `mo-co/src/app/globals.css`: contenido, estructura e implementación visual actuales.
- `mo-co/dist/index.html`: exportación estática vigente para alojamiento.
- `mo-co/dist/assets/mundo-mo.png`: ilustración generada para el proyecto; no es un recurso oficial de la franquicia.
- `mo-co/docs/decisiones.md`: correspondencia entre presentación y sitio, referencias corporativas y procedencia de la ilustración.
- `mo-co/docs/design-audit.md`: referencias, trazabilidad de contenido y límites de la versión actual.
- `mo-co/docs/verificacion.md`: comprobaciones históricas de la primera entrega; no equivalen a una auditoría vigente.
- `mo-co/.openai/hosting.json`: identidad registrada de Sites. Su existencia no acredita una publicación en línea completada.

No se han proporcionado clientes reales, testimonios, certificaciones, métricas de desempeño ni evidencia de afiliación oficial. Los porcentajes de los compromisos son metas, no resultados.

## Product Principles

1. **La empresa es el punto de vista:** organizar y comunicar para quien quiere conocer MO Co., manteniendo el contexto académico fuera del protagonismo de la experiencia.
2. **Fidelidad al contenido:** conservar la planeación, sus cifras y sus textos; distinguir objetivos futuros de logros demostrados.
3. **Evolución con continuidad:** mejorar la página actual sin perder secciones, comportamientos ni contenido por decisiones de diseño implícitas.
4. **Comprensión antes que decoración:** usar jerarquía y navegación para facilitar la lectura y el descubrimiento de la información.
5. **Identidad consistente:** hacer que las mejoras pertenezcan a MO Co. y a su universo, sin sacrificar usabilidad.

## Accessibility & Inclusion

El usuario ha priorizado experiencia de usuario y diseño adaptable. Conservar y mejorar las capacidades actuales: navegación por teclado, foco visible, estructura semántica, texto alternativo, enlace para saltar al contenido, lectura sin JavaScript y respeto al movimiento reducido.

No se ha establecido un nivel formal de conformidad WCAG ni necesidades específicas de una audiencia con discapacidad. No declarar certificación o cumplimiento auditado sin verificación.
