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
 /*   $(document).ready(function(){
    $('#toggle-menu').click(function(){
        $('#menu').toggle();
    });
});

*/

$(document).ready(function(){
    $(".expansion-btn").click(function (){
        classes = this.className;
        var divNumber = classes.slice(-1);
        var toGetId = "#exp-div";
        if ($(toGetId).hasClass("expanded-div")){
         $(".normal-div").removeClass("compressed-div expanded-div"); 
         $(".expansion-btn").removeClass("active");
         $(".arrow-back").removeClass("active");
         $(".close").removeClass("active");
        }
        else{
         $(".normal-div").removeClass("compressed-div expanded-div").addClass("compressed-div");;
         $(toGetId).removeClass("compressed-div expansion-btn").addClass("expanded-div");
             $(".expansion-btn").addClass("active"); 
             $(".arrow-back").addClass("active");
             $(".close").addClass("active");
           
        }  
      });
      
      //
      var x = $('.FAB__mini-action-button').find('.mini-action-button--hide').length * 60 + 60;
      
      $('.FAB').hover(function(){
          $('.FAB').height(x);
      }, function(){
          $('.mini-action-button--show').attr('class', 'mini-action-button--hide');
          $('.FAB').height(0);
      });
      
      $('.mini-action-button').hover(function(){
          $(this).find('.mini-action-button__text--hide').attr('class', 'mini-action-button__text--show');
      }, function(){
          $(this).find('.mini-action-button__text--show').attr('class', 'mini-action-button__text--hide');
      });
      
      $('.FAB__action-button').hover(function(){
        $(this).find('.action-button__text--hide').attr('class', 'action-button__text--show');
        $('.mini-action-button--hide').attr('class', 'mini-action-button--show');
    }, function(){
        $(this).find('.action-button__text--show').attr('class', 'action-button__text--hide');
      });
});