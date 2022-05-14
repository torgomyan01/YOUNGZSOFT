const {active, none, fix} = {
    active: 'active',
    none: 'd-none',
    fix: 'fix'
}


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
    if(scrollTop > 200){
        nav.addClass(fix);
    } else {
        nav.removeClass(fix);
    }
})



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
