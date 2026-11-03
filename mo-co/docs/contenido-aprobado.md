# MO Co. · Unidad 2 · Contenido y prompt completo para Codex

Preparado para Fernando y el equipo verde · 2 de noviembre de 2026.

## Cómo usar este documento

Abre en Codex la carpeta que contiene el código de la página actual de MO. Adjunta este documento y, si las imágenes anteriores no están en el proyecto, las imágenes de los robots que ya generamos. Pega esta instrucción:

> Continúa la página existente de MO Co. siguiendo íntegramente el documento `MO_Unidad_2_Prompt_Completo_Codex.md`. Implementa los apartados nuevos, sus textos, los 15 productos y los 4 paquetes. Conserva la identidad y el contenido anterior. Trabaja hasta dejarlo implementado y verificado; no te limites a proponer un plan. Las decisiones de contenido ya están resueltas en el documento.

El PDF de Unidad 1 es una referencia visual: contiene evidencias de la página, no su código editable. No se ha modificado aquí el sitio ni la presentación.

Los 15 nombres comerciales y sus precios conservan la propuesta anterior de `catalogo_mo_15_productos.md`. Las especificaciones, las funciones comerciales añadidas, los precios, los contactos y las políticas siguientes pertenecen a la empresa ficticia. No son especificaciones oficiales ni ofertas reales. Esta aclaración es para el equipo y Codex; no debe repetirse dentro de cada tarjeta del sitio.

---

# PROMPT DE IMPLEMENTACIÓN PARA CODEX

## 1. Objetivo y alcance

Continúa el sitio existente de **MO Co.**, con el lema **«Tecnología con corazón»**. Incorpora una experiencia empresarial de catálogo y atención al cliente, coherente con el avance de Unidad 1.

Debes implementar:

1. Atención al cliente: «Estamos para ayudarte», canales de contacto y horarios.
2. Quejas y sugerencias: formulario, explicación de seguimiento y consulta de folio.
3. «Nuestros productos»: 15 productos con imagen, nombre, descripción, precio, características, contenido de la caja y condiciones de compra.
4. Cuatro paquetes en «Más juntos, mejor», con ahorro calculado correctamente.
5. Información de entregas, recolección, cambios, devoluciones y garantía.
6. Interacciones funcionales: navegación, búsqueda, filtros, fichas de producto, formulario, preguntas frecuentes y bolsa de pedido sencilla.

El avance físico del prototipo queda fuera del sitio y de este trabajo. No agregues fotos, porcentajes de construcción, mensajes de «70 % terminado» ni una página de prototipo.

El sitio debe hablar como una empresa ante sus clientes. No mostrar «Unidad 2», «actividad», «equipo verde», «evidencia», «tarea escolar», teoría de negociación ni explicaciones de la rúbrica dentro de las nuevas secciones. Los nombres de la unidad solo pertenecen a la presentación de evidencias y a la documentación del proyecto.

## 2. Revisa y conserva el proyecto

- Lee las instrucciones del repositorio y revisa su estructura, dependencias, rutas, componentes y carpeta de imágenes antes de editar.
- Usa la tecnología que ya tenga. No migres el proyecto ni sustituyas su diseño completo.
- Conserva el inicio y la información anterior: estrategia, filosofía, organización, forma de trabajar y compromiso. Mantén sus enlaces y rutas accesibles.
- No elimines trabajo anterior para acomodar el catálogo.
- Reutiliza el logotipo, tipografía, botones, componentes y estilos existentes.
- Antes de reemplazar una imagen existente, comprueba que sea del modelo correspondiente.
- Guarda los productos y las reglas de precio en datos estructurados; evita repetir importes y políticas manualmente en muchos componentes.
- Si existen backend, formularios o carrito, amplíalos. No crees un segundo sistema incompatible.

### Lo observado en el PDF de Unidad 1

La presentación tiene 18 diapositivas. La página usa verde petróleo oscuro, verde menta, blanco o gris muy claro, textos oscuros, tipografía sans serif con títulos de peso alto, imágenes amplias, tarjetas con bordes discretos y bastante espacio entre secciones. El inicio dice «Conoce MO Co. a tu ritmo». Hay apartados de estrategia, organización, forma de trabajar y compromiso.

Esta identidad es la referencia. No conviertas la ampliación en una tienda genérica con un estilo distinto.

### Criterios visuales

- Usa los colores y fuentes reales del proyecto. Si no están definidos, estas aproximaciones pueden servir de respaldo: petróleo `#12343C`, menta `#B4DFC5`, fondo `#F5F7F5`, texto `#17363A`, amarillo de acento `#F2D369`.
- Mantén el amarillo para acciones o avisos puntuales; no lo uses como fondo de todas las tarjetas.
- Tipografía de cuerpo legible, preferentemente 16 px o más. No reduzcas la letra para hacer caber fichas enteras.
- Contenido principal de aproximadamente 1120–1240 px de ancho máximo.
- Catálogo en 3 columnas en escritorio, 2 en tablet y 1 en móvil, ajustándolo a los componentes existentes.
- Tarjetas con la misma proporción de imagen y un orden constante; no necesitan tener el mismo número de palabras.
- Botones visibles, estados de foco, contraste suficiente y controles accesibles por teclado.
- Imágenes de cuerpo completo con `object-fit: contain`; no cortar cabezas, brazos ni bases.
- Texto breve en tarjetas; detalles en una página o panel de producto.
- Evita carruseles automáticos, ventanas promocionales invasivas, animaciones constantes y grandes párrafos dentro de tarjetas pequeñas.

## 3. Navegación y organización

Integra estos destinos al menú actual:

- **Inicio**.
- **Conoce MO**: permite acceder a los apartados anteriores sin perderlos.
- **Nuestros productos**.
- **Más juntos, mejor**.
- **Ayuda**.
- **Bolsa** con número de artículos.

Respeta las rutas existentes. Los nombres de rutas siguientes son orientativos: `/productos`, `/paquetes`, `/ayuda`, `/compras-y-entregas` y `/productos/{slug}`. Si el proyecto es una sola página, usa secciones y anclas equivalentes.

En móvil, el menú debe poder abrirse y cerrarse con teclado y pantalla táctil. La barra fija no debe tapar el título de la sección al navegar.

En el inicio agrega dos accesos, sin reemplazar el contenido anterior:

**Título:** «Un MO para cada día.»

**Texto:** «Compañeros para jugar, aprender, crear y cuidar lo que importa. Encuentra el MO que mejor va contigo.»

**Botones:** «Explorar productos» y «Necesito ayuda».

## 4. Atención al cliente: contenido definitivo

### Encabezado

**Etiqueta:** «Atención al cliente».

**Título:** «Estamos para ayudarte.»

**Texto:** «Elegir tu MO es solo el comienzo. Te acompañamos para resolver dudas, preparar tu pedido y cuidar su funcionamiento y los recuerdos que lo hacen único.»

**Botones:** «Hacer una consulta» y «Enviar queja o sugerencia».

### Canales y horario

La empresa ficticia cuenta con estos canales:

| Canal | Dato o texto | Acción |
|---|---|---|
| Formulario de atención | «Cuéntanos qué necesitas y encontraremos la mejor forma de ayudarte.» | Abrir formulario con tipo «Consulta». |
| Correo de atención | `atencion@mo-co.example` | Copiar dirección. |
| Quejas y sugerencias | `experiencia@mo-co.example` | Abrir formulario con tipo «Queja» o copiar dirección. |
| Consulta de solicitudes | «Revisa tu solicitud con su folio.» | Ir a consulta de folio. |
| Horario | «Lunes a viernes, de 9:00 a 18:00 h. Hora del centro de México.» | Texto visible. |

