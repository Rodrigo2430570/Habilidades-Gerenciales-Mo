# Inventario de componentes — MO Co.

| Componente | Archivo | Función |
|---|---|---|
| `Button` | `src/components/ui/Button.tsx` | Enlace de acción con variantes primary, text y light. |
| `Card` | `src/components/ui/Card.tsx` | Superficie reutilizable con cuatro tonos de la marca. |
| `Hero` | `src/components/sections/Hero.tsx` | Portada empresarial con propósito e imagen MO. |
| `FeatureGrid` | `src/components/sections/FeatureGrid.tsx` | Misión, visión y cinco valores. |
| `EditorialGallery` | `src/components/sections/EditorialGallery.tsx` | Cierre narrativo con la ilustración local de Ooo. |
| `Navigation` | `src/components/sections/Navigation.tsx` | Cuatro anclas principales y menú móvil que se cierra al elegir sección. |
| `SectionHeading` | `src/app/page.tsx` | Número, título y entradilla de cada apartado principal. |
| `BlockHeading` | `src/app/page.tsx` | Título y nota de subapartado. |
| `SWOTGrid` | `src/app/page.tsx` | Cuatro cuadrantes FODA. |
| `GoalsGrid` | `src/app/page.tsx` | Tres objetivos SMART y criterios nativos desplegables. |
| `StrategyList` | `src/app/page.tsx` | Tres líneas estratégicas numeradas. |
| `ActionGrid` | `src/app/page.tsx` | Pasos, responsables, recursos y plazos. |
| `OrganizationChart` | `src/app/page.tsx` | Estructura de ejecución de las iniciativas documentadas. |
| `WorkStyleSection` | `src/app/page.tsx` | Cultura, liderazgo, comunicación, motivación y equipo. |
| `KPIGrid` | `src/app/page.tsx` | Metas previstas con cifras del PDF. |
| `ProcessGrid` | `src/app/page.tsx` | Verificaciones previstas en el plan. |
| `Footer` | `src/app/page.tsx` | Marca, contexto y regreso al inicio. |
| `MotionController` | `src/components/motion/MotionController.tsx` | Coordina reveals, sección activa, visibilidad del Hero y movimiento reducido. |

Los bloques específicos permanecen juntos en `page.tsx` para que la fuente de contenido sea fácil de cotejar con la planeación. `Card`, `Button` y las tres secciones visuales son reutilizables entre páginas futuras.
