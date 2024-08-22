export const loader = () => {
    const loader = document.querySelector('.cat-container');
    const contenedor = document.querySelector('.contenedor');

    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            console.log("Interno")
        }, 1000)//<- pa cambiar el tiempo de opacidad de la pagina
        
        contenedor.style.overflow = "visible"
    }, 2000)//<- pa cambiar el tiempo de carga de la pagina
}