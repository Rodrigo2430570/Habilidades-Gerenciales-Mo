# Ampliación de catálogo y atención de MO Co.

Fuente de contenido: `contenido-aprobado.md`, entregado por el usuario el 2 de noviembre de 2026. Las características, políticas y precios son una propuesta comercial ficticia, no especificaciones oficiales de la serie. Las notas sobre presentación y prototipo no forman parte de la implementación web.

## Implementación

- Inicio conservado, con el acceso adicional «Un MO para cada día». Siguen accesibles estrategia, filosofía, organización, forma de trabajar y compromiso, con sus rutas y anclas originales.
- Navegación compartida con Inicio, Conoce MO, Nuestros productos, Más juntos, mejor, Ayuda y Bolsa con contador. En móvil se mantienen enlaces directos a las cuatro páginas empresariales.
- 15 modelos con SKU único, precios originales, categorías, búsqueda por función y alias (`heartmo`, `squaremo`, `flowermo`), ordenamiento y estado sin resultados.
- Una ficha exportada por modelo: imagen completa, funciones, tabla técnica, MO OS 1.0, caja, cantidades, preparación, costos, recolección, devoluciones, garantía y ayuda con producto preseleccionado.
- Cuatro paquetes con composición exacta, suma individual, precio de campaña y ahorro calculado. Se conserva una línea de bolsa por paquete; no se cobran otra vez sus componentes.
- Campaña centralizada del 2 al 30 de noviembre de 2026, inclusive, en `America/Mexico_City`. Fuera de vigencia se retiran los mensajes de oferta activa y se usa la suma individual, incluso para bolsas guardadas. El reloj vuelve a comprobar al enfocar la ventana y en los límites de campaña. El HTML previo a hidratar usa precios regulares de forma conservadora.
- Bolsa: cantidades enteras, eliminación, subtotales, envío estándar, manejo especial por unidad MMO, recolección gratuita y resumen descargable. La selección se conserva sin datos personales.
- Ayuda: contactos copiables, horarios, promesa de atención, seguimiento, 10 preguntas frecuentes con botones accesibles y condiciones completas de compra.
- Formulario único para consultas, quejas, sugerencias, garantía y cambios. Validación junto al campo, foco en el primer error y conservación del texto si falla una operación. El número de pedido es opcional.
- Folio local aleatorio, comprobante descargable, consulta por folio y correo en la sesión y eliminación del registro. Solo se muestra el registro coincidente.

## Fuentes y componentes

`src/data/products.json` contiene las 15 fichas. `src/data/service-copy.json` conserva los párrafos aprobados de compras y las preguntas frecuentes. `src/lib/store.ts` centraliza precios, composición de paquetes, fechas y reglas de entrega. `src/lib/support.ts` centraliza la validación y el formato de solicitudes.

Las páginas nuevas están en `src/app/{productos,paquetes,ayuda,compras-y-entregas,bolsa}`; las fichas se exportan desde `src/app/productos/[slug]/page.tsx`. Los componentes interactivos están en `src/components/shop/`. `src/app/store.css` reutiliza los tokens de paleta y las fuentes locales, los bordes y el espaciado existentes. No se sustituyeron las páginas empresariales anteriores.

Los 15 PNG finales están en `public/assets/products/`. Se generaron individualmente mediante la herramienta integrada Imagegen, tomando las siluetas indicadas en el documento y la referencia visual de la serie. No se reutilizó un BMO recoloreado. Los prompts exactos están en `catalog-image-production.json` y en los metadatos de cada PNG. Se presentan como ilustraciones conceptuales; no como fotografías de productos físicos.

## Continuidad del sistema existente

Esta es una extensión ordinaria del sitio. `src/app/page.tsx` conserva `Hero`, los destinos de estrategia, organización, trabajo y compromiso y la galería editorial; añade el acceso «Un MO para cada día» después del Hero. La navegación y el pie compartidos integran los nuevos recorridos. La planeación conserva su contenido y sus metas previstas, sin convertirlas en resultados ni completar datos organizacionales pendientes.

El contraste entre `DESIGN.md`, `src/app/globals.css` y `src/app/store.css` confirma petróleo institucional, menta MO, amarillo señal, papel frío y superficies blancas. Continúan Chakra Petch en titulares y precios, Manrope en texto y controles, superficies planas, reglas finas y esquinas contenidas. Las ilustraciones aportan el volumen del personaje; no se creó otra composición de identidad ni un sistema de tokens independiente.

`StoreHeader`, `ProductCatalog`, `BundleCatalog` y la ficha de producto colocan las etiquetas conservadas, categorías y SKU después del título. Las acciones direccionales y de incorporación reutilizan `Arrow` y `Plus` en SVG. Los metadatos no se convierten en encabezados decorativos encima de títulos.

La evidencia documental revisada comprende los contratos de producto y contenido, las fuentes anteriores, `src/lib/store.ts`, `SupportForms.tsx`, el informe de imágenes y los JPEG de `.impeccable/review/` (inicio, catálogo, ficha, paquetes, ayuda y bolsa). Las capturas de las superficies afectadas se renovaron después de corregir contraste, iconos y posición de metadatos. La revisión independiente puntuó los cuatro ajustes materiales como resueltos, con disposición `ship` al alcance de esos hallazgos. Los PNG de esa carpeta corresponden a iteraciones anteriores.

`DESIGN.md` y `.impeccable/design.json` se preservan. Existe deriva documental previa: el primero usa una guía narrativa sin frontmatter de tokens y el sidecar conserva referencias y ejemplos de una versión anterior de una sola página. Esta ampliación no autoriza regenerarlos ni convierte esos ejemplos en reglas nuevas.

## Ejecutar y verificar

Desde `mo-co`:

```sh
npm run dev
```

Para revisar la exportación final:

```sh
npm run typecheck
npm test
npm run build
python -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Abrir `http://127.0.0.1:4173`. No abrir directamente los HTML mediante `file://`, porque la aplicación usa rutas absolutas y almacenamiento por origen.

## Límites operativos

No hay un servicio de recepción, correo, pagos, paquetería o pedidos conectado. Preparar una solicitud no la envía ni inicia el plazo de atención; su estado es siempre «Preparada · pendiente de envío». Se puede descargar y eliminar. Permanece solo en `sessionStorage` durante la sesión del navegador. Si este impide el almacenamiento, se informa el fallo y se conserva el formulario.

La bolsa guarda solo identificadores, cantidades y modalidad en `localStorage`. El resumen es una «Solicitud de pedido · pendiente de confirmación»: no hay cobros ni confirmación de disponibilidad, cobertura, fecha o cita. Los correos `.example` son referencias ficticias copiables.

No se publicaron cambios ni se conectaron servicios externos. `npm run build` genera la exportación utilizable y revisable en `dist/`.

## Verificación y capturas

Los resultados finales de compilación, pruebas y revisión visual están en `verificacion-catalogo.md`. Las capturas en `capturas/` proceden del navegador y la exportación real; no son montajes ni propuestas de diseño. No contienen datos personales reales. `capturas/README.md` identifica las pantallas y las vistas renovadas de la versión entregada.
