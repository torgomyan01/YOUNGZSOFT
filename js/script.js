const {active, none, fix} = {
    active: 'active',
    none: 'd-none',
    fix: 'fix'
}
const mobileMenu = $('.mobile-menu-board');
const _menu = $('.mobile-menu');



const defDropdowns = $('.def-dropdown');

defDropdowns.on('click', function (){
    const thisElem = $(this);
    if(thisElem.hasClass(active)){
        defDropdowns.removeClass(active);
    } else {
        defDropdowns.removeClass(active);
        thisElem.addClass(active);
    }
})


const nav = $('.nav');
$(window).on('scroll', function (e){
    const scrollTop = $(window).scrollTop();
    if(scrollTop > 100){
        nav.addClass(fix);
    } else {
        nav.removeClass(fix);
    }
})


const mobileMenuItem = $('.mobile-menu-item');

mobileMenuItem.on('click', function (){
    const thisElem = $(this);
    if(thisElem.hasClass(active)){
        mobileMenuItem.removeClass(active);
    } else {
        mobileMenuItem.removeClass(active);
        thisElem.addClass(active);
    }
})


$('#mobile-login-btn').on('click', function (){
    $(this).addClass(none);
    $('#mobile-login-form').removeClass(none);
})

const modalBody = $('.modal-body');
const platHeaderBtn = $('.play-btn');
const btnCloseModal = $('.btn-close');

platHeaderBtn.on('click', function (){
    modalBody.html(`
        <iframe width="100%" 
            height="497" 
            src="https://www.youtube.com/embed/CHVFWrIhcvo" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
        ></iframe>
    `)
});

$('a[data-scroll]').on('click', function (e){
    e.preventDefault();
    _menu.removeClass(active);
    const id = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(id).offset().top - 100
    },);

})


btnCloseModal.on('click', function (){
    modalBody.html('');
})


$('#home-slider').slick({
    dots: true,
    prevArrow: `<button class="prev-slider"><i class="fas fa-chevron-left"></i></button>`,
    nextArrow: `<button class="next-slider"><i class="fas fa-chevron-right"></i></button>`,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
});


mobileMenu.on('click', function (){
    if(_menu.hasClass(active)){
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
})

function openMobileMenu(){
    mobileMenu.addClass(active);
    _menu.addClass(active);
}

function closeMobileMenu(){
    mobileMenu.removeClass(active);
    _menu.removeClass(active);
}


// -------------- FOR DEFAULT INPUT FUNCTION -------------------


const defaultInput = $('.def-input input');
const inpLabel = $('.def-input');

defaultInput.on('blur', function (){
    inpLabel.map((index, e) => {
        if($(e).children('input').val() === ''){
            $(e).removeClass(active);
        }
    })
})
//
defaultInput.on('focus', function (){
    $(this).parent().addClass(active);
})


// -------------- FOR DEFAULT INPUT FUNCTION -------------------
