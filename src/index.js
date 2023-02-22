// Home
let homeScore = document.getElementById("score-home");
let score = 0;

function incrementOne() {
  score += 1;
  homeScore.textContent = score;
}

function incrementTwo() {
  score += 2;
  homeScore.textContent = score;
}

function incrementThree() {
  score += 3;
  homeScore.textContent = score;
}

// Guest
let guestScore = document.getElementById("score-guest");
let guestScoreCount = 0;

function guestIncrementOne() {
  guestScoreCount += 1;
  guestScore.textContent = guestScoreCount;
}

function guestIncrementTwo() {
  guestScoreCount += 2;
  guestScore.textContent = guestScoreCount;
}

function guestIncrementThree() {
  guestScoreCount += 3;
  guestScore.textContent = guestScoreCount;
}

// Clear Score
function clearScore() {
  homeScore.textContent = 0;
  score = 0;
  guestScore.textContent = 0;
  guestScoreCount = 0;
}
