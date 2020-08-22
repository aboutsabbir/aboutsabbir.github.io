// sticky navbar on scroll
$(window).scroll(function () {
    //if you hard code, then use console
    //.log to determine when you want the 
    //nav bar to stick.  
    //console.log($(window).scrollTop())
  if ($(window).scrollTop() > 50) {
    $('#navTop').addClass('navbar-fixed');
  }
  if ($(window).scrollTop() < 50) {
    $('#navTop').removeClass('navbar-fixed');
  }
});

// change active navbar link on click
var selector = '.navbar li';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});

//chnge nav link color on scroll
$('#menu').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
});
