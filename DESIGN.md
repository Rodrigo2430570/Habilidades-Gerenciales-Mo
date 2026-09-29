---
name: MO Co.
description: Instituto de robótica de Ooo — tecnología con corazón.
colors:
  ink: "#102e38"
  navy: "#102e38"
  navy-raised: "#183c47"
  navy-line: "#42616a"
  paper: "#f4f7f5"
  white: "#fff"
  mint: "#b5dfc5"
  green: "#265b49"
  signal: "#efd061"
  signal-hover: "#ffe594"
  muted: "#48616a"
  on-dark-muted: "#bfd0d4"
  line: "#c8d4d2"
typography:
  display:
    fontFamily: "Chakra Petch, sans-serif"
    fontSize: "clamp(3.5rem, 6.6vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Chakra Petch, sans-serif"
    fontSize: "clamp(2.3rem, 4vw, 3.85rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Chakra Petch, sans-serif"
    fontSize: "clamp(1.5rem, 2.25vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 800
    lineHeight: 1.5
    letterSpacing: "0.045em"
  action:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 800
    lineHeight: 1.7
rounded:
  surface: "12px"
  control: "5px"
spacing:
  unit: "8px"
  gap: "24px"
  card: "40px"
  card-mobile: "28px"
  gutter: "clamp(22px, 5vw, 80px)"
  section: "clamp(64px, 8vw, 112px)"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "17px 22px"
  button-primary-hover:
    backgroundColor: "{colors.signal-hover}"
  purpose-card:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "40px"
  vision-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "40px"
  horizon-card:
    backgroundColor: "{colors.navy-raised}"
    textColor: "{colors.paper}"
    padding: "36px 40px 40px"
  navigation:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-dark-muted}"
  disclosure:
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    padding: "19px 0"
---

# Design System: MO Co.

## Overview

**Creative North Star: "Instituto de robótica de Ooo"**

La identidad combina el rigor de un catálogo de ingeniería con la calidez de los robots MO. Las superficies petróleo sostienen la marca y el diagnóstico; las superficies claras facilitan la lectura. Los titulares cuadrados, el cuerpo humanista y las divisiones precisas construyen una institución cercana y curiosa.

La personalidad aparece en los personajes, la ilustración y los acentos de color. El retrato tridimensional de BMO y el paisaje de Ooo conviven con una interfaz contenida: lectura por secciones, datos alineados y controles reconocibles. Este documento registra el código implementado en `mo-co/dist/index.html`, `styles.css` y `app.js`; no deriva de una maqueta aprobada.

**Key Characteristics:**

- Petróleo institucional, verde MO y amarillo señal.
- Titulares de geometría técnica y lectura humanista.
- Superficies planas, divisiones finas y esquinas contenidas.
- Personajes con volumen y controles de movimiento breve.
- Contenido completo, navegación visible y acceso por teclado.

## Colors

La paleta reúne petróleo profundo, menta cálida y amarillo de señalización sobre un papel frío de lectura.

### Primary

- **Petróleo institucional** (`navy`, `ink`): fondo de cabecera, portada, horizonte y pie; tinta de las superficies claras. Ambas claves conservan los alias presentes en el código.
- **Petróleo elevado** (`navy-raised`): paneles de diagnóstico sobre el fondo oscuro.

### Secondary

- **Menta MO** (`mint`): marca, énfasis de titulares oscuros y superficies de misión y fortalezas.
- **Verde técnico** (`green`): énfasis sobre papel, números, metadatos y estados de los desplegables.

### Tertiary

- **Amarillo señal** (`signal`): acción principal, cierre y navegación activa. `signal-hover` aclara la acción al pasar el puntero.

### Neutral

- **Papel frío** (`paper`) y **blanco** (`white`): lectura general y paneles secundarios; papel también funciona como texto en fondos oscuros.
- **Texto secundario claro** (`muted`) y **texto secundario oscuro** (`on-dark-muted`): dos tratamientos según el fondo.
- **Divisor claro** (`line`) y **divisor petróleo** (`navy-line`): límites de filas, paneles y cabecera.

### Named Rules

**The Surface Contrast Rule.** Usar verde técnico sobre superficies claras y menta sobre petróleo; el texto secundario cambia de token con el fondo.

## Typography

**Display Font:** Chakra Petch, con sans-serif de respaldo; archivo local de peso 700.

**Body Font:** Manrope, con sans-serif de respaldo; archivo variable local de pesos 200–800.

**Character:** Chakra Petch aporta el carácter técnico de la marca, los títulos y las cifras. Manrope mantiene la lectura continua y los controles claros. No hay una familia monoespaciada adicional.

### Hierarchy

- **Display:** título principal; el token registra la escala de escritorio. Hasta 1100px usa `clamp(3.5rem, 6.3vw, 5.25rem)` y hasta 760px `clamp(3.15rem, 9.8vw, 5rem)`.
- **Headline:** títulos de sección, con énfasis de color en redonda y composición equilibrada.
- **Title:** títulos de contenido. Misión y visión amplían esta escala a 2.4rem, o 2rem en móvil; son una variante de estas tarjetas.
- **Body:** lectura general, párrafos de hasta 70ch. El texto de portada tiene 1.125rem y línea 1.8 en escritorio, y 1rem en móvil.
- **Label:** metadatos breves y numeración de secciones. Los valores observados oscilan entre 0.75rem y 0.875rem según su función; no reemplazan títulos.
- **Action:** acción principal y resúmenes desplegables. La navegación utiliza 0.875rem y peso 700.
- **Metrics:** cifras en Chakra Petch con números tabulares, tamaño 2.5rem y línea 1.15; bajan a 2.1rem en móvil.

### Named Rules

