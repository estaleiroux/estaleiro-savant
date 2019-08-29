$(document).ready(function() {
    
});
$("#execute").click(knn);

function knn(){
    console.log('foi');
    var pessoa = {"idade":47,"genero":0,"escolaridade":1,"recente":"Pai Rico, Pai Pobre","preferido":"O segredo de Luiza","s":[false,true,false,false,false,false,false,true,false,true,false,false,true,true,false,false,false,false,true,false,false],"m":[true,true,false,false,true,true,true,true,true,false,true,true,false,true,true,true,true,true,false,false,false,false,false],"b":[false,false,false,false,false,false,false,true,false,true,false,true,false,true,true,true,false,false,true,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false]};
    tudo = $.getJSON( "dadosTratados2.json", function( data ) {
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

function distancia(pessoa, elemento){
    return 0;
}

function iniciaRespostas(x){
    var a = [];
    for (var i = 0; i < x; i++) {
        a.push(Infinity);
    }
    return a;
}