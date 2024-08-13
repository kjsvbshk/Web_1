
---

# Proyecto de Rediseño de Sitio Web

Este proyecto tiene como objetivo principal rediseñar una página web para mejorar la experiencia del usuario, asegurando que sea accesible, responsiva y adecuada para diferentes tamaños de pantalla. A continuación, se detallan los aspectos clave del proyecto, desde la implementación de media queries hasta la integración de la Web Speech API para mejorar la accesibilidad.

## Estructura del Proyecto

### 1. Media Queries en CSS
Las media queries son una característica fundamental en CSS que permite aplicar diferentes estilos según el dispositivo o las características de la pantalla (como la resolución o el tamaño). En este proyecto, se utilizaron media queries para crear un diseño web responsivo que se adapta a cualquier dispositivo, desde móviles hasta escritorios.

- **Media Query `@media (max-width: 750px)`**: Se aplicó para dispositivos con un ancho máximo de 750px, como teléfonos móviles. Los ajustes incluyen:
  - `seccion-perfil-usuario .lista-datos`: El ancho de la lista de datos se ajusta al 100% del ancho disponible.
  - `seccion-perfil-usuario .perfil-usuario-portada` y `.perfil-usuario-body`: Estos elementos se ajustan al 95% del ancho disponible, asegurando una mejor adaptación en pantallas pequeñas.

### 2. Ajustes en el CSS
Se realizaron varias modificaciones en el CSS para garantizar la responsividad y accesibilidad:
- **Layout y Contenido**: Ajustes en márgenes, tamaños de fuente y anchos de contenedor.
- **Botones de Navegación**: Se hicieron accesibles mediante teclado y se añadió un enfoque visual claro para la navegación sin mouse.

### 3. Implementación de la Web Speech API
La Web Speech API se implementó para mejorar la accesibilidad, permitiendo la lectura en voz alta del contenido de las secciones clave. Esto hace que el sitio sea más inclusivo para personas con discapacidades visuales y ofrece una mejor experiencia de usuario.

### 4. Cambios en el HTML
Para soportar la nueva funcionalidad, se realizaron los siguientes cambios en el HTML:
- Se añadió un botón con el ID `voice-assistant`, accesible mediante teclado, que activa la funcionalidad de lectura en voz alta.
- Se usó el atributo `aria-label` para describir la función del botón y mejorar la accesibilidad para los lectores de pantalla.
- Se añadieron los atributos `tabindex` y `aria-label` en varias secciones del perfil (biografía, pie de página, portada, avatar), mejorando la navegación por teclado y la experiencia para usuarios con discapacidad.

## Resultados de las Pruebas
Las pruebas realizadas confirmaron que el rediseño del sitio web es efectivamente responsivo y accesible en diferentes dispositivos, ofreciendo una experiencia de usuario optimizada tanto en escritorio como en móviles.

## Autores
- Irving Rios Ramirez
- Jeffry Stev Sahagun

---
