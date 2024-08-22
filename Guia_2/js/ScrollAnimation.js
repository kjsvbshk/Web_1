export const animateElement = (element = HTMLElement) => {

    const screenPosition = window.innerHeight;
    const contentPosition = element.getBoundingClientRect().top

    if (contentPosition < screenPosition - 200) {
        element.classList.add('visible-p')
    }
}