export const loader = () => {
    const loader = document.querySelector('.cat-container');

    console.log("Emote")

    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1000)//<- pa cambiar el tiempo de opacidad de la pagina
    }, 1000)//<- pa cambiar el tiempo de carga de la pagina
}