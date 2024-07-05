$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    const mainContentSlide = new Swiper('.main-content-slide', {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 30,
        scrollbar: {
            el: '.swiper-scrollbar',
        },

        // // navigation: {
        // nextEl: '.main_slide02.arrows .prev',
        // prevEl: '.main_slide02 .arrows .next',
        // // },
    })



});