**Nota técnica para Codex y el equipo:** los dominios `.example` son direcciones ficticias reservadas para ejemplos; no existen como buzones operativos de MO. No los sustituyas por correos de terceros, no inventes un WhatsApp y no configures envíos reales hacia estas direcciones. Centraliza los contactos en configuración. Si se añade un correo real verificado, entonces puede habilitarse `mailto:` y conectarse al servicio correspondiente. En esta entrega, el botón de correo copia el dato y no afirma que se haya enviado un mensaje.

### Promesa de atención

Muestra una franja breve con tres puntos:

- **Te escuchamos:** «Revisamos cada solicitud de forma individual.»
- **Te mantenemos al tanto:** «Primera respuesta en 1 a 2 días hábiles, una vez recibida tu solicitud.»
- **Cuidamos tu MO:** «Antes de una reparación, acordamos contigo el diagnóstico, el respaldo y el plazo estimado.»

No prometas resolver cualquier reparación en 24 o 48 horas. La primera respuesta y la solución son etapas distintas.

## 5. Quejas, sugerencias y seguimiento

### Texto de la sección

**Título:** «Tu opinión nos ayuda a ser más.»

**Texto:** «Si algo no salió como esperabas o tienes una idea para mejorar, queremos escucharte. Cuéntanos lo ocurrido y comparte los datos de tu pedido, si los tienes. Revisaremos tu caso y te explicaremos los siguientes pasos.»

### Formulario

Un solo formulario puede atender consultas, quejas, sugerencias, garantía y devoluciones. Campos:

- Tipo de solicitud: Consulta / Queja / Sugerencia / Garantía / Cambio o devolución.
- Nombre: obligatorio, hasta 80 caracteres.
- Correo electrónico: obligatorio, formato válido.
- Número de pedido: opcional; no impedir una queja si la persona no lo tiene.
- Producto relacionado: selector con los 15 modelos, los 4 paquetes y «Otro / No aplica».
- Asunto: obligatorio, hasta 120 caracteres.
- Mensaje: obligatorio, de 10 a 2000 caracteres.
- Casilla obligatoria: «He leído cómo se utilizarán mis datos para atender esta solicitud»; enlazar al aviso breve de esta página.

**No pedir:** identificación oficial, domicilio completo, fecha de nacimiento, contraseñas ni datos bancarios. No agregar carga de archivos si no existe un almacenamiento apropiado; la actividad no la exige.

**Textos de validación:**

- «Escribe tu nombre.»
- «Ingresa un correo válido para poder responderte.»
- «Selecciona el tipo de solicitud.»
- «Cuéntanos un poco más: escribe al menos 10 caracteres.»
- «Tu mensaje puede tener hasta 2000 caracteres.»
- «Confirma que has leído el uso de tus datos.»
- «No pudimos completar la operación. Conservamos el texto para que puedas intentarlo de nuevo.»

Muestra el error junto al campo y conserva la información escrita al fallar. No uses únicamente alertas del navegador.

### Seguimiento: texto empresarial

Presenta estos cuatro pasos con iconos sencillos:

1. **Recibimos tu solicitud.** «Te asignamos un folio para identificar tu caso.»
2. **Revisamos lo ocurrido.** «Te damos una primera respuesta en 1 a 2 días hábiles y solicitamos únicamente la información necesaria.»
3. **Acordamos una solución.** «Te explicamos las alternativas y el plazo estimado según el diagnóstico.»
4. **Confirmamos contigo.** «Mantenemos el seguimiento hasta comunicar el resultado y escuchar tus comentarios.»

**Texto adicional:** «Si la revisión continúa, te compartiremos una actualización al menos cada 2 días hábiles. Para consultar un caso, ten a la mano tu folio y el correo registrado.»

Estos tiempos son políticas propuestas de la empresa ficticia, no resultados ya demostrados.

### Comportamiento según la infraestructura

**Si existe un servicio real configurado:** enviar la solicitud, persistirla en servidor y generar folio único solo después de una respuesta exitosa. Mostrar «Recibimos tu solicitud» y el folio únicamente si el servidor confirmó la recepción. No anunciar correo de confirmación si no se ha enviado realmente. La consulta de estado debe validar acceso al caso y no exponer datos solo por adivinar un folio.

**Si el sitio es estático o no existe servicio de envío:** implementar un modo local funcional y honesto, sin contratar servicios, solicitar claves, inventar confirmaciones ni detener el desarrollo.

- Botón: **«Preparar solicitud»**.
- Antes del botón: «Puedes preparar y descargar tu solicitud. El envío al equipo de atención aún no está disponible en este canal.»
- Guardar temporalmente el caso en `sessionStorage`, con fecha y folio local, para poder consultarlo mientras esa sesión del navegador siga abierta.
- Confirmación: **«Tu solicitud está preparada. Descarga el comprobante para conservarla. Aún no se ha enviado al equipo de MO.»**
- Botones: «Descargar solicitud» y «Copiar folio».
- Estado: **«Preparada · pendiente de envío»**. No avanzar automáticamente a «En revisión» o «Resuelta».
- Consulta: título «Consultar solicitud preparada», con folio y correo. Si se encuentra, enseñar solo ese registro de la sesión. Mensaje de ayuda: «Disponible en esta sesión del navegador. Conserva el archivo descargado para no perder tu información.»
- Si no existe: «No encontramos una solicitud con esos datos en esta sesión. Verifica el folio y el correo.»
- Permitir eliminar el registro local al usuario.
- No guardar información personal en el repositorio, registros de consola, URLs o datos públicos.

El modo local es una función para preparar solicitudes; no equivale a un canal operativo de recepción. Explica esta limitación al equipo al entregar la implementación, sin ocultarla. La estructura y el texto de seguimiento deben quedar listos para activar el envío cuando exista un servicio real.

### Aviso breve junto al formulario

**Título:** «Tu información, con cuidado.»

**Texto general:** «Usaremos tu nombre, correo y mensaje para atender esta solicitud y comunicar su seguimiento. No incluyas contraseñas, información bancaria ni documentos personales.»

**En modo local, agregar:** «La solicitud preparada se conserva temporalmente en esta sesión del navegador y no se envía a MO. Puedes descargarla o eliminarla cuando quieras.»

Este texto describe el tratamiento previsto; no presentarlo como una política jurídica certificada.

## 6. Catálogo: estructura y textos generales

**Etiqueta:** «Nuestros productos».

**Título:** «Encuentra tu próximo MO.»

**Texto:** «Cada MO tiene una forma distinta de acompañarte. Explora compañeros para tu hogar, tu negocio y tus mejores ideas.»

**Franja informativa:** «Precios en MXN · IVA incluido · Garantía de 12 meses · Entrega a domicilio o recolección».

### Controles

- Búsqueda por nombre o función: «Busca tu MO o lo que necesitas».
- Filtros: Todos / Compañía y entretenimiento / Hogar y aprendizaje / Negocios y asistencia / Modulares.
- Orden: Recomendados / Menor precio / Mayor precio / Nombre A–Z.
- Mostrar la cantidad de resultados y un botón «Limpiar filtros».
- Sin resultados: «No encontramos un MO con esa búsqueda. Prueba con otro nombre o explora el catálogo completo.»

### Cada tarjeta

Mostrar imagen, nombre comercial, frase corta, precio, 2 o 3 características breves, botón **«Ver mi MO»** y botón **«Agregar a la bolsa»**.

El acceso a condiciones de compra y entrega debe estar disponible desde la tarjeta o su ficha, sin depender exclusivamente del pie de página. No colocar la ficha técnica completa en la tarjeta.

