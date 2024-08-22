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
        // autoplay: true,
        autoplaySpeed: 2000,
    })
})

document.addEventListener('load', loader())

// Animation Scroll
document.addEventListener('scroll', () => {
    animateElement($aboutSection)
    animateElement($projectsSection)
})
