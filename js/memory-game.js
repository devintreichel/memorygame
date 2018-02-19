// var memoryArray = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
  var memoryArray = new Array();
      memoryArray[0] = new Image();
      memoryArray[0].src = 'images/A.png';
      memoryArray[1] = new Image();
      memoryArray[1].src = 'images/A.png';
      memoryArray[2] = new Image();
      memoryArray[2].src = 'images/B.png';
      memoryArray[3] = new Image();
      memoryArray[3].src = 'images/B.png';
      memoryArray[4] = new Image();
      memoryArray[4].src = 'images/C.png';
      memoryArray[5] = new Image();
      memoryArray[5].src = 'images/C.png';
      memoryArray[6] = new Image();
      memoryArray[6].src = 'images/D.png';
      memoryArray[7] = new Image();
      memoryArray[7].src = 'images/D.png';
      memoryArray[8] = new Image();
      memoryArray[8].src = 'images/E.png';
      memoryArray[9] = new Image();
      memoryArray[9].src = 'images/E.png';
      memoryArray[10] = new Image();
      memoryArray[10].src = 'images/F.png';
      memoryArray[11] = new Image();
      memoryArray[11].src = 'images/F.png';
      memoryArray[12] = new Image();
      memoryArray[12].src = 'images/G.png';
      memoryArray[13] = new Image();
      memoryArray[13].src = 'images/G.png';
      memoryArray[14] = new Image();
      memoryArray[14].src = 'images/H.png';
      memoryArray[15] = new Image();
      memoryArray[15].src = 'images/H.png';
      memoryArray[16] = new Image();
      memoryArray[16].src = 'images/I.png';
      memoryArray[17] = new Image();
      memoryArray[17].src = 'images/I.png';
      memoryArray[18] = new Image();
      memoryArray[18].src = 'images/J.png';
      memoryArray[19] = new Image();
      memoryArray[19].src = 'images/J.png';
      memoryArray[20] = new Image();
      memoryArray[20].src = 'images/K.png';
      memoryArray[21] = new Image();
      memoryArray[21].src = 'images/K.png';
      memoryArray[22] = new Image();
      memoryArray[22].src = 'images/L.png';
      memoryArray[23] = new Image();
      memoryArray[23].src = 'images/L.png';

  var memoryValues = [];
  var memoryCardIds = [];
  var cardsFlipped = 0;

Array.prototype.memoryCardShuffle = function() {
    var i = this.length, randomIndex, tempValue;
    while(--i > 0) {
        randomIndex = Math.floor(Math.random() * (i + 1));
        tempValue = this[randomIndex];
        this[randomIndex] = this[i];
        this[i] = tempValue;
    }
}

function newBoard() {
	cardsFlipped = 0;
	var output = '';
    memoryArray.memoryCardShuffle();
	for(var i = 0; i < memoryArray.length; i++) {
		output += '<div id="card_' + i + '" onclick="memoryCardFlip(this,\'' + memoryArray[i].src + '\')"></div>';
	}
	document.getElementById('board').innerHTML = output;
}

function memoryCardFlip(card,value) {
	if(card.innerHTML == "" && memoryValues.length < 2) {
		card.style.background = 'url("' + value + '") no-repeat';
    card.style.transform = 'rotateY(360deg)'
		if(memoryValues.length == 0){
			memoryValues.push(value);
			memoryCardIds.push(card.id);
		} else if(memoryValues.length == 1) {
			memoryValues.push(value);
			memoryCardIds.push(card.id);
			if(memoryValues[0] == memoryValues[1]) {
				cardsFlipped += 2;
				// Clear both arrays
				memoryValues = [];
        memoryCardIds = [];
				// Check to see if the whole board is cleared
				if(cardsFlipped == memoryArray.length) {
					alert("Board cleared! Nice job... Generating new board");
					document.getElementById('board').innerHTML = "";
					newBoard();
				}
			} else {
				function flipCardsOver() {
				    // Flip the 2 cards back over
				    var card1 = document.getElementById(memoryCardIds[0]);
				    var card2 = document.getElementById(memoryCardIds[1]);
				    card1.style.background = 'url(images/card-background.png) no-repeat';
            card1.style.transform = 'none'
            card1.innerHTML = "";
				    card2.style.background = 'url(images/card-background.png) no-repeat';
            card2.style.transform = 'none'
            card2.innerHTML = "";
				    // Clear both arrays
				    memoryValues = [];
            memoryCardIds = [];
				}
				setTimeout(flipCardsOver, 1000);
			}
		}
	}
}
