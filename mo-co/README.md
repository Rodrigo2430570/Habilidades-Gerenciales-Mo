# MO Co. — Tecnología con corazón

Sitio empresarial de MO Co. en Next.js, TypeScript y Tailwind CSS. La portada presenta el proyecto y enlaza a cuatro páginas: estrategia, organización, forma de trabajar y compromiso. Las cifras visibles son metas previstas.

## Desarrollo

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

`npm run build` genera `out/` con Next.js y actualiza `dist/` para el alojamiento estático ya configurado en `.openai/hosting.json`. Las rutas se exportan como directorios (`/estrategia/`, `/organizacion/`, `/trabajo/`, `/compromiso/`). No hay backend ni formularios.

## Archivos principales

- `src/app/page.tsx`: portada y accesos a las cuatro páginas.
- `src/app/{estrategia,organizacion,trabajo,compromiso}/page.tsx`: páginas interiores.
- `src/components/sections/CompanySections.tsx`: contenido empresarial procedente de la planeación.
- `src/components/sections/Visuals.tsx`: línea de plazos y gráfico de metas previstas.
- `src/components/graphics/BmoMotif.tsx`: motivos SVG transparentes inspirados en la pantalla y controles de BMO.
- `src/app/globals.css`: estilos responsivos y tokens de la paleta existente.
- `src/app/multipage.css`: composición de portada, páginas interiores y gráficos.
- `src/components/ui/`: botones y superficies reutilizables.
- `src/components/sections/`: hero, filosofía y galería editorial.
- `public/assets/`: ilustraciones y fuentes locales, además de dos escenas editoriales de BMO. La ilustración de Ooo permanece como recurso del proyecto, pero ya no se repite en la interfaz.
- `docs/design-audit.md`: referencias, evidencia y límites del contenido.
- `docs/design-tokens.md`: paleta, tipografía, espacio y componentes.
- `docs/component-inventory.md`: inventario de componentes.
- `docs/motion-system.md`: secuencia del Hero, reveals, duraciones y movimiento reducido.

Los contenidos proceden de `U1 A2. Planeación estratégica_Eqverde.pdf`, páginas 2–10. El documento aún no define un organigrama empresarial completo ni políticas formales de comunicación, liderazgo, motivación y mejora. La interfaz lo expresa sin fabricar datos.
