# Verificación de catálogo, ayuda y bolsa

Revisión realizada el 2 de noviembre de 2026, hora del centro de México, sobre la exportación real de Next.js. El sitio no se publicó ni se conectaron servicios externos.

## Controles ejecutados

- `npm run typecheck`: correcto. La compilación final también completó su control de tipos.
- `npm test`: 7 pruebas correctas, sin fallos. Cubren los 19 SKU únicos, las cuatro composiciones y ahorros, límites inclusivos de campaña en México, los siete ejemplos de pedido, cantidades, envíos mixtos, retiro gratuito, almacenamiento alterado, alias y validación del formulario.
- `npm run build`: correcto, sin avisos. Generación de rutas y exportación estática completas; `scripts/sync-dist.mjs` terminó con código 0. Se añadieron comprobación del destino y reintentos ante bloqueos temporales de archivos en Windows/OneDrive.
- Auditoría de exportación: 27 archivos HTML con un solo H1, 57 rutas/recursos locales con respuesta HTTP 200, sin enlaces ni anclas rotos, 15 imágenes de producto con hashes distintos. Se verificó que `dist/` coincide con `out/`.
- Revisión de estilos mediante Impeccable: sin hallazgos del detector en `store.css`. La revisión independiente identificó cuatro ajustes materiales: contraste, jerarquía de metadatos, iconos y verdad documental. Los cuatro fueron puntuados como resueltos tras corregirlos y renovar las capturas; disposición final `ship` al alcance de esos hallazgos.

## Comprobación en el navegador

Escritorio 1440 × 1000, móvil 390 × 844 y tablet 900 × 1000. Se comprobaron tres, una y dos columnas respectivamente. Sin desbordamientos horizontales en catálogo, ficha, tabla técnica, ayuda, bolsa y paquetes revisados. Las imágenes conservan el cuerpo completo y cada modelo tiene su propio render.

Se comprobaron búsqueda por alias, ordenamiento por precio, limpieza de filtros, estado sin resultados, agregado con aviso accesible, cambio de cantidades, eliminación explícita y mediante cantidad cero, bolsa vacía y conservación de la selección entre páginas. El menú móvil abre y cierra, responde a Escape y devuelve el foco al resumen. Los acordeones responden a teclado y actualizan `aria-expanded`.

Los detalles se presentan en rutas propias; no se introdujeron diálogos de producto. Se mantienen las cuatro rutas empresariales, su contenido y sus anclas; también se corrigió el destino de «Saltar al contenido» en la página 404.

| Pedido con campaña activa | Subtotal | Domicilio | Total |
|---|---:|---:|---:|
| BMO Play | $8,999 | $199 | $9,198 |
| DMO Welcome | $18,999 | $0 | $18,999 |
| Dúo Bloom | $9,898 | $199 | $10,097 |
| Recepción en Equipo | $22,498 | $0 | $22,498 |
| MMO Assist XL | $39,999 | $499 | $40,498 |
| MMO Assist XL + BMO Play | $48,998 | $698 | $49,696 |
| BMO Play con recolección | $8,999 | $0 | $8,999 |

Los siete ejemplos pasaron por pruebas automatizadas. Además se comprobó en pantalla el pedido mixto, la recolección gratuita y Dúo Bloom como una sola línea sin doble cobro de integrantes. Se descargó y leyó un resumen real con la leyenda de solicitud pendiente, cantidades, modalidad y cargos separados.

## Atención local y privacidad

Se comprobó que el formulario muestra errores junto al campo y conserva el mensaje escrito; no exige pedido. Se preparó una solicitud con datos sintéticos, se descargó y leyó su comprobante, se consultó con folio y correo coincidentes y se rechazó la consulta con otro correo. El registro se eliminó desde la interfaz y dejó de encontrarse. Se verificó el estado «Preparada · pendiente de envío» y el aviso explícito de que no se envía a MO. No hay transición automática a recepción, revisión o resolución.

El texto descargado conservó el mensaje original. Los contactos se copian y muestran «Dirección copiada». No hay `mailto:`, envío a `.example`, llamadas de red para solicitudes, cargas de archivos ni cobros. No se registran datos personales en consola ni se incorporan a URLs o archivos del repositorio. Las capturas usan formularios vacíos y datos de pedido sin información personal real; los registros sintéticos de sesión se eliminaron desde la interfaz.

## Evidencia y límites

Las 20 capturas legibles están en `capturas/`; su índice explica qué pantalla corresponde a cada archivo. Las vistas de revisión de escritorio, móvil y tablet son los JPEG de `.impeccable/review/`. Se renovaron tras las correcciones finales; no son montajes ni diseños simulados.

La revisión no acredita un canal operativo de atención, un pago, cobertura de paquetería, existencias, una fecha de entrega o una cita. Esas confirmaciones requieren servicios reales aún no conectados, tal como se explica en el sitio.

La deriva preexistente entre `DESIGN.md` y su sidecar de Impeccable se documentó sin repararla. Puede sincronizarse en otra tarea mediante `document`. El contexto de la habilidad también anunció una actualización de v4.3.1 a v4.8.0; no se actualizó la herramienta durante la implementación.
