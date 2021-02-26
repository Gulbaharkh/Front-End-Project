document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'complete') {
        setTimeout(function(){
            document.getElementById('interactive');
           document.getElementById('preloader').style.visibility="hidden";
        },1000);
    }
  }
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 20) {
        $(".navbar").addClass("active");
    } else {
       $(".navbar").removeClass("active");
    }
});

$('.accordion__header').click(function(e) {
	e.preventDefault();
	var currentIsActive = $(this).hasClass('is-active');
	$(this).parent('.accordion').find('> *').removeClass('is-active');
	if(currentIsActive != 1) {
		$(this).addClass('is-active');
		$(this).next('.accordion__body').addClass('is-active');
	}
});