### Cada ficha de producto

Incluir:

- Nombre y SKU.
- Imagen amplia, descripción y categoría.
- Precio final con IVA, sin cobros ocultos.
- Funciones principales.
- Tabla técnica: procesador, RAM, almacenamiento, materiales, batería, autonomía, conectividad, medidas, peso y color.
- Contenido de la caja.
- Garantía de 12 meses.
- Preparación, entrega y recolección aplicables a ese modelo.
- Resumen visible de cambios y devoluciones, con enlace a los detalles.
- Selector de cantidad y acción para agregar a bolsa.
- Enlace «¿Tienes dudas sobre este MO?» que abra ayuda con el producto seleccionado.

Los 15 modelos usan el sistema ficticio **MO OS 1.0**. Las autonomías se expresan como «hasta» y dependen del uso. No afirmar que se realizaron pruebas o certificaciones.

## 7. Los 15 productos: contenido definitivo

Los nombres comerciales, SKU y precios siguientes son la fuente de verdad. No cambies procesadores, importes ni combinaciones de los paquetes por intuición. Las funciones comerciales son nuestra adaptación para la tienda; no deben describirse en documentación como capacidades oficiales de la serie.

### 01 · BMO Play — Compañero de aventuras

- **SKU:** MO-BMO-001. **Precio:** $8,999 MXN. **Filtro:** Compañía y entretenimiento.
- **Frase de tarjeta:** «Juega, escucha y crea recuerdos.»
- **Descripción:** «Un compañero que convierte cualquier tarde en una aventura. Juega, escucha música, captura momentos y organiza tus actividades desde un solo robot.»
- **Funciones:** videojuegos retro, reproducción musical, cámara de 8 MP, grabación de voz y recordatorios.
- **Procesador:** MO Core B4, 4 núcleos a 2.0 GHz. **RAM / almacenamiento:** 8 GB / 128 GB.
- **Materiales:** ABS reciclado, estructura interna de aluminio y extremidades de silicona.
- **Batería / autonomía:** 6,000 mAh; hasta 10 h de uso mixto.
- **Conectividad:** Wi-Fi, Bluetooth, USB-C y salida de audio de 3.5 mm.
- **Medidas / peso:** 28 × 20 × 11 cm; 1.8 kg. **Color:** verde menta.
- **Incluye:** robot BMO, cargador USB-C de 30 W, cable y guía de inicio.
- **Entrega:** estándar. **Preparación:** 2 a 4 días hábiles. **Garantía:** 12 meses.

### 02 · CMO Assist — Ayudante compacto

- **SKU:** MO-CMO-002. **Precio:** $5,999 MXN. **Filtro:** Negocios y asistencia.
- **Frase de tarjeta:** «Pequeño por fuera. Útil todos los días.»
- **Descripción:** «CMO te ayuda a mantener tus pendientes en orden y a realizar tareas sencillas en casa o en el taller. Un ayudante compacto para las pequeñas cosas que hacen más fácil el día.»
- **Funciones:** agenda por voz, clasificación de objetos, traslado de artículos de hasta 1 kg y entrega de herramientas.
- **Procesador:** MO Core C2, 2 núcleos a 1.6 GHz. **RAM / almacenamiento:** 4 GB / 64 GB.
- **Materiales:** ABS reciclado, soportes de aluminio y manos de silicona.
- **Batería / autonomía:** 5,000 mAh; hasta 12 h de uso mixto.
- **Conectividad:** Wi-Fi, Bluetooth y USB-C.
- **Medidas / peso:** 22 × 14 × 9 cm; 1.2 kg. **Color:** beige.
- **Incluye:** robot CMO, base de carga, adaptador y guía de uso.
- **Entrega:** estándar. **Preparación:** 2 a 4 días hábiles. **Garantía:** 12 meses.

### 03 · DMO Welcome — Recepcionista inteligente

- **SKU:** MO-DMO-003. **Precio:** $18,999 MXN. **Filtro:** Negocios y asistencia.
- **Frase de tarjeta:** «La primera bienvenida de tu negocio.»
- **Descripción:** «Recibe visitantes, responde preguntas frecuentes y orienta a cada persona hacia su destino. DMO ayuda a que la primera impresión también se sienta cercana.»
- **Funciones:** registro de visitas, directorio interactivo, recorridos guiados y respuestas en español e inglés.
- **Procesador:** MO Core D4, 4 núcleos a 2.2 GHz. **RAM / almacenamiento:** 8 GB / 256 GB.
- **Materiales:** ABS reforzado, chasis de aluminio y articulaciones de elastómero.
- **Batería / autonomía:** 20,000 mAh; hasta 10 h de atención.
- **Conectividad:** Wi-Fi, Bluetooth, Ethernet mediante base y USB-C.
- **Medidas / peso:** 60 × 28 × 20 cm; 6.5 kg. **Color:** caqui con extremidades amarillas.
- **Incluye:** robot DMO, estación de carga y configuración inicial de directorio.
- **Entrega:** estándar. **Preparación:** 2 a 4 días hábiles. **Garantía:** 12 meses.

### 04 · EMO Restore — Técnico de sistemas

- **SKU:** MO-EMO-004. **Precio:** $24,999 MXN. **Filtro:** Negocios y asistencia.
- **Frase de tarjeta:** «Cuida su sistema. Conserva sus recuerdos.»
- **Descripción:** «Acompaña el diagnóstico y la restauración de tus robots con un proceso que prioriza el respaldo de información. EMO ayuda a revisar antes de intervenir y a conservar lo que hace único a cada MO.»
- **Funciones:** diagnóstico, copias de seguridad, recuperación de archivos disponibles y reinicio únicamente con autorización. No prometer recuperación garantizada de cualquier archivo.
- **Procesador:** MO Core E6, 6 núcleos a 2.4 GHz. **RAM / almacenamiento:** 16 GB / 512 GB.
- **Materiales:** aluminio anodizado, paneles de ABS y orugas de caucho.
- **Batería / autonomía:** 24,000 mAh; hasta 8 h de trabajo.
- **Conectividad:** Wi-Fi, Ethernet, USB-C y dos puertos USB de diagnóstico.
- **Medidas / peso:** 55 × 38 × 30 cm; 9 kg. **Color:** gris oliva con brazos azules.
- **Incluye:** robot EMO, estación de carga, cables de diagnóstico y kit de respaldo.
- **Entrega:** estándar. **Preparación:** 2 a 4 días hábiles. **Garantía:** 12 meses.

### 05 · SMO Guard — Vigilancia de instalaciones

- **SKU:** MO-SMO-005. **Precio:** $32,999 MXN. **Filtro:** Negocios y asistencia.
- **Frase de tarjeta:** «Un apoyo atento para tus espacios.»
- **Descripción:** «SMO recorre rutas programadas y avisa cuando detecta actividad fuera de lo habitual. Un apoyo para supervisar instalaciones y mantener a tu equipo informado.»
- **Funciones:** patrullaje, cámara de 1080p, detección de movimiento, alertas y registro de accesos. Uso de supervisión, sin armas y sin prometer protección absoluta.
- **Procesador:** MO Core S8, 8 núcleos a 2.8 GHz. **RAM / almacenamiento:** 16 GB / 512 GB.
- **Materiales:** aluminio, refuerzos de acero y paneles de policarbonato.
- **Batería / autonomía:** 30,000 mAh; hasta 12 h de patrullaje.
- **Conectividad:** Wi-Fi, Ethernet mediante base y USB-C.
- **Medidas / peso:** 75 × 35 × 28 cm; 12 kg. **Color:** grafito y caqui.
- **Incluye:** robot SMO, estación de carga, baliza de acceso y guía de instalación.
- **Entrega:** estándar. **Preparación:** 2 a 4 días hábiles. **Garantía:** 12 meses.

