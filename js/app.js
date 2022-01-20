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
        }
    },
});
