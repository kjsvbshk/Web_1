 

Estructura Básica de un sitio Web 

 

 

Irving Rios Ramirez 
Jeffry Stev Sahagun 

 

 

Universidad Manuela Beltran 

 Ingenieria Web 1 

 

 

 

12/08/2024 

 

 

 

 

 

 

Introducción 

El objetivo principal del ejercicio es implementar un rediseño a una página web considerando aspectos que deben mejorar la experiencia del usuario, como el contraste entre elementos, jerarquías, accesibilidad, que sea responsiva, es decir, que se adapte óptimamente a diferentes tamaños de pantalla, incluyendo dispositivos móviles, tabletas y escritorios. Para lograr esto, se han implementado media queries en el archivo CSS que permiten ajustar el diseño y el contenido según el tamaño de la ventana del navegador. Además, se integraron funciones de accesibilidad para garantizar que la página sea fácilmente navegable mediante teclado y comprensible para usuarios con discapacidades visuales. 

 

Preguntas Orientadoras 

¿Que son las media queries en CSS y cuál es su propósito? 

Son una característica de CSS (Cascading Style Sheets) que permiten aplicar diferentes estilos para distintas condiciones, como el tipo de dispositivo o características específicas como la resolución de pantalla o el tamaño de la ventana del navegador. Su finalidad es ayudar a crear diseños web responsivos, en los que el diseño se adapta a las capacidades de visualización del dispositivo. 

¿Como se pueden aplicar diferentes estilos en función del tamaño de la pantalla? 

Definiendo las medias queries dentro del archivo CSS para especificar bajo qué condiciones  
se aplicarán los estilos. 

	3. ¿Porque es importante que un sitio web sea responsivo? 

Un sitio web responsivo es fundamental para brindar una experiencia de usuario satisfactoria en cualquier dispositivo, garantizar la accesibilidad en dispositivos móviles y tabletas, mejorar la clasificación en los motores de búsqueda y adaptarse a los avances tecnológicos futuros. Esto incluye una mejor experiencia de usuario, accesibilidad, SEO y preparación para el futuro. 

 

4. ¿Qué aspectos del diseño deben considerarse al adaptar un sitio web para diferentes dispositivos? 

Al adaptar un sitio web para diferentes dispositivos, siempre es importante tener en cuenta varios aspectos del diseño para garantizar que la experiencia del usuario sea optimizada en todas las plataformas. 

Diseño de contenido: debe reorganizarse y redistribuirse para facilitar la lectura y la navegación en diferentes tamaños de pantalla 

Fuente y espaciado: los tamaños deben ajustarse para facilitar la lectura en pantallas más pequeñas. 

Imágenes y medios: deben escalarse adecuadamente para no ocupar demasiado espacio o ralentizar los tiempos de carga en dispositivos móviles. 

Navegación: los menús y las opciones de navegación deben ser accesibles y fáciles de usar en dispositivos de pantalla táctil, con elementos lo suficientemente grandes para seleccionarlos con precisión. 

Velocidad de carga: la optimización de recursos como imágenes y scripts es esencial para garantizar que el sitio se cargue rápidamente en conexiones móviles, que a menudo son más lentas. 

Interacción táctil: los elementos interactivos deben diseñarse para que se puedan tocar fácilmente con los dedos en dispositivos móviles, evitando elementos que estén demasiado juntos. 

Desarrollo del Informe 

Descripción de las medias queries implementadas 

Media Query (max-width:750px): Se implementó una media query para dispositivos con un ancho máximo de 750px, como teléfonos móviles. Dentro de esta media query, se realizaron ajustes en el ancho de las secciones para que ocupen el 95% del ancho disponible, asegurando que el contenido no se desborde. 

 

 

Este Media Query se activa cuando el ancho de la pantalla es igual o menor a 750 píxeles. Esto es típico para dispositivos móviles y tablets en orientación vertical. 

 

Estilos aplicados dentro del Media Query: 

.seccion-perfil-usuario .lista-datos: 

Se ajusta el ancho de la lista de datos (.lista-datos) para que ocupe el 100% del ancho disponible. 

.seccion-perfil-usuario .perfil-usuario-portada y .seccion-perfil-usuario .perfil-usuario-body: 

El ancho de estos elementos se ajusta al 95% del ancho disponible en lugar de sus valores originales, lo que les permite adaptarse mejor a pantallas más pequeñas. 

 

Ajustes en el CSS 

Layout y Contenido: Se ajustaron márgenes, tamaños de fuente y anchos de contenedor para garantizar que el contenido se vea bien en cualquier dispositivo. 

Botones de navegación: Los botones se hicieron accesibles con el teclado, y se añadió un enfoque visual claro para usuarios que navegan sin mouse. 

 

Uso de la Web Speech API 

La Web Speech API se ha implementado en el sitio para mejorar la accesibilidad, permitiendo que el contenido de las secciones clave sea leído en voz alta cuando se interactúa con ellas. Este enfoque no solo hace que el sitio sea más accesible para personas con discapacidades visuales, sino que también proporciona una experiencia de usuario más inclusiva. 

 

Cambios en el HTML 

Se añadió el botón identificado con el ID 'voice-assistant', que permite a los usuarios activar la funcionalidad de lectura en voz alta del contenido de las secciones. Este botón es accesible mediante el teclado, facilitando su uso para personas con movilidad reducida o invidentes. 

Se usa el atributo 'aria-label' para describir la función del botón, asegurando que los lectores de pantalla lo puedan interpretar correctamente. 

Los atributos 'tabindex' y 'aria-label' se agregaron en varias secciones del perfil, cómo la biografía, el pie de página, la portada y el avatar del usuario; para mejorar la navegación por teclado. Esto permite que el lector de pantalla anuncie en que seccion se encuentra el usuario. 

 

 

 

 

Resultado de las pruebas 

Página web de escritorio 

 

Página web de escritorio responsive 

