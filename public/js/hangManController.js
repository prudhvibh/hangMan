let score = 0;
let wrongMoves = [];
let images = ['hang_1.gif','hang_2.gif','hang_3.gif','hang_4.gif','hang_5.gif','hang_6.gif','hang_7.gif'];
let startGame = function() {
  let word = randomWord();
  let dashes = emptyLetters(word.length);
  document.getElementById('input').innerText = dashes;
  game(word,dashes);
  wrongMoves = [];
  document.getElementById('wrongKeys').innerHTML = [];
}

let isGameWon = function(word,dashes) {
  return dashes.toString()==word.split('').toString();
}

let isGameLost = function(wrongMoves,word) {
  changeImage(wrongMoves.length);
  if(wrongMoves.length >= 6) {
    alert('You loss the game'+'\n'+'Correct word is '+word);
    location.reload();
  }
}

let scoreOfGame = function() {
  score++;
  document.getElementById('score').innerText = "Score:"+score;
  startGame();
}

let printWrongMove = function(wrongMoves,letter) {
  if(!wrongMoves.includes(letter)){
    wrongMoves.push(letter);
    document.getElementById('wrongKeys').innerHTML =
    wrongMoves.join(' ');
  }
}

let changeImage = function(index) {
  let image = document.getElementById('img');
  image.src = 'public/images/'+images[index];
}

let game = function(word,dashes) {
  dashes = dashes.split(' ');
  window.onkeypress = function(event){
    let letter = event.key;
    let indexOfLetterInWord=checkLetter(word,letter);
    if(indexOfLetterInWord.length>0){
      updateDisplay(dashes,indexOfLetterInWord,letter);
      if(isGameWon(word,dashes)){
        scoreOfGame();
        changeImage(0);
      }
    } else {
      printWrongMove(wrongMoves,letter);
    }
    isGameLost(wrongMoves,word);
  }
}

window.onload = startGame;
