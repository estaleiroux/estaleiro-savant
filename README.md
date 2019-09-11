# VER-O-LIVRO
## Recomendador de Livros utilizando IA

# Introdução
O Ver-O-Livro foi concebido pelo EstaleiroUX, Laboratório de Inovação do Banpará, para ser apresentado ao público da XXIII Feira Pan Amazônica do Livro e das Multivozes, em Belém. O objetivo da iniciativa foi de criar uma ferramenta em quatro dias que pudesse demonstrar um pouco do fluxo de trabalho e dos resultados produzidos pelo Laboratório, utilizando tecnologias e princípios atuais de desenvolvimento de sistemas e inovação.

Assim, optou-se por criar algo que uni-se: Inteligência Artificial, Desenvolvimento de Software, técnicas de DevOps e que fosse aderente aos interesses do público da Feira do Livro. A ideia que mostrou-se alinhada aos objetivos foi: "Construir um sistema de recomendação de livros com base em Inteligência Artificial".

O plano de ação para o projeto foi definido conforme abaixo: (@dcarlospa)
- 1. Obter um conjunto de dados na WEB; (@patriciadaibes e @vrfreitas)
- 2. Obter dados via Questionário no Google Forms, unindo com o dataset da web; (@vrfreitas)
- 3. Enviar e-mail para todos os funcionários do Banco, convidando-os a participar da pesquisa; (@patriciadaibes)
- 4. Definir o algoritmo de Machine Learning (ML) que seria utilizado e iniciar a implementação; (@dcarlospa)
- 5. Iniciar o desenvolvimento do Frontend, de preferência reutilizando algum template de código aberto; (@ewertom-moraes)
- 6. Consolidar o Conjunto de Dados com base no resultado da pesquisa; (@vrfreitas)
- 7. Treinar e testar o modelo de ML escolhido; (@dcarlospa)
- 8. Integrar o modelo com o frontend; (@dcarlospa e @ewertom-moraes)
- 9. Implantar em um servidor WEB; (@ygorduraes)

# Desenvolvimento
Pesquisamos na WEB e não encontramos um conjunto de dados que pudesse ser facilmente utilizado no projeto. Assim, decidimos que criaríamos o nosso próprio _dataset_, utilizando o google forms (por ser gratuito e de fácil manipulação) e contando com a boa vontade de pelo menos 10% dos funcionários do Banpará. 


## Criação do Dataset
A equipe de projeto refletiu sobre quais variáveis possuem maior correlação com a escolha de um livro e (empiricamente) chegou à seguinte lista de atributos que deveriam compor o conjunto de dados, e criou o questionário no Google Forms conforme abaixo:
- Gênero (Marcar uma opção entre Masculino, Feminino ou Outrxs);
- Idade (Resposta numérica);
- Escolaridade (Marcar uma opção entre Ensino Médio, Ensino Superior Incompleto, Ensino Superior Completo, Especialização Completa, Mestrado Completo e Doutorado Completo);
- Gosto musical (21 Opções, podendo marcar várias);
- Gosto cinematográfico (23 Opções, podendo marcar várias); e
- Gosto literário (34 Opções, podendo marcar várias);
 
 Além dessas variáveis, o formulário possuía duas perguntas finais: _**"Quais seus livros preferidos de todos os tempos?"**_ e _**"Quais livros você adiquiriu recentemente e gostou?"**_. Essas duas perguntas foram elaboradas para servirem de variáveis de saída do Modelo. 

A @patriciadaibes construiu um copy muito envolvente e conseguimos dobrar a meta :), que nos garantiu mais de 400 respostas ao formulário. 

## Definição do Modelo de Machine Learning
O @dcarlospa decidiu que utilizaríamos o algoritmo KNN (K Vizinhos Mais Próximos), por ser de fácil implementação e ser apropriado ao problema. Assim, quando um usuário acessar a ferramenta e inserir os seus dados (6 variáveis de entrada) o KNN busca o vizinho mais próximo a, ou seja, a pessoa mais "parecida". Como resultado o sistema apresentaria uma lista de livros, um por um, ordenando-os de acordo com a semelhança entre as pessoas e dando a opção de o usuário avaliar a sugestão, clicando em _**"Gostei"**_ ou _**"Não Gostei"**_.

### Definição do frontend
Paralelamente, o @ewertom-moraes estava escolhendo uma lista de templates HTML5+CSS3+JS que pudessem ser utilizados para integrar com o modelo de IA. Após algumas conversas e mais de 20 templates excelentes, optamos pelo meio termo entre o **extremamente belo** e o **extremamente fácil de reutilizar**. 

Assim, utilizamos o tema <a ref="https://codepen.io/creativetim/pen/EgVBXa?editors=1000" target="_blank">Material Bootstrap Wizard</a> por <a href="https://codepen.io" target="_blank">Creative Tim</a> da Romênia.

### Consolidação da Base de Dados

O @vrfreitas teve o maior trabalho, pois foi responsável por consolidar a base de dados da pesquisa. Como as respostas estavam em texto livre, o tempo que sobrava não era suficiente para fazer um script que trata-se os dados automaticamente. Assim, ele teve que manualmente tratar as mais de 400 respotas, eliminando 50 delas. 
O Conjunto de Dados final possui 620 amostras de treino. Algumas pessoas foram dupplicadas, pois indicaram mais de um livro preferido ou recente.
Além disso, ele teve que buscar no google, manualmente, um link para a capa de cada livro :( 

### Você pode acessar a aplicação e testar pelo Link: https://estaleiroux.github.io/ver-o-livro/

# Conclusão
Participamos da Feira por dois dias, ondem apresentamos a solução e recebemos feedback positivos dos usuários, que ficaram impressionados com o nível de acerto da ferramenta.

Algumas pessoas já haviam lido alguns dos livros que o sistema recomendava e falaram que gostaram do livro.

Outras pessoas ficaram interessadas em adquirir os livros recomendados.

Em alguns casos, pessoas queriam adquirir um livro de um domínio específico e esperavam que a ferramenta recomendasse um livro dessa natureza, o que não acontecia.

No total, durante a Feira, foram recomendados **308 livros**. 
Desses, **210** foram marcados como **Gostei** e **98** como **Não Gostei**.

# Próximos Passos
Como o feedback dos usuários foi muito positivo, mesmo os que não gostaram de alguns dos livros recomendados gostaram da ferramenta, queremos continuar aprimorando o sistema, com as atualizações abaixo: 
- Usar os dados de avaliação/feedback para aumentar o dataset;
- Executar mais uma pesquisa pelo Google Forms para aumentar o dataset e a variação de livros;
- Migrar a escrita de avaliações para o Google Sheets;
- Implementar mais um algoritmo de Machine Learning para melhorar a qualidade da indicação;
