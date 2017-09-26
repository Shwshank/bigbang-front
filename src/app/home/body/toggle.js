 /*$(window).on('load', function(){
    
        var toggle = false;
    
        $('button').click(function() {
            toggle = !toggle;
    
            if(toggle){
               
                $('#A').animate({width:0});
                $('#B').animate({right:0});
                
            }
            else{
             
                $('#A').animate({width:400});
                $('#B').animate({right:400});
            }
    
        });
    });
    */
    $(document).ready(function(){
    $('#toggle-menu').click(function(){
        $('#menu').toggle();
    });
});