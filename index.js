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


//sort the array objects randomly
cardImages.sort(() => 0.5 - Math.random());

//selectors and variables
const results = document.querySelector('#Results');
const wrapper = document.querySelector('#wrapper');
let chosenCards = [];
let chosenCardsID = [];
let winningCards = [];

//first step - loop to create the img tags
function gameCards() {
    for (let i = 0; i <= cardImages.length - 1; i++) {
        let imgCard = document.createElement('img')
        imgCard.setAttribute('src', 'images/cover.jpg')
        imgCard.setAttribute('alt', 'memory card cover')
        imgCard.setAttribute('title', 'memory card cover')
        imgCard.setAttribute('data-id', i)
        imgCard.className = 'pokeCards'
        wrapper.appendChild(imgCard)
        imgCard.addEventListener('click', cardFlip)
    }
}

gameCards();

//matching cards.
function matching() {
    let imgCards = document.querySelectorAll('.pokeCards');
    const elementOne = chosenCardsID[0];
    const elementTwo = chosenCardsID[1];
    if (chosenCards[0] === chosenCards[1]) {
        imgCards[elementOne].setAttribute('src', 'images/pokeball.png');
        imgCards[elementTwo].setAttribute('src', 'images/pokeball.png');
        winningCards.push(chosenCards);
    } else {
        imgCards[elementOne].setAttribute('src', 'images/cover.jpg');
        imgCards[elementTwo].setAttribute('src', 'images/cover.jpg');
    }
    //after the matching, clear out both matching arrays
    chosenCards = [];
    chosenCardsID = [];
    if (winningCards.length < 2) {
        results.textContent = "You have captured " + winningCards.length + " Pokemon pair";
    } else {
        results.textContent = "You have captured " + winningCards.length + " Pokemon pairs"
    }
    if (winningCards.length === cardImages.length / 2) {
        alert('You caught them all! You are a master Pokemon!')
    }
}

//flip cards, push
function cardFlip() {
    if(chosenCards.length === 2){
        return;
    }
    let dataId = this.getAttribute('data-id');//'This' refers to imgCards. imgCards invokes the function cardFlip()
    if (dataId === chosenCardsID[0]){
        return;
    }
    chosenCards.push(cardImages[dataId].name);          //pushes the name of the selected 'data-ids' inside from cardImages arr to a new empty array
    chosenCardsID.push(dataId);                 //pushes the data-id from imgCard (this), to chosenCardsID empty array
    this.setAttribute('src', cardImages[dataId].img);           //set new src corresponding img src to 'flip' the card
    if (chosenCards.length === 2) {
        setTimeout(matching, 1000);          //the timeout prevents the matching function to act too quickly
    }                                               //without it, we get the prompt if matches or not before the card is flipped
}
//restart button, reset score turn back cards and shuffle them again
document.getElementById('restart').addEventListener('click', ()=>{
    document.querySelectorAll('.pokeCards').forEach((pokeCard)=>{
        pokeCard.setAttribute('src', 'images/cover.jpg');
    })
    winningCards.splice(0, winningCards.length);
    results.textContent = "You have captured " + "0" + " Pokemon pair";
    cardImages.sort(() => 0.5 - Math.random());
})