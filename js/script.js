// Slick
$(document).ready(function() {
    $('.banner__slick').slick({
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
    })
    $('.popular__row').slick({
        slidesToShow: 4,
        arrows: false,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev slick-prev-2"></button>',
        nextArrow: '<button type="button" class="slick-next slick-next-2"></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    arrows: true
                },
            },
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    arrows: true
                }
            }
        ]
    })
    $('.product-adaptation__image').slick({
        slidesToShow: 1,
        loop: false,
        dots: true,
        arrows: false
    })
})
// Vanila
VanillaTilt.init(document.querySelectorAll(".catalog__items"), {
    max: 30,
    speed: 600
});
// Scroll fun
// $(document).ready(function(){
//     $(window).scroll(function(){
//         if(this.scrollY > 300) {
//             $('.scroll__up-btn').addClass("show");
//         }else {
//             $('.scroll__up-btn').removeClass("show");
//         }
//     })
// })

// Slide UP

$('.scroll__up-btn').click(function(){
    $('html').animate({scrollTop: 0})
});

// Burger
$(document).ready(function() {
    $('.burger').click(function() {
        $('.burger, .header-nav__nav').toggleClass('active');
    })
    // if ('body'.width == 768 && 'body' < 768) {
    //     $('.popular__slick').removeClass('.popular__col-3');
    // }
})

// Input

const plusBtns = document.querySelectorAll('.function__button-plus'),
      inputs = document.querySelectorAll('.function__input'),
      minusBtns = document.querySelectorAll('.function__button-minus')

    //   old method
plusBtns.forEach(function(plusBtn, idx) {
    plusBtn.addEventListener('click', function() {
        inputs[idx].value = Number(inputs[idx].value) + 1 
        if (inputs[idx].value > 20) {
            inputs[idx].value = 20
        }
    })
})

// new method
// plusBtns.forEach((plusBtn, idx) => {
//     plusBtn.addEventListener('click', () => {
//         inputs[idx].value = Number(inputs[idx].value) + 1 
//         inputs[idx].value > 20 ? inputs[idx].value = 20 : ''
//     })
// })


minusBtns.forEach(function(minusBtn, idx) {
    minusBtn.addEventListener('click', function() {
        inputs[idx].value = Number(inputs[idx].value) - 1
        if (inputs[idx].value < 0) {
            inputs[idx].value = 0
        }
    })
})