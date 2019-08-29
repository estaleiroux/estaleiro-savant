$(document).ready(function() {
  var tudo = [];
    tudo = $.getJSON( "dadosTratados.json", function( data ) {
      data.forEach(element => {
        delete(element.musica);
        delete(element.filme);
        delete(element.livros);
      });
      $( "#dados" ).html( JSON.stringify(data));
    });

});
