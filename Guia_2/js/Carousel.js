export class Carousel {
    constructor(container, items, controls, galleryControlsContainer) {
        this.carouselContainer = container
        this.carouselControls = controls
        this.carouselArray = [...items]
        this.galleryControlsContainer = galleryControlsContainer
    }

    updateGallery() {
        this.carouselArray.forEach(item => {
            item.classList.remove('gallery-item-1')
            item.classList.remove('gallery-item-2')
            item.classList.remove('gallery-item-3')
            item.classList.remove('gallery-item-4')
            item.classList.remove('gallery-item-5')
        })

        this.carouselArray.slice(0, 5).forEach((item, i) => {
            item.classList.add(`gallery-item-${i+1}`)
        })
    }

    setCurrentState(direction) {
        if(direction.className == 'gallery-controls-previous') {
            this.carouselArray.unshift(this.carouselArray.pop())
        } else {
            this.carouselArray.push(this.carouselArray.shift())
        }

        this.updateGallery()
    }

    setControls() {
        this.carouselControls.forEach(control => {
            const button = document.createElement('button')
            button.className = `gallery-controls-${control}`

            this.galleryControlsContainer.appendChild(button)

            document.querySelector(`.gallery-controls-${control}`).innerText = control
        })
    }

    useControls() {
        const triggers = [...this.galleryControlsContainer.childNodes]
        triggers.forEach(control => {
            control.addEventListener('click', (e) => {
                e.preventDefault()
                this.setCurrentState(control)
            })
        })
    }
}