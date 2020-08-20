// function smoothScroll(target, duration){
//     var target = document.querySelector(target);
//     var targetPosition = target.getBoundingClientRect().top;
//     var startPosition = window.pageYOffset;
//     var distance = targetPosition - startPosition;
//     var startTime = null;

//     function animation(currentTime){
//         if(startTime === null) startTime = currentTime;
//         var timeElapsed = currentTime - startTime;
//         var run = ease(timeElapsed, startPosition, distance, duration);
//         window.scrollTo(0, run);
//         if(timeElapsed < duration) requestAnimationFrame(animation);
//     }

//     function ease(t, b, c, d){
//         t /= d / 2;
//         if (t<1) return c / 2 * t * t + b;
//         t--;
//         return -c / 2 * (t* (t-2) -1) + b;
//     }

//     requestAnimationFrame(animation);
// }



// var banner = document.querySelector('.banner-hd');

// banner.addEventListener('click', function(){
//     smoothScroll('.site-banner', 1000);
// });

// var footer = document.querySelector('.contacts');

// footer.addEventListener('click', function(){
//     smoothScroll('.footer', 1000);
// });

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    }
  });
