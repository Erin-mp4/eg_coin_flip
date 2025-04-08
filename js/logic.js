let gamesPlayed = 0;
let gamesWon = 0;
let gamesLost= 0;
   
let displayWon = document.getElementById('won'); 
let displayLost = document.getElementById('lost'); 
let displayPlayed = document.getElementById('played');

function runGame(x) {
  let pick = x;
  let choice = document.getElementById('prediction');
  let flip = document.getElementById('flip');
  let result = document.getElementById('result');

  let randNum = Math.ceil(Math.random() * 2);
  let toss;

  if (randNum === 1) {
    toss = 'Heads';
  } else {
    toss = 'Tails';
  }

  let status;
  if (pick === toss) {
    status = 'Win';
    gamesWon++;
  } else {
    status = 'Loss';
    gamesLost++;
  }

  gamesPlayed++;

  choice.innerText = pick;
  flip.innerText = toss;
  result.innerText = status;

  displayPlayed.innerText = gamesPlayed;
  displayWon.innerText = gamesWon;
  displayLost.innerText =gamesLost;
}

function resetScore() {

  gamesPlayed = 0;
  gamesWon = 0;
  gamesLost = 0;

  displayPlayed.innerText = gamesPlayed;
  displayWon.innerText = gamesWon;
  displayLost.innerText = gamesLost;

}