var resultadoGlobal = [];
var contador=0;
var musicas = ["Axé"
    , "Blues"
    , "Brega , Bregas Marcantes"
    , "Country"
    , "Eletrônica"
    , "Forró"
    , "Funk"
    , "Gospel"
    , "Hip Hop"
    , "Jazz"
    , "Melody , Tecnomelody"
    , "Metal , Heavy Metal"
    , "MPB"
    , "Música clássica"
    , "Pagode"
    , "Pop"
    , "Rap"
    , "Reggae"
    , "Rock"
    , "Samba"
    , "Sertanejo"
];

var cinemas = [
    "Ação"
    , "Aventura"
    , "Cinema de arte"
    , "Chanchada"
    , "Cinema catástrofe"
    , "Comédia"
    , "Comédia romântica"
    , "Comédia dramática"
    , "Comédia de ação"
    , "Dança"
    , "Documentário"
    , "Docuficção"
    , "Drama"
    , "Espionagem"
    , "Faroeste (ou western)"
    , "Fantasia científica"
    , "Ficção científica"
    , "Filmes de guerra"
    , "Musical"
    , "Filme policial"
    , "Romance"
    , "Suspense"
    , "Terror"
];

var literarios = [
    "Adolescente e Jovem Adulto"
    , "Artes e fotografia"
    , "Artesanato, Hobbies & Casa"
    , "Auto-ajuda"
    , "Biografias e Memórias"
    , "Calendários"
    , "Ciência matemática"
    , "Computadores e Tecnologia"
    , "Criação de Filhos & Relacionamentos"
    , "Educação e Ensino"
    , "Educação Financeira , Finanças"
    , "Empreendedorismo"
    , "Engenharia e Transportes"
    , "Esportes e Ar Livre"
    , "Ficção científica e fantasia"
    , "História"
    , "Humor e Entretenimento"
    , "Lei"
    , "Literatura e ficção"
    , "Livros de culinária, comida e vinho"
    , "Livros e Bíblias Cristãs"
    , "Livros infantis"
    , "Livros Lésbicas, Gays, Bissexuais e Transgêneros"
    , "Livros médicos"
    , "Mistério, suspense e suspense"
    , "Negócios e Dinheiro"
    , "Política e Ciências Sociais"
    , "Preparação para teste"
    , "Quadrinhos e romances gráficos"
    , "Referência"
    , "Religião e Espiritualidade"
    , "Romance"
    , "Saúde, Fitness e Dieta"
    , "Viagem"
];

var escolaridades = [
    "Ensino Médio"
    , "Ensino Superior Incompleto"
    , "Ensino Superior Completo"
    , "Especialização Completa"
    , "Mestrado Completo"
    , "Doutorado Completo"
]

function defineSessaoCheckBox(nome, checks, icone) {
    var tipo = "checkbox";
    var sessao = $('#' + nome);

    var row = $(`<div class="row" >
        </div>
      `);
    sessao.append(row);
    checks.forEach((check, index) => {
        var col = $(`<div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 " />`);
        var html = `
                <div class="choice ${tipo} ${nome} " data-toggle="wizard-${tipo}">
                    <input type="${tipo}" name="${nome}" class="${nome}" data-index="${index}"  >
                    <div class="icon">
                        <i class="${icone}"></i>
                    </div>
                        <label class="text-icon">${check}</label> 
                </div>
           `;
        col.html(html);
        row.append(col);
    });
}

function defineSessaoRadio(nome, checks, icone) {
    var sessao = $('#' + nome);
    var row = $(`<div class="row" >
        </div>
      `);
    sessao.append(row);
    checks.forEach((check, index) => {
        var col = $(`<div class="col-lg-3 col-md-3 col-sm-4 col-xs-6 " />`);

        var radioButtonPrimeiro = index == 0;
        var checkedPadrao = radioButtonPrimeiro ? 'checked' : '';
        var activePadrao = radioButtonPrimeiro ? 'active' : '';
        var tipo = "radio";

        var html = `
                <div class="choice ${tipo} ${nome} ${activePadrao}" data-toggle="wizard-${tipo}">
                    <input type="${tipo}" name="${nome}" class="${nome}" data-index="${index}"  ${checkedPadrao}>
                    <div class="icon">
                        <i class="${icone}"></i>
                    </div>
                        <label class="text-icon">${check}</label> 
                </div>
           `;
        col.html(html);
        row.append(col);
    });
}




defineSessaoCheckBox('gostomusical', musicas, 'fa fa-music');
defineSessaoCheckBox('cinema', cinemas, 'fa fa-play-circle');
defineSessaoCheckBox('literario', literarios, 'fa fa-book');
defineSessaoRadio('escolaridade', escolaridades, 'fa fa-university');

