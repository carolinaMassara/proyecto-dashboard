$(document).ready(function(){
    $('.flecha-arriba').on('click',function(){
        $( ".hide-container" ).addClass('show');
        if($( ".hide-container" ).hasClass('show')){
            $( ".hide-container" ).hide();
            $( ".hide-container" ).removeClass('show');
            $( ".hide-container" ).addClass('hide');
        }
    })
})
