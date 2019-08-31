/*
@author Diemisom Melo
@company EstaleiroUX/Banpará

A K-NN implementation in Javascript to find the nearest person by cultural preferences and demographic information.
The distance function is an empiric abstraction that showed good preliminaries results.
Data preprocessing was made by Mr. Vinicius Freitas.
*/
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
        data.forEach((element, i) => {
            resposta[i] = distancia(person, element);
        });
        sortWithIndeces(resposta);
        resp = Array(10);
        for(i=0; i<10; i++){
            resp[i] = data[resposta.sortIndices[i]];
        }
        respostaG = resp;
    });
    return respostaG;
}

//Thanks to Mr. Dave Aaron Smith from Stackoverflow: https://stackoverflow.com/questions/3730510/javascript-sort-array-and-return-an-array-of-indicies-that-indicates-the-positi
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
    resultado += distanciaGosto(pessoaA.s, pessoaB.s, 1);//21
    resultado += distanciaGosto(pessoaA.m, pessoaB.m, 1);//23
    resultado += distanciaGosto(pessoaA.b, pessoaB.b, 2);//34
    return resultado;
}

function distanciaGosto(a, b, peso){
    var resposta = 0;
    a.forEach( (s, i) => {
        if(s!=b[i])
            resposta+=peso;
    });
    return resposta;
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
    return 3;
}

function distanciaIdade(pidade, eidade){
    var dif = Math.abs(pidade - eidade);
    if(dif==0){
        return 0;
    }
    if ( dif<3){//3 anos de diferença
        return 0.1;
    }
    else if(dif<5){
        return 0.5;
    }
    else if(dif<8){
        return 1;
    }
    else if(dif<11){
        return 2;
    }
    else if(dif<20){
        return 4;
    }
    else if(dif<35){
        return 6;
    }
    else
        return 8;
}

function iniciaRespostas(x){
    var a = [];
    for (var i = 0; i < x; i++) {
        a.push(Infinity);
    }
    return a;
}