### 06 · MMO Assist XL — Asistente de carga

- **SKU:** MO-MMO-006. **Precio:** $39,999 MXN. **Filtro:** Negocios y asistencia.
- **Frase de tarjeta:** «Más apoyo para mover tus ideas.»
- **Descripción:** «MMO transporta materiales y acompaña labores de traslado dentro de espacios preparados. Su estructura amplia permite organizar tareas que necesitan mayor capacidad de carga.»
- **Funciones:** traslado de materiales de hasta 60 kg, seguimiento de rutas, detección de obstáculos y control de velocidad. Esta versión comercial se ofrece para materiales; no anunciar transporte de personas.
- **Procesador:** MO Core M8, 8 núcleos a 2.6 GHz. **RAM / almacenamiento:** 16 GB / 512 GB.
- **Materiales:** aluminio reforzado, cubiertas de ABS y superficies de agarre de silicona.
- **Batería / autonomía:** 48,000 mAh; hasta 8 h de trabajo.
- **Conectividad:** Wi-Fi, Bluetooth y puerto de servicio.
- **Medidas / peso:** 90 × 60 × 40 cm; 24 kg. **Color:** azul con laterales grafito.
- **Incluye:** robot MMO, base de carga industrial, adaptador y guía de operación.
- **Entrega:** especial por volumen, $499 por unidad; no participa en envío estándar gratuito. **Preparación:** 5 a 7 días hábiles. **Garantía:** 12 meses.

### 07 · QMO Garden — Cuidador de plantas

- **SKU:** MO-QMO-007. **Precio:** $12,999 MXN. **Filtro:** Hogar y aprendizaje.
- **Frase de tarjeta:** «Cada planta, a su ritmo.»
- **Descripción:** «Dale a tus plantas la atención que necesitan. QMO organiza el riego y te ayuda a llevar un registro del cuidado de tu jardín.»
- **Funciones:** riego programado, sensor de humedad, seguimiento de iluminación y avisos de mantenimiento.
- **Procesador:** MO Core Q4, 4 núcleos a 1.8 GHz. **RAM / almacenamiento:** 8 GB / 128 GB.
- **Materiales:** ABS resistente a luz UV, estructura de aluminio y juntas de silicona.
- **Batería / autonomía:** 16,000 mAh; hasta 12 h de uso mixto.
- **Conectividad:** Wi-Fi, Bluetooth y USB-C protegido.
- **Medidas / peso:** 65 × 28 × 25 cm; 5.5 kg. **Color:** turquesa.
- **Incluye:** robot QMO, regadera, sensor de humedad y base de carga.
- **Entrega:** estándar. **Preparación:** 2 a 4 días hábiles. **Garantía:** 12 meses.
- **Cuidado:** evitar inmersión y lluvia directa; no inventar una certificación IP.

### 08 · OMO Active — Compañero de juegos

- **SKU:** MO-OMO-008. **Precio:** $4,999 MXN. **Filtro:** Compañía y entretenimiento.
- **Frase de tarjeta:** «Ponle movimiento a tu día.»
- **Descripción:** «Un pequeño compañero lleno de movimiento. OMO anima tus pausas con juegos, retos de coordinación y actividades de ritmo.»
- **Funciones:** minijuegos de movimiento, seguimiento de ritmo, retos de coordinación y recordatorios de pausas activas.
- **Procesador:** MO Core O2, 2 núcleos a 1.5 GHz. **RAM / almacenamiento:** 4 GB / 64 GB.
- **Materiales:** ABS con recubrimiento de TPU y extremidades de silicona.
- **Batería / autonomía:** 5,000 mAh; hasta 8 h de uso mixto.
- **Conectividad:** Bluetooth y USB-C.
- **Medidas / peso:** 25 cm de alto; cuerpo de 18 cm de diámetro; 1.1 kg. **Color:** turquesa.
- **Incluye:** robot OMO, cable USB-C y tarjetas de actividades.
- **Entrega:** estándar. **Preparación:** 2 a 4 días hábiles. **Garantía:** 12 meses.

### 09 · PMO Learn — Asistente de aprendizaje

- **SKU:** MO-PMO-009. **Precio:** $6,499 MXN. **Filtro:** Hogar y aprendizaje.
- **Frase de tarjeta:** «Aprender también puede ser una aventura.»
- **Descripción:** «PMO acompaña tus sesiones de estudio con preguntas, ejercicios y actividades que puedes adaptar a tu ritmo. Organiza tus tiempos y celebra cada pequeño avance.»
- **Funciones:** cuestionarios, tarjetas de memoria, temporizador de estudio y ejercicios de lógica.
- **Procesador:** MO Core P4, 4 núcleos a 1.8 GHz. **RAM / almacenamiento:** 8 GB / 128 GB.
- **Materiales:** ABS reciclado, refuerzos de aluminio y brazos de silicona.
- **Batería / autonomía:** 6,000 mAh; hasta 10 h de uso mixto.
- **Conectividad:** Wi-Fi, Bluetooth y USB-C.
- **Medidas / peso:** 30 × 18 × 12 cm; 1.5 kg. **Color:** violeta.
- **Incluye:** robot PMO, cargador, cable y paquete inicial de actividades.
- **Entrega:** estándar. **Preparación:** 2 a 4 días hábiles. **Garantía:** 12 meses.

### 10 · WMO Audio — Asistente multimedia

- **SKU:** MO-WMO-010. **Precio:** $8,499 MXN. **Filtro:** Compañía y entretenimiento.
- **Frase de tarjeta:** «Tu música tiene un nuevo compañero.»
- **Descripción:** «WMO combina reproducción de audio con controles físicos fáciles de utilizar. Escucha tu música, prepara tus alarmas y acompaña cada momento con una personalidad propia.»
- **Funciones:** audio estéreo de 20 W, reproducción musical, alarmas, temporizadores y mensajes de voz.
- **Procesador:** MO Core W4, 4 núcleos a 2.0 GHz. **RAM / almacenamiento:** 8 GB / 256 GB.
- **Materiales:** ABS, estructura de aluminio y apoyos de silicona.
- **Batería / autonomía:** 12,000 mAh; hasta 14 h de reproducción moderada.
- **Conectividad:** Wi-Fi, Bluetooth, USB-C y entrada de audio de 3.5 mm.
- **Medidas / peso:** 25 × 45 × 16 cm; 3.2 kg. **Color:** verde esmeralda.
- **Incluye:** robot WMO, cargador USB-C y cable de audio.
- **Entrega:** estándar. **Preparación:** 2 a 4 días hábiles. **Garantía:** 12 meses.

### 11 · AMO Classic — Robot interactivo de colección

- **SKU:** MO-AMO-011. **Precio:** $12,999 MXN. **Filtro:** Compañía y entretenimiento.
- **Frase de tarjeta:** «Una pieza de la historia de MO.»
- **Descripción:** «Un diseño retro para quienes disfrutan los modelos originales. AMO ofrece conversación, expresiones digitales y juegos sencillos en una pieza con personalidad de colección.»
- **Funciones:** interacción por voz, expresiones digitales, relatos y juego del ahorcado. Esta es una adaptación comercial del personaje, no una descripción de su conducta en la serie.
- **Procesador:** MO Core A4, 4 núcleos a 2.0 GHz. **RAM / almacenamiento:** 8 GB / 128 GB.
- **Materiales:** ABS de acabado retro, estructura de aluminio y componentes de silicona.
- **Batería / autonomía:** 16,000 mAh; hasta 10 h de uso mixto.
- **Conectividad:** Wi-Fi, Bluetooth y USB-C.
- **Medidas / peso:** 55 × 30 × 22 cm; 6 kg. **Color de nuestra propuesta:** gris oliva.
- **Incluye:** robot AMO, base de carga y tarjeta con historia del modelo.
- **Entrega:** estándar. **Preparación:** 2 a 4 días hábiles. **Garantía:** 12 meses.