var pessoaNow = {};
async function envia() {
    var obj = {};
    var nome = $('input[name="nome"]').val();
    $('#textoResposta').html(nome+', acredito que você vai gostar desse livro:');
    obj.idade = $('input[name="idade"]').val();
    obj.genero = $(`[type="radio"][name="genero"][checked]`).val();
    obj.escolaridade = $(`[type="radio"][name="escolaridade"][checked]`).val();
    obj.s = getArrayBooleanCheckboxs($(`[type="checkbox"][name="gostomusical"]`));
    obj.m = getArrayBooleanCheckboxs($(`[type="checkbox"][name="cinema"]`));
    obj.b = getArrayBooleanCheckboxs($(`[type="checkbox"][name="literario"]`));
    //console.log('Dados', obj);
    //resultado = knnMock(obj);
    resultado = await knn(obj);
    pessoaNow = obj;
    //console.log(resultado);

    $('.card.wizard-card').removeClass('opacity-1');

    $('body').addClass('bg-loading-book');
    $('.card.wizard-card').addClass('opacity-0');

   
    $('.card-form').hide();
    
    resultado.forEach(resultado => {
        if(resultado.r && !resultado.ri)
            resultado.ri = 'https://cdn.pixabay.com/photo/2013/07/12/15/20/author-149694_640.png';
        if(resultado.p && !resultado.pi)
            resultado.pi = 'https://cdn.pixabay.com/photo/2013/07/12/15/20/author-149694_640.png';
        var linhaResultadoR = $(`<div class="row linha-resultado">
                        <div class="col-sm-6 col-xs-6 ">
                            <br><br><br><h6 align="center"><a href="javascript:pesquisa('${resultado.r}')" >${resultado.r}</a></h6>
                        </div>
                        <div class="col-sm-6 col-xs-6 ">
                            <img class="img-resultado img-responsive" src="${resultado.ri}" onclick="pesquisa('${resultado.r}')" />
                        </div>
                    </div>`
        );
        var linhaResultadoP = $(`<div class="row linha-resultado">
                        <div class="col-sm-6 col-xs-6 ">
                            <br><br><br><h6 align="center"><a href="javascript:pesquisa('${resultado.p}')" >${resultado.p}</a></h6>
                        </div>
                        <div class="col-sm-6 col-xs-6 ">
                            <img class="img-resultado img-responsive" src="${resultado.pi}"  onclick="pesquisa('${resultado.p}')"/>
                        </div>
                    </div>`
        );
        
        if(resultado.r)
            resultadoGlobal.push(linhaResultadoR);
        if(resultado.p)
            resultadoGlobal.push(linhaResultadoP);
        //$('.card-resultado').append(linhaResultadoR);
        //$('.card-resultado').append(linhaResultadoP);
    });
    $('.card-resultado').append('<p align="center" id="botoesGostei"><input type="button" class="btn btn-fill btn-success btn-wd" onclick="proximo(1)" value="Gostei, mostre mais um..."/>&nbsp;<input type="button" class="btn btn-fill btn-default btn-wd" onclick="proximo(2)" value="Não gostei, mostre outro..."/></p>');
    proximo(-1);

    setTimeout(() => {
        $('body').removeClass('bg-loading-book');
        $('.card.wizard-card').removeClass('opacity-0');
        $('.card.wizard-card').addClass('opacity-1');
        $('body').addClass('opacity-1');
        $('.card-resultado').show();

    }, 8000);
}

function pesquisa(termo){
    var url = 'https://www.google.com/search?q=Livro+';
    termo = termo.split(' ').join('+');
    url += termo;
    window.open(url);
}

function getArrayBooleanCheckboxs(checkboxs) {
    var array = [];
    $(checkboxs).each(function (icheck, check) {
        var index = $(check).data('index');
        index = parseInt(index);
        var valor = check.checked;
        array[index] = valor;
    });
    return array;
}

function proximo(opiniao){
    if(opiniao<0)	
        $.post( "http://www.redecel.com/verolivro.php", { objeto: JSON.stringify(resultadoGlobal[contador].prop('outerHTML')),nome: JSON.stringify(pessoaNow), gostou: opiniao } );
    else
        $.post( "http://www.redecel.com/verolivro.php", { objeto: JSON.stringify(resultadoGlobal[contador-1].prop('outerHTML')),nome: JSON.stringify(pessoaNow), gostou: opiniao } );
    if(resultadoGlobal[contador]){
        $('#results').html(resultadoGlobal[contador].prop('outerHTML'));
        contador++;
    }
    else{
        $('#botoesGostei').hide();
        $('#results').html('<div class="row linha-resultado"><div class="col-sm-6 col-xs-6 "><br><br><br><h6 align="center">Não tenho mais livros</h6></div><div class="col-sm-6 col-xs-6 "><img class="img-resultado img-responsive" src="https://imgflip.com/s/meme/Not-Bad-Obama.jpg" /></div></div>');
        $('.card-resultado').append('<a href="index.html"><p align="center" id="recomecar"><input type="button" class="btn btn-fill btn-success btn-wd" value="Recomeçar"/></p></a>');
    }
}