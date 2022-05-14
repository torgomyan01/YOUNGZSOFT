const {active, none} = {
    active: 'active',
    none: 'd-none'
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
