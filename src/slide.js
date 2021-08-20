const track = document.querySelector('.carousel__track')
const slides = Array.from(track.children)
const prevBtns = document.querySelectorAll('.btn-prev')
const nextBtns = document.querySelectorAll('.btn-next')


const slideWidth = slides[0].getBoundingClientRect().width


const setSlidePosition = (slide, indx) =>{
    slide.style.left = (slideWidth * indx )+ 'px'
}

slides.forEach(setSlidePosition)

const moveToSlide = (track, currentSlide, targetSlide) =>{
    track.style.transform = 'translateX(-' + targetSlide.style.left +')'
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')
}

nextBtns.forEach((btn, indx)=>{
    btn.addEventListener('click', e =>{
        const currentSlide = track.querySelector('.current-slide')
        const nextSlide = currentSlide.nextElementSibling
    
        //move to the next slide 
    
        moveToSlide(track, currentSlide, nextSlide)
    })
})

prevBtn.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide')
    const prevSlide = currentSlide.previousElementSibling
   
    moveToSlide(track, currentSlide, prevSlide)
})

nextBtn.addEventListener('click', e =>{
    const currentSlide = track.querySelector('.current-slide')
    const nextSlide = currentSlide.nextElementSibling

    //move to the next slide 

    moveToSlide(track, currentSlide, nextSlide)
})