### 12 · ♥MO Host — Anfitrión para eventos

- **SKU:** MO-HEART-012. **Precio:** $14,999 MXN. **Filtro:** Negocios y asistencia.
- **Frase de tarjeta:** «Una bienvenida con personalidad.»
- **Descripción:** «Recibe a tus invitados con una presencia inolvidable. ♥MO ayuda a organizar la bienvenida y comparte información durante tus eventos.»
- **Funciones:** recepción de invitados, reproducción musical, mensajes programados y orientación en eventos.
- **Procesador:** MO Core H4, 4 núcleos a 2.0 GHz. **RAM / almacenamiento:** 8 GB / 128 GB.
- **Materiales:** ABS reforzado, articulaciones de aluminio y apoyos de elastómero.
- **Batería / autonomía:** 18,000 mAh; hasta 10 h de atención.
- **Conectividad:** Wi-Fi, Bluetooth y USB-C.
- **Medidas / peso:** 70 × 25 × 18 cm; 5 kg. **Color:** rosa con tacones rojos.
- **Incluye:** robot ♥MO, base de carga y paquete de mensajes de bienvenida.
- **Entrega:** estándar. **Preparación:** 2 a 4 días hábiles. **Garantía:** 12 meses.

### 13 · LMO Game — Compañero de mesa

- **SKU:** MO-LMO-013. **Precio:** $5,499 MXN. **Filtro:** Compañía y entretenimiento.
- **Frase de tarjeta:** «Una razón más para reunirnos.»
- **Descripción:** «LMO prepara retos de lógica, lleva marcadores y acompaña partidas entre amigos. Dale a tus reuniones una forma diferente de jugar juntos.»
- **Funciones:** trivia, marcador digital, temporizadores, turnos y retos de lógica.
- **Procesador:** MO Core L2, 2 núcleos a 1.6 GHz. **RAM / almacenamiento:** 4 GB / 64 GB.
- **Materiales:** ABS mate y extremidades de silicona.
- **Batería / autonomía:** 6,000 mAh; hasta 10 h de uso mixto.
- **Conectividad:** Bluetooth y USB-C.
- **Medidas / peso:** 28 × 22 × 22 cm; 1.4 kg. **Color:** morado.
- **Incluye:** robot LMO, cable USB-C y paquete inicial de juegos.
- **Entrega:** estándar. **Preparación:** 2 a 4 días hábiles. **Garantía:** 12 meses.

### 14 · ◻MO Hub — Robot de integración

- **SKU:** MO-SQUARE-014. **Precio:** $7,499 MXN. **Filtro:** Modulares.
- **Frase de tarjeta:** «Mejor cuando conecta.»
- **Descripción:** «Un robot pensado para trabajar en conjunto. ◻MO recibe a ❁MO en su espacio superior y permite combinar sus actividades en una experiencia modular.»
- **Funciones:** acoplamiento de ❁MO, sincronización de rutinas, carga por contacto y actividades compartidas.
- **Procesador:** MO Core SQ4, 4 núcleos a 2.2 GHz. **RAM / almacenamiento:** 8 GB / 256 GB.
- **Materiales:** ABS reforzado, marco de aluminio y conectores de cobre.
- **Batería / autonomía:** 16,000 mAh; hasta 12 h de uso individual.
- **Conectividad:** Wi-Fi, Bluetooth, USB-C y contactos de acoplamiento.
- **Medidas / peso:** 30 × 24 × 24 cm; 2.6 kg. **Color:** azul claro.
- **Incluye:** robot ◻MO, cargador y guía de compatibilidad. **❁MO se vende por separado.**
- **Entrega:** estándar. **Preparación:** 2 a 4 días hábiles. **Garantía:** 12 meses.
- Enlace recomendado: «Conoce el Dúo Bloom».

### 15 · ❁MO Bloom — Minirobot de compañía

- **SKU:** MO-FLOWER-015. **Precio:** $3,499 MXN. **Filtro:** Modulares.
- **Frase de tarjeta:** «Pequeños gestos. Grandes sonrisas.»
- **Descripción:** «Una pequeña compañía que alegra tu espacio. ❁MO responde con gestos y despliega su flor para acompañar recordatorios y rutinas.»
- **Funciones:** flor emergente, saludos, alarmas suaves y sincronización con ◻MO. Puede utilizarse de forma independiente en nuestra propuesta comercial.
- **Procesador:** MO Core FL2, 2 núcleos a 1.4 GHz. **RAM / almacenamiento:** 4 GB / 64 GB.
- **Materiales:** ABS reciclado, extremidades de silicona y flor de polímero flexible.
- **Batería / autonomía:** 3,000 mAh; hasta 8 h de uso mixto.
- **Conectividad:** Bluetooth, USB-C y contactos de acoplamiento.
- **Medidas / peso:** 18 × 12 × 12 cm sin la flor extendida; 0.7 kg. **Color:** rosa con flor amarilla.
- **Incluye:** robot ❁MO, cable USB-C y guía de enlace. **◻MO se vende por separado.**
- **Entrega:** estándar. **Preparación:** 2 a 4 días hábiles. **Garantía:** 12 meses.
- Enlace recomendado: «Conoce el Dúo Bloom».

## 8. Imágenes: selección y producción

Todos los productos deben tener una imagen propia y coherente con el robot correspondiente. Reutiliza primero los renders anteriores del catálogo, si están en los archivos del proyecto o adjuntos. No uses el mismo BMO cambiando el color para representar todos los modelos.

Si falta una imagen, busca la referencia del modelo en el listado de MOs y en las galerías de los episodios indicados al final. Si el entorno dispone de generación de imágenes, crea el render a partir de esa referencia. Si no la tiene, usa una ilustración vectorial propia basada en esa referencia como solución final utilizable; no dejes un recuadro vacío o una imagen rota. No afirmes que una ilustración es una fotografía de un producto físico.

**Dirección común para renders:** «Render de producto 3D del robot [MODELO] de Hora de Aventura, conservando su silueta y rasgos de la referencia adjunta. Cuerpo completo, vista frontal a tres cuartos, materiales mate de plástico y metal, iluminación suave de estudio, fondo blanco limpio, sombra discreta, producto centrado, encuadre cuadrado, sin texto, sin precios, sin marcos y sin accesorios ajenos. Mantener la misma iluminación y escala visual del resto del catálogo.»

En cada producción, agrega el descriptor de la tabla. Los colores de esta propuesta comercial son orientativos; si el render previo tiene una variante coherente, conserva ese asset y ajusta solo el campo de color para que coincidan, documentando el ajuste. No alterar las demás especificaciones.

