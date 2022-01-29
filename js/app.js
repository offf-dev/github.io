window.addEventListener('load', async () => {
    console.log(window.isSecureContext)
    console.log(navigator)
    if(navigator.serviceWorker){
        try {
            const reg = await navigator.serviceWorker.register('./worker.js');
            console.log('Service Worker success', reg);
        } catch (e) {
            console.log('Service Worker fail')
        }
    }
});

var wrapper = document.getElementById('wrapper');
var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
    },
    spaceBetween: 14,
    on: {
        slideChange: function (e) {
            wrapper.dataset.slide = e.activeIndex;
        },
        tap: function (swiper, event) {
            swiper.clickedSlide.classList.toggle('flipped');
        },
        transitionEnd: function (swiper) {
            var prevSlide = document.querySelector('.swiper-slide-prev'),
                nextSlide = document.querySelector('.swiper-slide-next');
            if(prevSlide) {
                prevSlide.classList.remove('flipped');
            }
            if(nextSlide) {
                nextSlide.classList.remove('flipped');
            }
        }
    },
});
