# MO Co. — Tecnología con corazón

Home empresarial de MO Co. en Next.js, TypeScript y Tailwind CSS. Presenta estrategia, organización, forma de trabajar y compromiso a partir de la planeación del equipo. Las cifras visibles son metas previstas.

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

`npm run build` genera `out/` con Next.js y actualiza `dist/` para el alojamiento estático ya configurado en `.openai/hosting.json`. No hay backend ni formularios.

## Archivos principales

- `src/app/page.tsx`: contenido empresarial y cuatro apartados.
- `src/app/globals.css`: estilos responsivos y tokens de la paleta existente.
- `src/components/ui/`: botones y superficies reutilizables.
- `src/components/sections/`: hero, filosofía y galería editorial.
- `public/assets/`: ilustraciones y fuentes locales conservadas.
- `docs/design-audit.md`: referencias, evidencia y límites del contenido.
- `docs/design-tokens.md`: paleta, tipografía, espacio y componentes.
- `docs/component-inventory.md`: inventario de componentes.
- `docs/motion-system.md`: secuencia del Hero, reveals, duraciones y movimiento reducido.

Los contenidos proceden de `U1 A2. Planeación estratégica_Eqverde.pdf`, páginas 2–10. El documento aún no define un organigrama empresarial completo ni políticas formales de comunicación, liderazgo, motivación y mejora. La interfaz lo expresa sin fabricar datos.
