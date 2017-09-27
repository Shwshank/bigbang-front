$(document).ready(function(){
    
    var $body = $('body'),
        $btn = $('#push-menu-toggle'),
        $menu = $('#push-menu'),
        menu_state = $.cookie('my_cookie_name'),
        viewportX = $(window).width();
    
    var cookieValue = $.cookie('my_cookie_name');
    
    if ( cookieValue === 'close' ) {
      $body.addClass('small-menu');
    } else {
      $body.removeClass('small-menu');
    }
     
    $.cookie('my_cookie_name', menu_state);
    
    $('.cookie-is').find('em').remove();
    $('.cookie-is').prepend().html( '<em>' + $.cookie('my_cookie_name') + '</em>');
       
    $btn.click(function(){
          
      $body.toggleClass('small-menu');
      
      $.removeCookie('my_cookie_name');
      
      if ( $body.hasClass('small-menu') ) {
        menu_state = 'close';
      } else {
        menu_state = 'open';
      }
      
      $.cookie('my_cookie_name', menu_state);
    
      $('.cookie-is').find('em').remove();
      $('.cookie-is').prepend().html( '<em>' + $.cookie('my_cookie_name') + '</em>');
    });
  
  });