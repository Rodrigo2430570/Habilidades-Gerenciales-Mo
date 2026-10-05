# Inventario de componentes — MO Co.

| Componente | Archivo | Función |
|---|---|---|
| `Button` | `src/components/ui/Button.tsx` | Enlace de acción con variantes primary, text y light. |
| `Card` | `src/components/ui/Card.tsx` | Superficie reutilizable con cuatro tonos de la marca. |
| `Hero` | `src/components/sections/Hero.tsx` | Portada empresarial con propósito e imagen MO. |
| `FeatureGrid` | `src/components/sections/FeatureGrid.tsx` | Misión, visión y cinco valores. |
| `EditorialGallery` | `src/components/sections/EditorialGallery.tsx` | Cierre narrativo con la ilustración local de Ooo. |
| `Navigation` | `src/components/sections/Navigation.tsx` | Rutas principales, página activa y menú móvil que se cierra al elegir destino. |
| `PageIntro` | `src/components/sections/PageIntro.tsx` | Entrada visual, título H1 y enlace de regreso para páginas interiores. |
| `StoryImage` | `src/components/sections/Visuals.tsx` | Pausa editorial con imagen y pie contextual. |
| `PlanTimeline` | `src/components/sections/Visuals.tsx` | Plazos previstos de las tres iniciativas. |
| `TargetChart` | `src/components/sections/Visuals.tsx` | Umbrales previstos sin presentar avance alcanzado. |
| `SectionHeading` / `BlockHeading` | `src/components/sections/CompanySections.tsx` | Títulos y entradillas del contenido empresarial. |
| `SWOTGrid`, `GoalsGrid`, `StrategyList`, `ActionGrid` | `src/components/sections/CompanySections.tsx` | Análisis y planes de la estrategia. |
| `OrganizationChart`, `WorkStyleSection`, `KPIGrid`, `ProcessGrid` | `src/components/sections/CompanySections.tsx` | Organización, prácticas y verificaciones. |
| `Footer` | `src/app/layout.tsx` | Marca, contexto y regreso al inicio en todas las páginas. |
| `MotionController` | `src/components/motion/MotionController.tsx` | Coordina reveals, visibilidad del Hero y movimiento reducido en cada ruta. |

Los bloques de contenido permanecen juntos en `CompanySections.tsx` para cotejarlos con la planeación. La portada enlaza a las cuatro páginas interiores sin repetir todos sus textos.
