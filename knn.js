$(document).ready(function() {
    
});
$("#execute").click(knn);

function knn(){
    console.log('foi');
    var pessoa = '';
    tudo = $.getJSON( "dadosTratados.json", function( data ) {
        var resposta = iniciaRespostas(349);
        data.forEach(element => {
            //Calcula a diferença de pessoa com element
            //armazena em um array as respostas
            //ordena o array
        });

      //escreve o array
      //$( "#dados" ).html( JSON.stringify(data));
    });

    
}

function iniciaRespostas(x){
    var a = [];
    for (var i = 0; i < x; i++) {
        a.push(Infinity);
    }
    return a;
}