# MO Co.

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

El público principal son personas que quieren conocer MO Co. como empresa: su identidad, misión, visión, valores, estructura, departamentos, objetivos y forma de trabajo. La ampliación también atiende a visitantes que quieren comparar sus 15 modelos y cuatro paquetes, preparar una solicitud de pedido o encontrar orientación y atención.

El origen académico del proyecto no define la experiencia principal. La página debe leerse y percibirse como el sitio oficial de una empresa real dentro del universo ficticio de Hora de Aventura, no como una presentación escolar.

## Product Purpose

Presentar a MO Co. mediante un sitio empresarial claro, coherente y fácil de recorrer, basado en la planeación y el contenido comercial ficticio proporcionados por el equipo. Permitir que sus visitantes comprendan qué hace la empresa, qué principios la guían, qué retos reconoce y qué se propone lograr; también explorar su oferta y preparar solicitudes locales con sus condiciones visibles.

El éxito consiste en comunicar esa información con fidelidad, identidad propia y una experiencia usable en distintos tamaños de pantalla. No se han definido metas de ventas, conversión ni indicadores de uso.

## Positioning

MO Co. es la empresa ficticia elegida para el proyecto, ambientada en Hora de Aventura. La planeación vincula su propósito con los robots MO, sus capacidades especializadas, la preservación de conocimientos y recuerdos, y la continuidad del legado tecnológico de Moe.

La presentación corporativa pertenece a la ficción: no debe convertirse en una afirmación de afiliación oficial del proyecto con los propietarios de Hora de Aventura.

## Operating Context

- Proyecto académico elaborado a partir de `U1 A2. Planeación estratégica_Eqverde.pdf`.
- La planeación incorporada comprende las páginas 2–10: filosofía empresarial, análisis FODA, objetivos SMART, estrategias y planes de acción. Se conserva en las cuatro páginas empresariales.
- `mo-co/docs/contenido-aprobado.md`, entregado el 2 de noviembre de 2026, define la ampliación de catálogo, paquetes, bolsa, ayuda y condiciones. Sus precios, características y políticas pertenecen a la oferta ficticia del proyecto.
- El sitio fuente está en `mo-co/src/` con Next.js, TypeScript y Tailwind CSS. La portada conserva el Hero y los cuatro destinos empresariales, y añade acceso al catálogo y a ayuda. La navegación compartida conecta también productos, paquetes y bolsa; la compilación exporta el sitio estático a `mo-co/dist/` para el alojamiento existente.
- La guía de ejecución local está en `mo-co/README.md`; puede servirse desde `mo-co` con `python -m http.server 4173 --bind 127.0.0.1 --directory dist`.
- Impeccable guía las iteraciones de interfaz dentro del sistema existente, documentado en `DESIGN.md`; esta ampliación conserva su identidad.

## Capabilities and Constraints

### Alcance existente

- **Nuestra estrategia:** misión, visión, cinco valores, 22 puntos FODA, tres objetivos SMART, estrategias y planes de acción.
- **Nuestra organización:** responsables y frentes de las iniciativas documentadas; el organigrama general sigue pendiente.
- **Nuestra forma de trabajar:** principios y colaboración que pueden sustentarse en la planeación; las políticas formales aún no están documentadas.
- **Nuestro compromiso:** estándares derivados de los objetivos, metas previstas y verificaciones especificadas en los planes.
- Navegación entre páginas y subapartados, enlaces de regreso al inicio y lectura del contenido empresarial y las fichas sin depender de JavaScript. La búsqueda, los filtros, la bolsa y las solicitudes locales requieren JavaScript y las capacidades correspondientes del navegador.
- Sitio estático con catálogo de 15 modelos, cuatro paquetes, fichas, búsqueda y filtros; conserva las cuatro páginas empresariales anteriores.
- Bolsa de solicitud de pedido sin cobros ni confirmación de compra. Conserva únicamente artículos, cantidades y modalidad de entrega en `localStorage` y permite descargar el resumen.
- Atención con formulario de consultas, quejas, sugerencias, garantía y cambios. Prepara solicitudes locales en `sessionStorage`, con folio, descarga, consulta por folio y correo y eliminación. El texto se conserva si falla la preparación. No se envían datos a MO ni se anuncia recepción real.
- No incluye cuentas, backend, servicio operativo de correo, pagos, paquetería ni pedidos. Los correos `.example` son referencias ficticias copiables. Los plazos de atención comenzarían una vez recibida realmente una solicitud, no al prepararla localmente.

### Restricciones confirmadas por el usuario

- Trabajar sobre la página actual mediante iteraciones; no reconstruirla desde cero.
- Conservar todos los textos, secciones y funcionalidades existentes salvo indicación expresa del usuario.
- Priorizar diseño visual, jerarquía, navegación, experiencia de usuario, adaptación a pantallas y coherencia con MO Co.
- Mantener el contenido de la planeación; los nombres públicos de los apartados deben resultar naturales para un sitio empresarial.
- Interpretar futuras solicitudes de revisión o pulido dentro de estas restricciones. Una petición general de rediseño no autoriza por sí sola eliminar contenido o reconstruir el proyecto.
- No publicar la ampliación ni conectar pagos o mensajería como efecto secundario; el alcance es dejar el código utilizable y revisable.

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
- La ampliación aprobada continúa el sistema petróleo, menta y amarillo, con Chakra Petch y Manrope; mantiene el Hero y las cuatro páginas empresariales.

## Evidence on Hand

- `U1 A2. Planeación estratégica_Eqverde.pdf`: fuente de la planeación y de sus textos.
- `mo-co/src/app/page.tsx` y `mo-co/src/app/globals.css`: contenido, estructura e implementación visual actuales.
- `mo-co/src/app/store.css` y `mo-co/src/components/shop/`: extensión visual e interacciones de catálogo, paquetes, bolsa y atención.
- `mo-co/src/data/products.json`, `mo-co/src/data/service-copy.json`, `mo-co/src/lib/store.ts` y `mo-co/src/lib/support.ts`: fichas, textos aprobados y reglas locales de la ampliación.
- `mo-co/docs/contenido-aprobado.md` y `mo-co/docs/ampliacion-catalogo.md`: contrato de contenido y alcance de la implementación.
- `mo-co/docs/catalog-image-production.json` y `mo-co/public/assets/products/`: procedencia y 15 ilustraciones conceptuales del catálogo, generadas individualmente; no son fotografías de productos físicos ni recursos oficiales.
- `mo-co/dist/index.html`: salida estática de la compilación para revisar y alojar; su existencia no acredita publicación.
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
