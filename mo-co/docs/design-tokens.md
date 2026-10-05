# Design tokens — MO Co.

La paleta y las dos fuentes proceden del sitio existente. Esta ampliación cambia la composición de la información, no sus colores de marca.

| Token | Valor | Uso |
|---|---|---|
| `ink` / `navy` | `#102e38` | Tinta, cabecera, hero, secciones oscuras. |
| `raised` | `#183c47` | Panel oscuro. |
| `navy-line` | `#42616a` | Separadores sobre petróleo. |
| `paper` | `#f4f7f5` | Fondo claro. |
| `white` | `#ffffff` | Tarjetas y sección de organización. |
| `mint` | `#b5dfc5` | Acento MO y superficies de misión/métricas. |
| `green` | `#265b49` | Etiquetas y acentos sobre claro. |
| `signal` | `#efd061` | Acción principal y foco oscuro. |
| `signal-hover` | `#ffe594` | Hover de acción. |
| `muted` | `#48616a` | Texto secundario sobre claro. |
| `on-dark-muted` | `#bfd0d4` | Texto secundario sobre oscuro. |
| `line` | `#c8d4d2` | Divisiones sobre claro. |

## Tipografía

- **Titulares:** Chakra Petch Bold local; hero hasta 6rem, sección `clamp(3rem, 5.5vw, 5.5rem)`, subapartado `clamp(2.1rem, 3.5vw, 3.6rem)`.
- **Cuerpo y controles:** Manrope Variable local; base 1rem con interlineado 1.65. Metadatos entre .67 y .78rem en mayúsculas.
- **Números:** Chakra Petch; se usan para orientar la secuencia o destacar metas, nunca como resultado observado.

## Espacio, forma y elevación

- Base de espaciado: 8px. Gaps frecuentes: 16, 20, 24, 30 y 40px.
- Canal lateral: `clamp(22px, 5vw, 80px)`. Contenido máximo: 1440px con canal incluido; ancho útil cercano a 1280px.
- Espacio entre grandes secciones: `clamp(76px, 9vw, 128px)`; móvil 72px.
- Radio de superficies: 12px; controles 5px; organigrama 8px.
- Bordes: 1px con `line` o `navy-line`. Superficies planas por defecto.
- Sombra: solo botón principal al pasar el cursor, `0 8px 20px #0003`.

## Variantes de componentes

- **Button primary:** fondo amarillo señal, tinta petróleo, altura mínima 54px y foco visible.
- **Button light:** papel sobre superficie oscura.
- **Card white/mint/dark/paper:** misma estructura y radio; la variante `paper` usa borde fino.
- **Page layout:** portada breve con destinos visuales; páginas interiores con intro editorial, imagen amplia, título, contenido y regreso al inicio.
- **Section layout:** número grande, título y entradilla; subapartados con título explícito y una nota corta.
- **Gráficos:** barras de duración y marcas de meta en verde; etiquetas explícitas distinguen planes de resultados.
- **Responsive:** 2–3 columnas en escritorio según contenido; una columna o 2 columnas en móvil según legibilidad.

## Motion

El sistema de tiempos, easing y comportamiento por sección está en [`motion-system.md`](motion-system.md). Los tokens CSS principales son `--motion-ease: cubic-bezier(.16,1,.3,1)` y `--motion-standard: cubic-bezier(.4,0,.2,1)`. La entrada del Hero termina aproximadamente a los 1.4 s; los reveals de lectura duran entre 480 y 900 ms.
