import { loader } from "./js/loader"
import { animateElement } from './js/ScrollAnimation'

const $aboutSection = document.getElementById('about')
const $projectsSection = document.getElementById('projects')

$(document).ready(function () {
    $('.slider-1').slick({
        infinite: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
    })
})

document.addEventListener('load', loader())

// Animation Scroll
document.addEventListener('scroll', () => {

    if (screen.width > 1024) {
        animateElement($aboutSection)
        animateElement($projectsSection)
    }
})

document.getElementById('button-bars').addEventListener('click', () => {
    console.log("TOGLE")
    document.getElementById('nav-items').classList.toggle('hidden')
    document.getElementById('nav-items').classList.toggle('flex')
})
