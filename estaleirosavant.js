$(document).ready(function() {
  var tudo = [];
    tudo = $.getJSON( "data.json", function( data ) {
      processMyData(data);
      console.log(data);
      $( "#dados" ).html( JSON.stringify(tudo));
        return false;
      /*  var items = [];
        $.each( data, function( key, val ) {//key = indice, val=objeto
          console.log(val);
          items.push( "<li id='" + key.idade + "'>" + val.idade + "</li>" );
        });
        $( "<ul/>", {
          html: items.join( "" )
        }).appendTo( "body" );
        */
      });
    //console.log(tudo);

      function calculaSaida(){
        console.log($( "#idade" ).value);
        console.log(tudo);
        return false;
      }

      function processMovies(element){
        var movies = element.filme.split(',');
        movies.forEach( movie =>{
            if(movie.trim() =='Ação')
              element.m[0] = true; 
            else if(movie.trim() =='Aventura')
              element.m[1] = true; 
            else  if(movie.trim() =='Cinema de arte')
              element.m[2] = true; 
            else if(movie.trim() =='Chanchada')
              element.m[3] = true; 
            else if(movie.trim() =='Cinema catástrofe')
              element.m[4] = true; 
            else if(movie.trim() =='Comédia')
              element.m[5] = true; 
            else if(movie.trim() =='Comédia romântica')
              element.m[6] = true; 
            else if(movie.trim() =='Comédia dramática')
              element.m[7] = true; 
            else if(movie.trim() =='Comédia de ação')
              element.m[8] = true; 
            else if(movie.trim() =='Dança')
              element.m[9] = true; 
            else if(movie.trim() =='Documentário')
              element.m[10] = true; 
            else if(movie.trim() =='Docuficção')
              element.m[11] = true; 
            else if(movie.trim() =='Drama')
              element.m[12] = true; 
            else if(movie.trim() =='Espionagem')
              element.m[13] = true; 
            else if(movie.trim() =='Faroeste (ou western)')
              element.m[14] = true; 
            else if(movie.trim() =='Fantasia científica')
              element.m[15] = true; 
            else if(movie.trim() =='Ficção científica')
              element.m[16] = true; 
            else if(movie.trim() =='Filmes de guerra')
              element.m[17] = true; 
            else if(movie.trim() =='Musical')
              element.m[18] = true; 
            else if(movie.trim() =='Filme policial')
              element.m[19] = true; 
            else if(movie.trim() =='Romance')
              element.m[20] = true; 
            else if(movie.trim() =='Suspense')
              element.m[21] = true; 
            else if(movie.trim() =='Terror')
              element.m[22] = true; 
          });
      }

      function processSongs(element){
        var songs = element.musica.split(',');
        songs.forEach(song => {
          if(song.trim() =='Axé')
            element.s[0] = true;
          else if(song.trim() =='Blues')
            element.s[1] = true;
          else if(song.trim() =='Brega / Bregas Marcantes')
            element.s[2] = true;
          else if(song.trim() =='Country')
            element.s[3] = true;
          else if(song.trim() =='Eletrônica')
            element.s[4] = true;
          else if(song.trim() =='Forró')
            element.s[5] = true;
          else if(song.trim() =='Funk')
            element.s[6] = true;
          else if(song.trim() =='Gospel')
            element.s[7] = true;
          else if(song.trim() =='Hip Hop')
            element.s[8] = true;
          else if(song.trim() =='Jazz')
            element.s[9] = true;
          else if(song.trim() =='Melody / Tecnomelody')
            element.s[10] = true;
          else if(song.trim() =='Metal / Heavy Metal')
            element.s[11] = true;
          else if(song.trim() =='MPB')
            element.s[12] = true;
          else if(song.trim() =='Música clássica')
            element.s[13] = true;
          else if(song.trim() =='Pagode')
            element.s[14] = true;
          else if(song.trim() =='Pop')
            element.s[15] = true;
          else if(song.trim() =='Rap')
            element.s[16] = true;
          else if(song.trim() =='Reggae')
            element.s[17] = true;
          else if(song.trim() =='Rock')
            element.s[18] = true;
          else if(song.trim() =='Samba')
            element.s[19] = true;
          else if(song.trim() =='Sertanejo')
            element.s[20] = true;
        });
      }

      function processBooks(element){
        var books = element.livros.split(',');
        books.forEach(book =>{
          if(book.trim() =='Adolescente e Jovem Adulto')
            element.b[0] = true; 
          else if(book.trim() =='Artes e fotografia')
            element.b[1] = true; 
          else if(book.trim() =='Artesanato, Hobbies & Casa')
            element.b[2] = true; 
          else if(book.trim() =='Auto-ajuda')
            element.b[3] = true; 
          else if(book.trim() =='Biografias e Memórias')
            element.b[4] = true; 
          else if(book.trim() =='Calendários')
            element.b[5] = true; 
          else if(book.trim() =='Ciência matemática')
            element.b[6] = true; 
          else if(book.trim() =='Computadores e Tecnologia')
            element.b[7] = true; 
          else if(book.trim() =='Criação de Filhos & Relacionamentos')
            element.b[8] = true; 
          else if(book.trim() =='Educação e Ensino')
            element.b[9] = true; 
          else if(book.trim() =='Educação Financeira / Finanças')
            element.b[10] = true; 
          else if(book.trim() =='Empreendedorismo')
            element.b[11] = true; 
          else if(book.trim() =='Engenharia e Transportes')
            element.b[12] = true; 
          else if(book.trim() =='Esportes e Ar Livre')
            element.b[13] = true; 
          else if(book.trim() =='Ficção científica e fantasia')
            element.b[14] = true; 
          else if(book.trim() =='História')
            element.b[15] = true; 
          else if(book.trim() =='Humor e Entretenimento')
            element.b[16] = true; 
          else if(book.trim() =='Lei')
            element.b[17] = true; 
          else if(book.trim() =='Literatura e ficção')
            element.b[18] = true; 
          else if(book.trim() =='Livros de culinária, comida e vinho')
            element.b[19] = true; 
          else if(book.trim() =='Livros e Bíblias Cristãs')
            element.b[20] = true; 
          else if(book.trim() =='Livros infantis')
            element.b[21] = true; 
          else if(book.trim() =='Livros Lésbicas, Gays, Bissexuais e Transgêneros')
            element.b[22] = true; 
          else if(book.trim() =='Livros médicos')
            element.b[23] = true; 
          else if(book.trim() =='Mistério, suspense e suspense')
            element.b[24] = true; 
          else if(book.trim() =='Negócios e Dinheiro')
            element.b[25] = true; 
          else if(book.trim() =='Política e Ciências Sociais')
            element.b[26] = true; 
          else if(book.trim() =='Preparação para teste')
            element.b[27] = true; 
          else if(book.trim() =='Quadrinhos e romances gráficos')
            element.b[28] = true; 
          else if(book.trim() =='Referência')
            element.b[29] = true; 
          else if(book.trim() =='Religião e Espiritualidade')
            element.b[30] = true; 
          else if(book.trim() =='Romance')
            element.b[31] = true; 
          else if(book.trim() =='Saúde, Fitness e Dieta')
            element.b[32] = true; 
          else if(book.trim() =='Viagem')
            element.b[33] = true; 
        });
      }

      function processMyData(data){
        data.forEach(element => {
          element.s = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];//s song musica
          element.m = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];//m movie filme
          element.b = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];//b book livro
          processMovies(element);
          processBooks(element);
          processSongs(element);
        });

      }
});
