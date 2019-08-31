var pessoa = {"idade":30,"genero":0,"escolaridade":2,"r":"Sapiens","p":"Saga Harry Potter , Sapiens ","s":[false,false,false,true,true,true,true,false,false,false,false,false,false,false,false,true,false,true,true,false,true],"m":[true,true,false,false,true,true,false,false,true,false,true,false,false,false,true,true,true,true,false,true,false,true,true],"b":[false,false,false,false,true,false,true,true,true,true,false,false,false,false,true,false,true,false,false,false,false,true,false,false,false,true,false,false,false,false,false,false,false,true]};
$(document).ready(function() {
    $("#pessoa").html(JSON.stringify(pessoa));
});

async function knnTest(person){
    var x = await myKnn(person);
    limpar(x);
    console.log(x);
    $("#dados").html(JSON.stringify(x));
}

function limpar(x){
    x.forEach(e =>{
        delete(e.b);
        delete(e.s);
        delete(e.m);
        delete(e.genero);
        delete(e.escolaridade);
        delete(e.idade);
    });
}
async function knn(person){
    var x = await myKnn(person);
    limpar(x);
    return x;
}

async function myKnn(person){
    var respostaG = [];
    await $.getJSON( "dadosTratados2.json", function( data ) {
        var resposta = iniciaRespostas(349);
        console.log(person);
        data.forEach((element, i) => {
            resposta[i] = distancia(person, element);
        });
        sortWithIndeces(resposta);
        console.log(resposta.sortIndices.join(","));
        resp = Array(10);
        for(i=0; i<10; i++){
            resp[i] = data[resposta.sortIndices[i]];
        }
        console.log(resp);
        respostaG = resp;
    });
    return respostaG;
}

function sortWithIndeces(toSort) {
    for (var i = 0; i < toSort.length; i++) {
      toSort[i] = [toSort[i], i];
    }
    toSort.sort(function(left, right) {
      return left[0] < right[0] ? -1 : 1;
    });
    toSort.sortIndices = [];
    for (var j = 0; j < toSort.length; j++) {
      toSort.sortIndices.push(toSort[j][1]);
      toSort[j] = toSort[j][0];
    }
    return toSort;
  }

function distancia(pessoaA, pessoaB){
    var resultado = 0;
    resultado += distanciaIdade(pessoaA.idade, pessoaB.idade);
    resultado += distanciaGenero(pessoaA.genero, pessoaB.genero);
    resultado += distanciaEscolaridade(pessoaA.escolaridade, pessoaB.escolaridade);
    resultado += distanciaGosto(pessoaA.s, pessoaB.s);//21
    resultado += distanciaGosto(pessoaA.m, pessoaB.m);//23
    resultado += distanciaGosto(pessoaA.b, pessoaB.b);//34
    return resultado;
}

function distanciaGosto(a, b){
    var resposta = 0;
    a.forEach( (s, i) => {
        if(s!=b[i])
            resposta+=1;
    });
    return resposta;
}
function distanciaFilmes(moviesA, moviesB){
    return 0;
}
function distanciaLivros(booksA, booksB){
    return 0;
}

function distanciaEscolaridade(escolaridadeA, escolaridadeB){
    var dif = Math.abs(escolaridadeA - escolaridadeB);
    if ( dif==0){
        return 0;
    }
    if ( dif==1){
        return 0.5;
    }    
    if ( dif==2){
        return 1;
    }
    if ( dif==3){
        return 2;
    }
    if ( dif==4){
        return 3;
    }
    else
        return 5;
}

function distanciaGenero(generoA, generoB){
    if(generoA==generoB)
        return 0;
    return 2;
}

function distanciaIdade(pidade, eidade){
    var dif = Math.abs(pidade - eidade);
    if(dif==0){
        return 0;
    }
    if ( dif<3){//3 anos de diferença
        return 0.1;
    }
    else if(dif<10){
        return 0.5
    }
    else
        return 1.5;
}

function iniciaRespostas(x){
    var a = [];
    for (var i = 0; i < x; i++) {
        a.push(Infinity);
    }
    return a;
}