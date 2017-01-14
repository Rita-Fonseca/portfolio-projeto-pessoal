$(document).ready(function(){

  $("#sombra").hide();
  $("#projeto1").hide();


  $("#fechar").click(function(){
        $("#projeto1").hide();
        $("#sombra").hide();
    });
    $("#mostrar").click(function(){
        $("#projeto1").show();
        $("#sombra").show();
    });

})
