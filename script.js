$(document).ready(function () {

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

    // Get the button that opens the popup
    var btn = document.getElementById("infoBtn");

    if (btn) {

      // Get the element that represents the popup
      var popup = document.getElementById("popup");

      // Get the <span> element that closes the popup
      var closeBtn = document.querySelector(".close-btn");

      // When the user clicks on the button, open the popup
      btn.onclick = function() {
          popup.style.display = "flex";
      }

      // When the user clicks on <span> (x), close the popup
      closeBtn.onclick = function() {
          popup.style.display = "none";
      }

      // Also close the popup if the user clicks outside of the popup content
      window.onclick = function(event) {
          if (event.target == popup) {
              popup.style.display = "none";
          }
      }
    }

  });