| Archivo sugerido | Modelo y rasgos que deben distinguirlo |
|---|---|
| `bmo-play.webp` | BMO: cuerpo rectangular verde menta, pantalla facial, cruceta amarilla y botones de colores; referencia existente de BMO. |
| `cmo-assist.webp` | CMO: ayudante pequeño, cuerpo compacto beige y proporciones de CMO; usar referencia del modelo. |
| `dmo-welcome.webp` | DMO: diseño de recepcionista de la fábrica, cuerpo caqui y extremidades amarillas; no convertirlo en un BMO grande. |
| `emo-restore.webp` | EMO: cuerpo rectangular sobre orugas, paneles gris oliva y brazos azules; sin representar borrado de memoria. |
| `smo-guard.webp` | SMO: silueta de torre de computadora, estructura alta y robusta, grafito y caqui; sin armas en la imagen comercial. |
| `mmo-assist-xl.webp` | MMO: robot grande y ancho, azul y grafito, brazos amplios; escala robusta y apoyo de carga. |
| `qmo-garden.webp` | QMO: cuerpo cilíndrico, cabeza de bulbo circular, turquesa; regadera como accesorio opcional. |
| `omo-active.webp` | OMO: cuerpo esférico turquesa y extremidades delgadas; no forma rectangular. |
| `pmo-learn.webp` | PMO: cuerpo compacto violeta con parte superior piramidal o de prisma triangular, según la referencia usada. |
| `wmo-audio.webp` | WMO: cuerpo rectangular horizontal y dos controles giratorios laterales, verde esmeralda. |
| `amo-classic.webp` | AMO: cuerpo mayor que BMO, gris oliva y forma superior característica; preservar su silueta según referencia. |
| `heartmo-host.webp` | ♥MO: cuerpo rectangular rosa, piernas largas y tacones rojos característicos. |
| `lmo-game.webp` | LMO: variante morada con silueta semejante a un joystick; verificar el render anterior o una referencia antes de producir. |
| `squaremo-hub.webp` | ◻MO: cuerpo azul claro con encaje superior visible para ❁MO; mostrarlo solo si se vende individualmente. |
| `flowermo-bloom.webp` | ❁MO: cuerpo pequeño cuadrado rosa y flor amarilla emergente; mostrarlo solo en su ficha individual. |

Los nombres de archivos son sugeridos: respeta los que ya use el proyecto cuando sean correctos. Usa slugs ASCII (`heartmo`, `squaremo`, `flowermo`) aunque el nombre visible conserve ♥, ◻ y ❁. Añade alternativas legibles para lectores de pantalla y fuentes con soporte para estos símbolos.

Para paquetes, compón juntas las imágenes de los dos productos; no hace falta inventar otro robot ni generar un modelo fusionado. No uses fotografías del prototipo del equipo para el catálogo.

## 9. Paquetes y promociones: «Más juntos, mejor»

**Etiqueta:** «Paquetes MO».

**Título:** «Más juntos, mejor.»

**Texto:** «Dos formas de acompañarte, una mejor combinación. Elige un paquete y aprovecha un precio especial frente a comprar sus integrantes por separado.»

| SKU | Paquete | Incluye exactamente | Comprados por separado | Precio de paquete | Ahorro |
|---|---|---|---:|---:|---:|
| MO-PACK-016 | Dúo Aventura | 1 BMO Play + 1 OMO Active | $13,998 | $12,598 | $1,400 |
| MO-PACK-017 | Aprende y Juega | 1 PMO Learn + 1 LMO Game | $11,998 | $10,798 | $1,200 |
| MO-PACK-018 | Recepción en Equipo | 1 DMO Welcome + 1 CMO Assist | $24,998 | $22,498 | $2,500 |
| MO-PACK-019 | Dúo Bloom | 1 ◻MO Hub + 1 ❁MO Bloom | $10,998 | $9,898 | $1,100 |

Todos los importes son MXN e incluyen IVA como supuesto de la tienda ficticia. No usar una etiqueta de «precio anterior» para la suma de los productos: mostrar **«Por separado»**, **«En paquete»** y **«Ahorras»**. No asignar un porcentaje exacto de 10 %: los ahorros están redondeados comercialmente.

### Descripciones

- **Dúo Aventura:** «BMO pone la imaginación y OMO el movimiento. Una combinación para jugar, crear y hacer más divertidas tus pausas.»
- **Aprende y Juega:** «Organiza tus sesiones con PMO y comparte los retos de LMO. Estudio, lógica y entretenimiento en un mismo paquete.»
- **Recepción en Equipo:** «DMO recibe y orienta; CMO apoya con pendientes y tareas ligeras. Dos aliados para una atención más organizada.»
- **Dúo Bloom:** «La base modular ◻MO y el pequeño ❁MO, juntos desde el primer día. Conecta sus rutinas y deja que florezca la compañía.»

**Botón:** «Elegir paquete».

### Condiciones de la campaña

- Vigencia propuesta: **del 2 al 30 de noviembre de 2026**, inclusive, en la zona `America/Mexico_City`.
- Precios especiales exclusivos para la combinación indicada y una unidad de cada integrante por paquete.
- No acumulables con otras promociones.
- Incluyen los accesorios listados de cada modelo.
- Garantía de 12 meses para cada unidad.
- Preparación de 2 a 4 días hábiles. Envío estándar o recolección.
- El paquete participa en el umbral de envío gratuito por su precio final.
- Devolución por cambio de opinión: paquete completo. Si una unidad presenta una falla, se revisa la unidad afectada sin exigir tramitar garantía de ambas.
- No poner contadores de urgencia, cifras de compras, testimonios, reseñas o existencias inventados.
- Centraliza inicio, fin y precios. Fuera de la vigencia, oculta las afirmaciones de promoción y cobra la suma vigente de los integrantes; no conserves un descuento anunciado como activo después de su vencimiento.

La campaña permite exhibir combinaciones y ahorro sin incluir teoría escolar de negociación.

## 10. Condiciones de compra: textos listos para publicar

### Encabezado

**Título:** «Comprar con claridad también es parte del cuidado.»

**Texto:** «Consulta qué incluye tu pedido, cómo recibirlo y qué hacer si necesitas un cambio, una devolución o apoyo técnico.»

### Precios y pedidos

«Todos los precios se muestran en pesos mexicanos e incluyen IVA. Antes de confirmar un pedido podrás revisar productos, cantidades y costo de entrega. No añadimos cargos sin mostrarlos en el resumen.»

«La preparación inicia cuando se confirma el pedido y su disponibilidad. Si cambia una fecha estimada, te informaremos antes de acordar la entrega.»

No muestres sellos de pago seguro, tarjetas aceptadas, transferencia bancaria, meses sin intereses o una pasarela de pago si esas opciones no están realmente integradas. En esta fase se puede preparar una solicitud de pedido sin realizar cobros.

### Entrega a domicilio

«Enviamos dentro de México a zonas con cobertura. La preparación estándar toma de 2 a 4 días hábiles y el traslado estimado es de 3 a 7 días hábiles adicionales. La fecha se confirma al revisar el destino y la disponibilidad.»

«El envío estándar cuesta $199 por pedido y es gratuito cuando el subtotal de productos con entrega estándar alcanza $15,000 después de promociones.»

«MMO Assist XL requiere manejo especial: preparación de 5 a 7 días hábiles y flete de $499 por unidad. Este cargo se muestra por separado y no participa en la promoción de envío estándar gratuito.»

No afirmar que se verificó cobertura si no existe conexión con una paquetería. Una selección de envío y código postal puede preparar la solicitud sin garantizar cobertura ni fecha.

### Recolección

«Puedes elegir recolección sin costo en el Centro de Atención MO, con cita y aviso de pedido listo. La preparación toma de 2 a 4 días hábiles; para MMO Assist XL, de 5 a 7. Te compartiremos las indicaciones y el punto de entrega al confirmar la cita.»

«Conservamos el pedido durante 5 días hábiles a partir del aviso de disponibilidad. Si necesitas otra fecha, comunícate con atención al cliente.»

No inventar domicilio real, mapa de Google, sucursal mexicana, número telefónico o cita ya confirmada. La ubicación de recolección queda definida dentro de la ficción comercial y la cita requiere confirmación.

### Cambios y devoluciones

