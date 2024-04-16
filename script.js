$(document).ready(function () {
    
    // lazy load all images with class lazyload
    lazyload();

    // js for navbar
    var trigger = $('.hamburger'),
    overlay = $('.overlay'),
    isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {    
        console.log(isClosed)      
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else { 
        console.log(isClosed)   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
    }

    // close navbar when clicking outside of it
    overlay.click(function() {
      if (!overlay.hasClass('index')) {
        hamburger_cross();
        $('#wrapper').toggleClass('toggled');
      }
    });
    
    // adds the class "toggled" if it's not present, and removes it if it is already present
    $('[data-toggle="offcanvas"]').click(function () {
          $('#wrapper').toggleClass('toggled');
    }); 
  });