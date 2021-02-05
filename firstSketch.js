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

 const imagemCover = 'images/cover.jpg'; //base deck cover image
 cardImages.sort(()=> 0.5 - Math.random());
 distributeCards();

 function distributeCards() {
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
         t.o = cardImages[i]; //reference object in cardImages
         t.p = u //HTML ID reference

         items.push(t);
         u++;
     }
     //console.log(items);

     //Create html
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

     //search for the object card from the HTML id
     var g = items.find(c => c.p === v);
     //console.log(g);

     var x = document.getElementById(v);
     //console.log(x);
     //console.log(getElementByCard(g.o.id));

     //x.src = getElementByCard(g.o.id).img;

     //if image has a pokemon image, put the cover instead
     if (hasClass(x, 'select')) {
         x.src = imagemCover;
         x.classList.remove("select");
         //LimpaId()
     } else {
         //put the pokemon image
         x.src = getElementByCard(g.o.id).img;
         x.className += ' select';
         toCompare(g.o.id, v);
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

 function toCompare(v, a) {
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
     //console.log(canCompare());
     //console.log(dados);

     if (canCompare()) {
         var b = matchComparation(dados);
         if (b) {
             alert('Good catch!');
             LimpaId();
         } else {
             alert('Too bad, give it another go!');
             LimparComparacao();
         }
     }
 }

 function canCompare() {
     return (dados.compareA > 0 && dados.compareB > 0);
 }

 function matchComparation(a) {
     //console.log(dados);
     //if (dados.compareA === "" || dados.compareB === "") return false;

     // console.log(a.compareA  );
     //console.log(a.compareB);

     var cardOne = getElementByCard(a.compareA);
     var cardTwo = getElementByCard(a.compareB);

     //console.log(cardOne !== "undefined");
     //console.log(cardTwo !== "undefined");

     return (cardOne.id === cardTwo.id);
 }