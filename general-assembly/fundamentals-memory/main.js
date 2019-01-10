var cardOne = "palm";
var cardTwo = "drink";
var cardThree = "palm";
var cardFour = "drink";

/*
if (cardOne === cardThree) {
	alert("Match!")
}
*/


var gameBoard = document.getElementById('game-board');

var cards = ["palm", "drink", "palm", "drink"];
var cardsInPlay = [];


//debugger;
var createBoard = function() {
for (var i = 0; i < cards.length; i++) {
	var card = document.createElement('div');
	card.className = 'card';
	gameBoard.appendChild(card);	
	//card.textContent = cards[i];
	card.setAttribute('data', cards[i]);
	card.addEventListener('click', isTwoCards);
	}
};


function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data'));
	if(this.getAttribute('data') === "palm") {
	this.innerHTML = '<img src="Photos/palm-200965_1280.jpg" height="130" width="130"/>';
	 			};
	if (this.getAttribute('data') === "drink") {
	 	this.innerHTML = '<img src="Photos/drink.png" height="130"/>';
	 };

	if(cardsInPlay.length === 2){
		isMatch(cardsInPlay);
		console.log(cardsInPlay);  //not working
		cardsInPlay = [];  //not working
		cardsInPlay.innerHTML = '';  //not working
			};

}

function isMatch () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("Let's Luau!");
	}
	else if (cardsInPlay[0] !== cardsInPlay[1]) {
		alert("Sorry! No mai tai for .");
	}
};

createBoard();

