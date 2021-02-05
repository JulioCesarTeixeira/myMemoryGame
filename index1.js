 const cardImages = [{
         name: 'blastoise',
         img: 'images/blastoise.jpg',
         id: 1
     }

     ,
     {
         name: 'bulbasaur',
         img: 'images/bulbasaur.png',
         id: 2
     }

     ,
     {
         name: 'charmander',
         img: 'images/charmander.jpg',
         id: 3
     }

     ,
     {
         name: 'pikachu',
         img: 'images/pikachu.jpg',
         id: 4
     }

     ,
     {
         name: 'squirtle',
         img: 'images/Squirtle.jpg',
         id: 5
     }

     ,
     {
         name: 'wartortle',
         img: 'images/Wartortle.jpg',
         id: 6
     }

 ]

 var items = [];

 var dados = {};
 dados.compareA = 0; //ID do cardImages
 dados.compareB = 0; //ID do cardImages
 dados.idA = 0; //ID do HTML
 dados.idB = 0; //ID do HTML

 const imagemCover = 'images/cover.jpg'; //Imagem base do card fechado

 shuffleImgs();

 function shuffleImgs() {
     var u = 0;
     for (let i = 0; i < cardImages.length; i++) {
         var t = {};
         t.o = cardImages[i];
         t.p = u

         items.push(t);
         u++;
     }
     for (let i = 0; i < cardImages.length; i++) {
         var t = {};
         t.o = cardImages[i]; //Objeto de referencia do Card Images
         t.p = u //Id de referencia no HTML

         items.push(t);
         u++;
     }
     //console.log(items);


     //Crio o html
     for (let i = 0; i < items.length; i++) {
         cardImgs(items[i].p);
     }
 }

 function cardImgs(i) {
     let imgCard = document.createElement('img');
     imgCard.setAttribute('src', imagemCover);
     //imgCard.setAttribute('src', i.img);
     imgCard.setAttribute('id', i);
     imgCard.setAttribute('onclick', 'atualizar(' + i + ')');
     document.getElementById('wrapper').append(imgCard);
     imgCard.className = 'pokeCards';
 }

 function getElementByCard(v) {
     return cardImages.find(e => e.id === v) || '';
 }

 function atualizar(v) {

     //Busca a  partir do id do html, o objeto(card) de referencia
     var g = items.find(c => c.p === v);
     //console.log(g);

     var x = document.getElementById(v);
     //console.log(x);
     //console.log(getElementByCard(g.o.id));

     //x.src = getElementByCard(g.o.id).img;

     //Se ja tem imagem do pokemon, coloca a imagem cover
     if (hasClass(x, 'select')) {
         x.src = imagemCover;
         x.classList.remove("select");
         //LimpaId()
     } else {
         //coloca a imagem do pokemon
         x.src = getElementByCard(g.o.id).img;
         x.className += ' select';
         Comparar(g.o.id, v);
     }
 }

 function hasClass(element, className) {
     return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
 }

 function LimparComparacao() {

     document.getElementById(dados.idA).src = imagemCover;
     document.getElementById(dados.idB).src = imagemCover;
     LimpaId();
 }

 function LimpaId() {
     dados.compareA = 0;
     dados.compareB = 0;
     dados.idA = 0;
     dados.idB = 0;
 }

 function Comparar(v, a) {
     //console.log(v);

     //valida se tem o primeiro item preenchido
     if (dados.compareA === 0) {
         dados.compareA = v;
         dados.idA = a;
     } else {
         //atualiza tambem o segundo
         dados.compareB = v;
         dados.idB = a;
     }
     //console.log(PodeComparar());
     //console.log(dados);

     if (PodeComparar()) {
         var b = ComparacaoMatch(dados);
         if (b) {
             alert('BOA');
             LimpaId();
         } else {
             alert('Deu ruim');
             LimparComparacao();
         }
     }
 }

 function PodeComparar() {
     return (dados.compareA > 0 && dados.compareB > 0);
 }

 function ComparacaoMatch(a) {
     //console.log(dados);
     //if (dados.compareA === "" || dados.compareB === "") return false;

     // console.log(a.compareA);
     //console.log(a.compareB);

     var el1 = getElementByCard(a.compareA);
     var el2 = getElementByCard(a.compareB);

     //console.log(el1 !== "undefined");
     //console.log(el2 !== "undefined");

     return (el1.id === el2.id);
 }