«Aceptamos solicitudes de cambio o devolución dentro de los 30 días naturales posteriores a la entrega. Cuéntanos el motivo y comparte tu número de pedido para que revisemos el caso.»

«Para cambios por preferencia, el producto debe conservar sus accesorios y encontrarse sin daños por uso. Te indicaremos cómo empacarlo y realizar la devolución. Los gastos de traslado por cambio de preferencia corresponden al cliente y se informarán antes de aceptar el trámite.»

«Si recibiste un producto incorrecto, dañado durante la entrega o con una falla de origen, MO cubre los traslados necesarios para revisar y atender el caso.»

«En paquetes, las devoluciones por preferencia se realizan con todos sus integrantes y accesorios. Las fallas de una unidad se atienden de forma individual mediante garantía.»

«Cuando corresponda un reembolso, se realizará al mismo medio del pago original, en un plazo estimado de 5 a 10 días hábiles después de autorizar la devolución. Si aún no has realizado ningún pago, la cancelación no genera un reembolso.»

### Garantía y servicio técnico

«Todos nuestros robots incluyen 12 meses de garantía por defectos de fabricación, contados desde su entrega. Para solicitarla, comparte tu número de pedido y una descripción de la falla desde el formulario de atención.»

«La revisión permite distinguir una falla de origen de daños por golpes, líquidos, uso fuera de las condiciones indicadas o modificaciones no autorizadas. Te comunicaremos el diagnóstico y las opciones antes de realizar trabajos con costo.»

«Antes de intervenir un MO, solicitamos autorización para el diagnóstico y el respaldo de información. Un reinicio o borrado requiere tu autorización expresa. Si el daño impide recuperar datos, te lo informaremos antes de continuar.»

Evita prometer respaldo infalible o recuperación del 100 % de cualquier memoria dañada. Estos textos son políticas comerciales ficticias, no asesoría ni una certificación de cumplimiento jurídico.

### Resumen corto para todas las fichas

«Garantía de 12 meses. Cambios y devoluciones: solicita revisión dentro de 30 días naturales. Entrega a domicilio o recolección con cita. Consulta condiciones y costos antes de preparar tu pedido.»

Para MMO, añade el costo de manejo especial de forma visible junto al precio o selector de entrega.

## 11. Preguntas frecuentes

Usa acordeones accesibles; el título debe ser un botón y comunicar si está abierto.

**¿Cómo elijo mi MO?**

«Piensa en lo que necesitas: compañía, aprendizaje, apoyo para tu negocio o una experiencia modular. Compara sus funciones en la ficha y escríbenos si quieres orientación.»

**¿Puedo comprar un solo robot?**

«Sí. Los 15 modelos se ofrecen de forma individual. Los paquetes son opciones adicionales para combinar dos modelos con un precio especial durante la campaña.»

**¿Cuánto tarda en prepararse mi pedido?**

«La preparación estándar toma de 2 a 4 días hábiles. MMO Assist XL requiere de 5 a 7. El tiempo de traslado se suma a la preparación y depende del destino.»

**¿Hay envío gratis?**

«Sí, para artículos con entrega estándar cuando su subtotal final alcanza $15,000. MMO Assist XL tiene un flete especial de $499 por unidad.»

**¿Puedo recoger mi pedido?**

«Sí, sin costo de envío, con cita y aviso de pedido listo. Te compartiremos las indicaciones al confirmar la recolección.»

**¿Los paquetes incluyen los cargadores y accesorios?**

«Incluyen exactamente los accesorios indicados para cada modelo. Revisa la sección “Incluye” de sus fichas para conocer el contenido completo.»

**¿Qué pasa si mi MO presenta una falla?**

«Envíanos una solicitud de garantía con tu pedido y una descripción del problema. Revisaremos el caso y te explicaremos las opciones antes de cualquier intervención.»

**¿Borran los recuerdos durante una reparación?**

«Buscamos conservar la información. Antes de intervenir, acordamos contigo el respaldo y el procedimiento. Un borrado requiere tu autorización expresa.»

**¿Puedo cambiar o devolver mi compra?**

«Puedes solicitar una revisión dentro de los 30 días naturales posteriores a la entrega. Las condiciones dependen del motivo y de si adquiriste un producto individual o un paquete.»

**¿◻MO y ❁MO se venden juntos?**

«Se venden individualmente y también en el Dúo Bloom. Si eliges solo uno, el otro no está incluido.»

## 12. Bolsa y preparación de pedido

Implementa una bolsa sencilla; esta ampliación no requiere procesar pagos.

- Agregar, quitar y cambiar cantidades de productos o paquetes.
- Precio unitario, subtotal por línea y total.
- Identificar los dos componentes de cada paquete sin cobrarlos otra vez como productos sueltos.
- Permitir cantidades enteras positivas; eliminar al llegar a cero o mediante botón explícito. No presentar límites como si fueran inventario real.
- Selección de entrega estándar o recolección; aplicar el manejo especial cuando corresponda.
- Recolección: envío $0.
- A domicilio: subtotal de artículos estándar menor a $15,000, cargo estándar $199; desde $15,000, cargo estándar $0. Si no hay artículos estándar, no aplicar ese cargo.
- A lo anterior sumar $499 por cada MMO Assist XL. MMO no suma para alcanzar el umbral estándar. En un pedido mixto, pueden existir ambos cargos.
- Mostrar «Cobertura y fecha por confirmar» cuando aún no estén verificadas.
- Acción principal sin servicio de pedidos: **«Preparar pedido»** y luego **«Descargar resumen»**. No mostrar «Compra realizada», «Pago exitoso» o «Pedido confirmado».
- Resumen descargable en texto o formato imprimible con productos, cantidades, importe, modalidad de entrega y leyenda «Solicitud de pedido · pendiente de confirmación».
- No pedir tarjetas, CLABE, depósitos o contraseñas.
- Persistir solo artículos, cantidades y modalidad de entrega en `localStorage`; no almacenar allí información personal del formulario de quejas.

**Bolsa vacía:** «Tu próxima aventura empieza con un MO. Explora el catálogo y encuentra tu compañero.» Botón: «Ver productos».

**Al agregar:** «Agregamos [nombre] a tu bolsa.» Con acceso «Ver bolsa» y confirmación accesible, sin interrumpir la navegación.

### Ejemplos para comprobar cálculos

Estos ejemplos usan la campaña activa:

| Selección | Subtotal | Envío a domicilio | Total |
|---|---:|---:|---:|
| 1 BMO Play | $8,999 | $199 | $9,198 |
| 1 DMO Welcome | $18,999 | $0 | $18,999 |
| 1 Dúo Bloom | $9,898 | $199 | $10,097 |
| 1 Recepción en Equipo | $22,498 | $0 | $22,498 |
| 1 MMO Assist XL | $39,999 | $499 | $40,498 |
| 1 MMO Assist XL + 1 BMO Play | $48,998 | $698 | $49,696 |
| 1 BMO Play con recolección | $8,999 | $0 | $8,999 |

## 13. Pie de página y microtextos

**Frase de cierre:** «El futuro de tu MO empieza por cuidar lo que lo hace único.»

**Enlaces:** Nuestros productos / Paquetes MO / Atención al cliente / Quejas y sugerencias / Compras y entregas / Uso de datos.

**Marca:** «MO Co. · Tecnología con corazón.»

**Ayuda junto a la ficha:** «¿Este MO va contigo? Te ayudamos a elegir.»

**Confirmación de copia:** «Dirección copiada.»

**Formulario sin pedido:** «Si todavía no has comprado, deja este campo vacío.»

**Producto modular:** «Se vende por separado. Consulta el paquete compatible.»

