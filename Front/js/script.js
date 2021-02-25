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
    if($(window).scrollTop() > 50) {
        $(".navbar").addClass("active");
    } else {
       $(".navbar").removeClass("active");
    }
});
