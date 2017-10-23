$(document).ready(function(){
$(".mdl-card__actions").click( function(){
    $(".mdl-card__actions.active").removeClass("active");
    $(this).addClass("active");
});
//**submenu**//
$(".sub-menu").click(function(e){
    
    if($(this).hasClass("active")){
    $(this).removeClass('active');
    $(this).next().removeClass('active');
    } else {
    $('.sub-menu').removeClass('active');
    $('.sub-menu-items').removeClass('active');
    $(this).addClass('active');
    $(this).next().addClass('active');
    }
    });
    
    });