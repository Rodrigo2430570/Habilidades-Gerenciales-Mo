# MO Co. — Tecnología con corazón

Sitio empresarial de MO Co. en Next.js, TypeScript y Tailwind CSS. Conserva estrategia, organización, forma de trabajar y compromiso e incorpora catálogo de 15 robots, cuatro paquetes, ayuda y bolsa de pedido. Las cifras de los apartados empresariales son metas previstas.

## Desarrollo

Para abrir la version compilada con doble clic, usa **`iniciar.bat`** en la carpeta principal del repositorio. Abre el navegador automaticamente; deja su ventana abierta mientras uses la pagina y cierrala para detener el servidor. Requiere Python 3 (disponible en este equipo). Si ya esta iniciada, vuelve a abrir la misma pagina. Usa `dist/` sin recompilar; despues de modificar el sitio, actualiza esa carpeta con `npm run build`.

```sh
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Exportación estática

```sh
npm run build
python -m http.server 4173 --bind 127.0.0.1 --directory dist
```

`npm run build` genera `out/` con Next.js y actualiza `dist/` para el alojamiento estático ya configurado en `.openai/hosting.json`. Las rutas se exportan como directorios. Además de las anteriores, están disponibles `/productos/`, `/productos/{slug}/`, `/paquetes/`, `/ayuda/`, `/compras-y-entregas/` y `/bolsa/`.

No hay backend, pagos ni servicio de envío. Atención permite preparar y descargar solicitudes en modo local, guardadas temporalmente en `sessionStorage`. La bolsa conserva únicamente artículos, cantidades y modalidad en `localStorage`. No se transmiten las solicitudes a los correos `.example`. Los paquetes se recalculan en el navegador según la fecha de `America/Mexico_City`; no dependen de la fecha de compilación.

## Verificación

```sh
npm run typecheck
npm test
npm run build
```

`npm test` comprueba combinaciones, ahorros, límites de fechas, envíos estándar y especiales, cantidades, búsqueda y validación. Consulta [la documentación de la ampliación](docs/ampliacion-catalogo.md) y las capturas reales en `docs/capturas/`.

## Archivos principales

- `src/app/page.tsx`: portada y accesos a las cuatro páginas.
- `src/app/{estrategia,organizacion,trabajo,compromiso}/page.tsx`: páginas interiores.
- `src/components/sections/CompanySections.tsx`: contenido empresarial procedente de la planeación.
- `src/components/sections/Visuals.tsx`: línea de plazos y gráfico de metas previstas.
- `src/components/graphics/CompanyGraphic.tsx`: diagrama de funcionamiento, información y conocimiento.
- `src/components/sections/PageJourney.tsx` y `site-map.ts`: índice local y recorrido anterior/siguiente.
- `src/app/journey.css`: navegación persistente, transiciones y adaptación móvil.
- `src/app/globals.css`: estilos responsivos y tokens de la paleta existente.
- `src/app/multipage.css`: composición de portada, páginas interiores y gráficos.
- `src/components/ui/`: botones y superficies reutilizables.
- `src/components/sections/`: hero, filosofía y galería editorial.
- `src/data/products.json` y `src/data/service-copy.json`: contenido aprobado, especificaciones y políticas.
- `src/lib/store.ts`: precios de paquetes, vigencia, búsqueda y cálculo de entregas.
- `src/lib/support.ts`: validación, lectura de solicitudes locales y comprobantes.
- `src/components/shop/`: catálogo, fichas, bolsa, formulario y consulta de folio.
- `src/app/store.css`: ampliación visual con los tokens y fuentes existentes.
- `public/assets/products/`: 15 renders conceptuales individuales, generados con Imagegen.
- `docs/contenido-aprobado.md`: documento fuente entregado por el usuario; incluye notas internas que no se publican en la interfaz.
- `docs/catalog-image-production.json`: referencia visual y prompts exactos de los renders.
- `scripts/import-brief.py`: importación reproducible del catálogo y textos desde el documento aprobado.
- `public/assets/`: ilustraciones y fuentes locales. BMO se conserva en el inicio; fábrica, comunidad MO y archivo técnico acompañan los apartados. Los recursos anteriores permanecen como archivos del proyecto.
- `docs/design-audit.md`: referencias, evidencia y límites del contenido.
- `docs/design-tokens.md`: paleta, tipografía, espacio y componentes.
- `docs/component-inventory.md`: inventario de componentes.
- `docs/motion-system.md`: secuencia del Hero, reveals, duraciones y movimiento reducido.
- `docs/recorrido-y-contexto.md`: navegación, referencias de «Be More» y límites entre canon y planeación.
- `docs/image-prompts.json`: prompts y archivos de las tres nuevas escenas.

Los contenidos proceden de `U1 A2. Planeación estratégica_Eqverde.pdf`, páginas 2–10. El documento aún no define un organigrama empresarial completo ni políticas formales de comunicación, liderazgo, motivación y mejora. La interfaz lo expresa sin fabricar datos.
