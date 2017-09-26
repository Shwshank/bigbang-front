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
    $("button.expansion-btn").click(function (){
        classes = this.className;
        var divNumber = classes.slice(-1);
        var toGetId = "#div-"+divNumber;
        if ($(toGetId).hasClass("expanded-div")){
         $(".normal-div").removeClass("compressed-div expanded-div");
        }
        else{
         $(".normal-div").removeClass("compressed-div expanded-div").addClass("compressed-div");;
         $(toGetId).removeClass("compressed-div").addClass("expanded-div");    
        }  
      });
});