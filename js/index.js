var h = window.innerHeight;
  $(".coverimg").css("height", h);
$(document).ready(function(){
  //Carousel size
  



  //Navbar colors
  $(".navbar").toggleClass("navbar-default",false);
  $(".navbar").toggleClass("navbar-inverse",true);
  var scroll_start = 0;
  var startchange = $('#startchange');
  var offset = startchange.offset();
  if (startchange.length){
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
        //$(".navbar-default").css('background-color', '#ffffff');
        $(".navbar").toggleClass("navbar-default",true);
        $(".navbar").toggleClass("navbar-inverse",false);
      } else {
        $(".navbar").toggleClass("navbar-default",false);
        $(".navbar").toggleClass("navbar-inverse",true);
      }
    });
  }

  $(window).resize(function(){
    //Carousel size
    h = window.innerHeight;
    $(".coverimg").css("height", h);
  

  });


});