**The Heading First Rule.** El título encabeza visualmente cada bloque; las etiquetas conservadas de sección, misión, diagnóstico y plazo aparecen después y permanecen legibles.

## Layout

El contenido se centra dentro de un ancho máximo de 1280px, con el canal lateral y la separación vertical definidos en los tokens. El ritmo base parte de 8px, con separaciones frecuentes de 24px, 32px y 48px. Las tarjetas usan relleno amplio y las listas se separan mediante reglas, sin convertir cada fila en otra tarjeta.

En escritorio predominan parejas de columnas: portada 1.1fr/1fr, misión y visión 1.12fr/1fr y diagnóstico 1fr/1fr. Los valores combinan imagen y lista; los compromisos combinan índice, descripción y métricas. Estas proporciones describen la superficie actual, no una obligación para toda pantalla futura.

Hasta 1100px se ajustan proporciones y densidad; hasta 960px la cabecera dispone marca y navegación en dos filas. Hasta 760px los bloques principales pasan a una columna, las métricas se distribuyen según el espacio disponible y los criterios de cada desplegable se apilan. La navegación conserva sus tres enlaces visibles y la marca conserva su lema. El encabezado sigue fijo al recorrer la página; los anclajes reservan espacio para él.

El contenido puede envolver palabras largas. La versión de impresión elimina la portada gráfica y la navegación, aclara los fondos y evita cortar artículos cuando es posible.

## Elevation & Depth

La interfaz es plana en reposo: el contraste tonal y los bordes aportan separación. El volumen pertenece al retrato de BMO, no a una colección de paneles flotantes. La única sombra de control aparece al pasar el puntero por la acción principal.

### Shadow Vocabulary

- **Action hover** (`box-shadow: 0 8px 20px #0003`): sombra suave y temporal bajo la acción amarilla.

### Named Rules

**The Character Volume Rule.** Reservar el volumen expresivo para la imagen del personaje; separar la información con tono, espacio y reglas.

## Shapes

Las superficies comparten la esquina `surface`; los controles usan `control`. Los bordes son de 1px y la navegación activa se marca con una línea de 3px. El paisaje se recorta dentro de un marco con pie de imagen; el diagnóstico comparte un contenedor con divisiones internas de 1px. Las pequeñas formas cuadradas de las listas proceden de CSS; los iconos de interfaz se dibujan con SVG de trazo redondeado.

## Components

### Buttons

Una acción rectangular y claramente táctil: amarillo señal con tinta petróleo, relleno del token y altura mínima de 56px. El icono mide 21px y se separa del texto con 40px. Hover aclara el fondo y añade la sombra suave; active usa el amarillo más oscuro implementado. No hay variantes de botón secundario ni campos de formulario en esta superficie.

El foco es una línea exterior de 3px con separación de 5px: terracota sobre fondo claro y amarillo señal en portada, cabecera, horizonte y pie. Los enlaces mantienen subrayado cuando corresponde a su estilo y el enlace para saltar al contenido aparece al recibir foco.

### Cards / Containers

Las tarjetas de propósito son amplias y planas: misión menta, visión blanca con divisor claro. En móvil su relleno pasa al token `card-mobile`. El horizonte usa paneles petróleo elevado con fortalezas en menta; su borde redondeado pertenece al contenedor conjunto.

Las métricas se agrupan en una superficie verde pálida implementada con `#e4eee8`, con relleno de 20px 24px y cifras tabulares. Es un tratamiento local de indicadores; no introduce una nueva familia de tarjetas universales.

### Navigation

Cabecera petróleo con enlaces de texto visibles. Hover y `aria-current="location"` aclaran el texto y revelan el subrayado amarillo desde la izquierda. La transición usa 220ms y `cubic-bezier(.16,1,.3,1)`. JavaScript actualiza la sección activa al recorrer el documento; los anclajes funcionan sin JavaScript.

### Criteria disclosure

Los criterios utilizan `details` y `summary` nativos. La fila resumen tiene una regla superior, texto fuerte y un signo más SVG. Hover y estado abierto utilizan verde; al abrirse el SVG gira 45 grados. La información interior se presenta como lista descriptiva blanca, con columnas en escritorio y pares apilados en móvil. Todos los criterios permanecen en el HTML.

### Imagery

El retrato de BMO conserva sus proporciones mediante `object-fit: contain`; el paisaje utiliza `cover` con encuadres adaptables. Las imágenes incluyen texto alternativo. Mantener su procedencia con cada archivo; no presentarlas como recursos oficiales de la franquicia.

## Do's and Don'ts

### Do:

- **Do** usar los tokens de texto apropiados para cada superficie clara u oscura.
- **Do** mantener títulos primero, metadatos después y textos completos al cambiar el tamaño de pantalla.
- **Do** conservar la navegación visible, el foco exterior y los desplegables nativos utilizables por teclado.
- **Do** respetar movimiento reducido: sin transiciones ni animaciones, y desplazamiento automático.
- **Do** usar SVG en los iconos de interfaz y preservar los textos alternativos y la procedencia de las imágenes.

### Don't:

- **Don't** convertir las etiquetas conservadas en una pauta para añadir nuevos encabezados decorativos encima de títulos.
- **Don't** trasladar el volumen de BMO a sombras permanentes en cada panel de contenido.
- **Don't** ocultar textos, secciones o criterios para resolver una composición estrecha.
- **Don't** adoptar las flechas de texto heredadas ni el favicon anterior como nuevos tokens o patrones de iconografía.

No canonizado ni reparado por esta documentación: las flechas de texto de los enlaces de cierre y pie, y el favicon heredado con Arial y colores anteriores. Se mantienen como diferencias locales del artefacto; no son reglas para nuevas superficies. PRODUCT.md permanece sin cambios.
