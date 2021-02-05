
const cardImages = [
    {
        name: 'blastoise',
        img: 'images/blastoise.jpg'
    },
    {
        name: 'blastoise',
        img: 'images/blastoise.jpg'
    },
    {
        name: 'bulbasaur',
        img: 'images/bulbasaur.png'
    },
    {
        name: 'bulbasaur',
        img: 'images/bulbasaur.png'
    },
    {
        name: 'charmander',
        img: 'images/charmander.jpg'
    },
    {
        name: 'charmander',
        img: 'images/charmander.jpg'
    },
    {
        name: 'pikachu',
        img: 'images/pikachu.jpg'
    },
    {
        name: 'pikachu',
        img: 'images/pikachu.jpg'
    },
    {
        name: 'squirtle',
        img: 'images/Squirtle.jpg'
    },
    {
        name: 'squirtle',
        img: 'images/Squirtle.jpg'
    },
    {
        name: 'wartortle',
        img: 'images/Wartortle.jpg'
    },
    {
        name: 'wartortle',
        img: 'images/Wartortle.jpg'
    }
];

const body = document.querySelector("body");
const header1 = document.createElement('h1')
header1.textContent = "Gotta catch em all!"
body.append(header1);

cardImages.sort(()=> 0.5 - Math.random());

const wrapper = document.querySelector('#wrapper');
let chosenCards = [];
let chosenCardsID = [];
let winningCards = [];


function gameCards() {
    for (let i = 0; i <= cardImages.length-1; i++) {
        var imgCard = document.createElement('img')
        imgCard.setAttribute('src', 'images/cover.jpg')
        imgCard.setAttribute('data-id', i)
        imgCard.addEventListener('click', cardFlip)
        imgCard.className = 'pokeCards'
        wrapper.appendChild(imgCard)
    }
}
gameCards();

//matching
function matching(){
    let imgCards = document.querySelectorAll('img');
    const elementOne = chosenCardsID[0];
    const elementTwo = chosenCardsID[1];
    if(chosenCards[0] === chosenCards[1]){
        alert('Good catch!');
        imgCards[elementOne].setAttribute('src', 'images/pokeball.png');
        imgCards[elementTwo].setAttribute('src', 'images/pokeball.png');
        winningCards.push(chosenCards);
    } else{
        alert("Sorry, give it another go!");
        imgCards[elementOne].setAttribute('src', 'images/cover.jpg');
        imgCards[elementTwo].setAttribute('src', 'images/cover.jpg');
    }
    chosenCards = [];
    chosenCardsID = [];
    if (winningCards.length === cardImages.length/2){
        alert('You caught them all! You are a master Pokemon!')
    }
}

//flip cards
function cardFlip (){
    let dataId = this.getAttribute('data-id');
    chosenCards.push(cardImages[dataId].name);
    chosenCardsID.push(dataId);
    this.setAttribute('src', cardImages[dataId].img);
    if(chosenCards.length === 2){
        setTimeout(matching, 500);
    }
}

