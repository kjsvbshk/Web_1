import { Carousel } from "./js/Carousel"

const galleryContainer = document.querySelector('.gallery-container')
const galleryItems = document.querySelectorAll('.gallery-item')
const galleryControls = ['previous', 'next']
const galleryControlsContainer = document.querySelector('.gallery-controls')

const example = new Carousel(galleryContainer, galleryItems, galleryControls, galleryControlsContainer)

example.setControls()
example.useControls()