# Recorrido y contexto de MO Co.

## Alcance

Iteración sobre el sitio existente: conserva el Hero y su imagen de BMO, la paleta, las fuentes y toda la planeación empresarial. Las imágenes interiores dejan de repetir a BMO. La navegación incorpora Inicio en el menú, regreso persistente al índice de portada, índice local con sección activa y enlaces anterior/siguiente al final de cada página.

## Contexto de la serie

La referencia temporal es la fábrica presentada en **Be More**. MO Co. es una antigua fábrica de Moe en las Tierras Baldías, con instalaciones industriales envejecidas y una comunidad subterránea de robots MO diversos. No se representa como un campus contemporáneo ni se presenta a BMO como responsable de toda la empresa.

La continuidad posterior de **The More You Moe, The Moe You Know** cambia la situación de Moe y de los MO. Este sitio interpreta el escenario de Be More para conservar coherencia con la planeación suministrada, en la que Moe participa como responsable e instructor. No afirma describir el estado final de la empresa en la serie.

Los departamentos, responsables, presupuestos, metas, respaldos y formación son propuestas de la planeación del proyecto. No deben atribuirse al canon. Las nuevas escenas son interpretaciones conceptuales originales, no fotogramas oficiales ni reconstrucciones exactas. El archivo técnico visualiza una propuesta del plan; no documenta una sala canónica.

Referencias consultadas:

- [Cartoon Network — MO Factory Tour](https://www.youtube.com/watch?v=zWRbiumuwZs), fuente oficial del recorrido por la fábrica.
- [Cartoon Network — BMO Returns to the MO Factory](https://www.youtube.com/watch?v=fbX_H7hH4j4), referencia oficial de continuidad posterior.
- [Adventure Time Wiki — MO Co.](https://adventuretime.fandom.com/wiki/MO_Co.), ubicación, arquitectura y comunidad.
- [Adventure Time Wiki — Be More](https://adventuretime.fandom.com/wiki/Be_More), contexto de Moe y los MO.

## Imágenes

Generadas con la herramienta integrada ImageGen. Los prompts finales se conservan en `image-prompts.json`.

- `public/assets/mo-fabrica.png`: fábrica industrial envejecida en el desierto; estrategia.
- `public/assets/mo-comunidad.png`: comunidad MO en galerías subterráneas; organización y colaboración.
- `public/assets/mo-memoria.png`: mesa de reparación, módulos y manuales; preservación y trabajo.

Las primeras propuestas de campus y robots genéricos se descartaron tras precisar el contexto de la serie. No se incorporaron al proyecto.

El diagrama de compromisos es geometría e iconografía nativa: funcionamiento, información y conocimiento. Sustituye la cara y los controles de BMO por los tres temas reales del plan.

## Navegación y movimiento

- Enlaces HTML normales: rutas, índice y recorrido funcionan sin JavaScript.
- Barra local fija bajo el encabezado, con desplazamiento horizontal en móviles y espacio de anclaje reservado.
- Sección actual actualizada mediante una lectura de posiciones por cuadro, únicamente al desplazar o redimensionar.
- Menú móvil nativo, cierre al elegir destino, pulsar fuera o usar Escape; Escape devuelve foco al control.
- Transiciones entre documentos de 140–240 ms donde el navegador admita View Transitions; navegación normal en los demás.
- El encabezado mantiene su posición entre vistas. Respuesta al pulsar, indicación de enlaces y apertura de menú breve y anclada al botón.
- `prefers-reduced-motion` desactiva transiciones espaciales entre documentos. Se respetan también movimiento reducido, transparencia reducida y contraste alto.
- No se agregaron dependencias de animación ni esperas artificiales antes de navegar.

Skills aplicadas: Apple Design (`C:/Users/ferna/.codex/skills/apple-design/SKILL.md`), instalada desde `emilkowalski/skills/skills/apple-design`, e Impeccable 4.3.1. Se mantuvo la identidad MO Co.; Apple Design informa el comportamiento, no una sustitución de marca.

## Verificación de esta iteración

- Compilación de producción, validación de tipos y exportación estática correctas mediante `npm run build`.
- Detector de Impeccable ejecutado una vez sobre los componentes principales modificados: sin hallazgos.
- Verificación del HTML exportado: las cinco páginas tienen un H1; todos los enlaces internos, destinos por ancla, imágenes y textos alternativos comprobados existen.
- Revisión visual en escritorio y móvil de 390 px; comprobación adicional de ausencia de desbordamiento horizontal a 320 px.
- Recorrido probado: inicio → estrategia → organización → forma de trabajar → compromiso; regreso desde páginas interiores al índice de portada.
- Anclas de Objetivos y Equipo dejan sus títulos debajo de la barra fija; la sección activa cambia al desplazarse.
- Menú móvil probado: abre, navega, cierra con Escape y devuelve el foco al control.
- Reglas de movimiento reducido comprobadas en las hojas de estilo cargadas. No se simuló la preferencia del sistema operativo.
- Una transición fue cancelada por el navegador durante los cambios de viewport de la revisión; la navegación continuó normalmente. Los navegadores sin View Transitions usan enlaces convencionales.
