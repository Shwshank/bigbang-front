$(document).ready(function(){
$(".mdl-card__actions").click( function(){
    $(".mdl-card__actions.active").removeClass("active");
    $(this).addClass("active");
});
});