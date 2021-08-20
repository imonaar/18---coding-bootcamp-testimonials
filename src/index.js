import "./styles/styles.scss";


const track = document.querySelector('.carousel__track')
const slides = Array.from(track.children)

const totalSlides = slides.length

const prevBtn = document.querySelector('.btn-prev')
const nextBtn = document.querySelector('.btn-next')

let slidePosition = 0

nextBtn.addEventListener('click', ()=>{
    moveToNextSlide()
})

prevBtn.addEventListener('click', ()=>{
    moveToPrevSlide()
})

const updateSlidePosition =() =>{
    for(let slide of slides){
        slide.classList.remove('visible')
    }
    slides[slidePosition].classList.add('visible')
}

const moveToNextSlide = () =>{
    updateSlidePosition()
    if(slidePosition === totalSlides  -1){
        slidePosition = 0
    } else{
        slidePosition ++
    }
}

const moveToPrevSlide = () =>{
    updateSlidePosition()
    if(slidePosition === 0 ){
        slidePosition = totalSlides - 1
    } else{
        slidePosition--
    }
}

