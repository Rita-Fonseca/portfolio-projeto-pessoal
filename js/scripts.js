$(document).ready(function(){

//mudar opacidade quando faz scroll
  $(window).scroll(function() {
    if ($(document).scrollTop() > 10) {
      $("#about").addClass("transparente");
    } else {
      $("#about").removeClass("transparente");
    }
  })


})