No inventes reseñas, premios, certificaciones, cifras de clientes o testimonios para llenar espacios.

## 14. Calidad de implementación y comprobación

Trabaja en la implementación hasta completar el alcance. No dejes botones sin acción, tarjetas vacías, productos repetidos para alcanzar el mínimo ni textos de relleno.

Comprueba:

- Los 15 SKU individuales y los 4 paquetes son únicos.
- Cada producto tiene una imagen distinta y una ficha completa.
- Se conservan los apartados y rutas anteriores.
- Los filtros y la búsqueda encuentran los modelos; funcionan las búsquedas por nombres especiales y sus alternativas (`heartmo`, `squaremo`, `flowermo`).
- Las 4 sumas y los ahorros coinciden con los precios individuales.
- Los precios de campaña respetan inicio y fin; hay una única fuente de verdad.
- Cantidades, subtotales, paquetes y envíos coinciden con los ejemplos.
- Se distingue una solicitud preparada de una recibida realmente.
- Los errores del formulario no eliminan el mensaje escrito.
- No aparecen datos personales en consola, rutas públicas o archivos del repositorio.
- En móvil, títulos, imágenes, controles, tablas y paneles no desbordan la pantalla.
- Fichas o diálogos gestionan foco, cierre con Escape y retorno al botón de origen.
- Navegación, formularios y acordeones funcionan con teclado.
- Las imágenes incluyen dimensiones, texto alternativo y carga diferida cuando proceda.
- Ejecuta la compilación, los controles de tipos y las verificaciones que ya tenga el repositorio. Para lógica nueva, prueba casos relevantes de precios, fechas, envío y validación; no agregues una batería extensa de pruebas que solo repita el HTML.
- Si puedes abrir el sitio, revisa escritorio y móvil en una ronda conjunta; corrige los problemas observados y confirma en una segunda ronda.

Al terminar, entrega: resumen de los cambios, archivos principales modificados, instrucciones para ejecutarlo, verificaciones realizadas y limitaciones de servicios externos que sigan pendientes. No afirmes que la página se publicó o que un correo funciona si no lo comprobaste.

No publiques ni conectes servicios de pago o mensajería como efecto secundario. El objetivo es continuar el código existente y dejar la ampliación utilizable y revisable.

## 15. Capturas para la presentación de evidencias

Si cuentas con un navegador o herramienta de captura del sitio ya implementado, genera capturas reales, legibles y sin datos personales. No reconstruyas capturas con diseños simulados. Si la herramienta no está disponible, indica exactamente qué pantallas debe capturar el equipo.

Conviene capturar:

1. Cabecera de Ayuda con «Estamos para ayudarte», contactos y horario.
2. Sección de quejas y sugerencias con formulario y pasos de seguimiento.
3. Catálogo con los primeros cinco modelos, usando más de una captura si hace falta.
4. Catálogo con los siguientes cinco modelos.
5. Catálogo con los últimos cinco modelos.
6. Ficha ampliada de BMO, mostrando imagen, nombre, descripción, precio y especificaciones.
7. Condiciones de cambios, devoluciones y garantía.
8. Entrega y recolección con costos y tiempos.
9. Los cuatro paquetes y sus ahorros.
10. Bolsa de pedido, si ayuda a demostrar las condiciones de compra.

Una captura debe mostrar el diseño real y el texto legible. No reduzcas una página larguísima a una sola diapositiva. Usa acercamientos y varias diapositivas.

---

# NOTAS PARA FERNANDO Y EL EQUIPO

Estas notas no van en el sitio web.

## Qué se conserva y qué se añade a la presentación

La entrega debe seguir siendo la misma presentación de Unidad 1. Conserva sus 18 diapositivas y agrega al final las nuevas evidencias. Propuesta de orden:

| Diapositiva sugerida | Contenido |
|---|---|
| 19 | Separador: «Avance del proyecto · Unidad 2». |
| 20 | Atención al cliente: ayuda, contactos y horario. |
| 21 | Quejas, sugerencias y proceso de seguimiento. |
| 22–24 | Catálogo completo, repartido en capturas legibles; agrega más si las necesitas. |
| 25 | Ficha de producto: BMO o el modelo que se vea mejor. |
| 26 | Condiciones de compra: cambios y garantía. |
| 27 | Envío a domicilio y recolección. |
| 28 | Promociones: cuatro paquetes con sus componentes y precios. |
| 29 | Bolsa y resumen de pedido, opcional. |
| Al final | Fotografías reales del prototipo, incorporadas por el equipo. |

No es obligatorio respetar esos números: lo obligatorio es conservar lo anterior y que la evidencia se entienda. El documento deja resuelto el contenido web; las fotos reales del prototipo y las capturas finales deben añadirse cuando existan.

**Nombre final de la entrega:** `Avance Proyecto U2_Eq Verde` y la extensión que solicite la plataforma.

## Por qué se usan estos modelos

Se retoman los 15 modelos del catálogo anterior: BMO, CMO, DMO, EMO, SMO, MMO, QMO, OMO, PMO, WMO, AMO, ♥MO, LMO, ◻MO y ❁MO. «Play», «Assist», «Welcome» y los demás complementos son nombres comerciales inventados para nuestra página.

No se añaden Football como robot separado, FMO o GMO a partir de sus puertos, NMO o TMO a partir de bocetos, ni ALLMO como producto fabricado en serie. NEPTR y otros personajes pueden formar parte de la organización ficticia, pero no se presentan aquí como modelos MO del catálogo.

La descripción de EMO se adapta deliberadamente al compromiso de nuestra empresa de proteger recuerdos: diagnóstico y respaldo con autorización. Las funciones educativas de PMO, musicales de WMO, de anfitrión de ♥MO y los procesadores no son datos canónicos. En el sitio se redactan como características de nuestra oferta ficticia; al explicar el proyecto, no atribuirlas a la serie.

## Fuentes y materiales de referencia

- Presentación adjunta: `Avance Proyecto U1_Eq Verde.pdf`, 18 diapositivas, utilizada para observar la identidad y la organización actuales.
- `U1 A2. Planeación estratégica_Eqverde (2).pdf`: filosofía de cuidado, preservación, calidad e innovación.
- `U1 A3. Organización, dirección y control_Eqverde.pdf`: mantenimiento, respaldo de información y conservación del conocimiento.
- `U2 A1. Diagnóstico de un conflicto_Eqverde.pdf`: coordinación técnica y comunicación de fechas viables antes de prometer entregas.
- Catálogo anterior: `catalogo_mo_15_productos.md`, conservando nombres comerciales, SKU y precios. [Abrir catálogo anterior](https://chatgpt.com/library?file_id=libfile_312782c9a39081918165e397d46ddecb&account_id=personal).
- [Listado de MOs y distinción entre modelos en pantalla, personalidades, bocetos y fusiones](https://adventuretime.fandom.com/wiki/MOs).
- [Be More: personajes y contexto de la fábrica](https://adventuretime.fandom.com/wiki/Be_More).
- [Be More: transcripción y escena de la comunidad de MOs](https://adventuretime.fandom.com/wiki/Be_More/Transcript).
- [The More You Moe, The Moe You Know, Part I: robots modulares y ALLMO](https://adventuretime.fandom.com/wiki/The_More_You_Moe%2C_The_Moe_You_Know_%28Part_I%29).
- [Cartoon Network: BMO The Hero, referencia oficial del personaje](https://www.youtube.com/watch?v=XTuUoeNNrB8).

La wiki es una referencia comunitaria de personajes, no una fuente de especificaciones comerciales. Las políticas, precios, especificaciones y paquetes fueron definidos para el proyecto ficticio.
