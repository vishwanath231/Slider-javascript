const track = document.querySelector(".slider__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".slider__button-right");
const prevButton = document.querySelector(".slider__button-left");

const counter = document.querySelector(".slider__nav");
const counts = Array.from(counter.children);



const slidesWidth = slides[0].getBoundingClientRect().width;

const setSlidesPosition = (slide,index) => {
    slide.style.left = slidesWidth * index + 'px';
}
slides.forEach(setSlidesPosition);


const moveToSlide = (track,currentSlide,targetSlide) =>{
    track.style.transform = 'translateX(-'+ targetSlide.style.left  +')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide')
}

const hideShowSlide = (slides,prevButton,nextButton,targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }else if (targetIndex === slides.length -1){
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }else{
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }

}


const updateCount = (currentCount,targetCount) =>{
    currentCount.classList.remove('current-slide');
    targetCount.classList.add('current-slide');
}


nextButton.addEventListener("click", (e) => {

    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    const currentCount = counter.querySelector(".current-slide");
    const nextCount = currentCount.nextElementSibling;
    
    moveToSlide(track,currentSlide,nextSlide);
    hideShowSlide(slides,prevButton,nextButton,nextIndex);
    updateCount(currentCount,nextCount);


    const currentArrow = counter.querySelector(".current-arrow");
    const nextArrow = currentArrow.nextElementSibling;
    console.log(nextArrow);
    currentArrow.classList.remove('current-arrow');
    nextArrow.classList.add('current-arrow');
    
})




prevButton.addEventListener("click", (e) => {
    
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    const currentCount = counter.querySelector(".current-slide");
    const prevCount = currentCount.previousElementSibling;
    
    moveToSlide(track,currentSlide,prevSlide);
    hideShowSlide(slides,prevButton,nextButton,prevIndex);
    updateCount(currentCount,prevCount);
})



counter.addEventListener("click", (e)=> {
    
    const targetCount = e.target.closest('button');
    
    const currentSlide = track.querySelector(".current-slide");
    const currentCount = counter.querySelector(".current-slide");
    const targetIndex =  counts.findIndex(count => count === targetCount);
    const targetSlide = slides[targetIndex];
    
    moveToSlide(track,currentSlide,targetSlide);
    hideShowSlide(slides,prevButton,nextButton,targetIndex)
    updateCount(currentCount,targetCount);
})





