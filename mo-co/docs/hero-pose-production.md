# Variantes del personaje del Hero

La imagen original `public/assets/bmo-institute.png` permanece como pose de
reposo. Las tres variantes PNG transparentes se generaron con la herramienta
integrada ImageGen a partir de esa misma imagen como objetivo de edición. No
son modelos 3D ni permiten girar o articular al personaje libremente.

| Archivo | Uso | Instrucción visual principal |
| --- | --- | --- |
| `public/assets/bmo-wave-v2.png` | Entrada y saludo | Conservar la geometría, proporciones, materiales, cámara, controles y paleta del robot original; levantar la mano del lado derecho del espectador y mostrar una sonrisa alegre. Fondo transparente, sin objetos ni texto. |
| `public/assets/bmo-blink-v2.png` | Parpadeo | Conservar pose y cuerpo originales; cambiar solo los ojos por dos líneas curvas cerradas y mantener una sonrisa discreta. Fondo transparente, misma escala y encuadre. |
| `public/assets/bmo-surprise-v2.png` | Curiosidad y sorpresa | Conservar identidad, controles, iluminación y encuadre; mostrar una boca pequeña abierta y elevar ligeramente el brazo derecho sin superar el hombro. Fondo transparente. |

La variante de parpadeo se muestra solo dentro de la pantalla para evitar que
pequeñas diferencias entre imágenes hagan parecer que salta todo el cuerpo.
Las poses completas tienen una transición breve. El cambio de imágenes se
desactiva como animación cuando el usuario prefiere movimiento reducido.
