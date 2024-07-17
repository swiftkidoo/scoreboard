// Home Score functions
let homeEl = document.getElementById("home-el");
let homeScore = 0;

function homescore1() {
    homeScore += 1;
    homeEl.textContent = homeScore;
}

function homescore2() {
    homeScore += 2;
    homeEl.textContent = homeScore;
}

function homescore3() {
    homeScore += 3;
    homeEl.textContent = homeScore;
}

// Away Score functions
let awayEl = document.getElementById("away-el");
let awayScore = 0;

function awayscore1() {
    awayScore += 1;
    awayEl.textContent = awayScore;
}

function awayscore2() {
    awayScore += 2;
    awayEl.textContent = awayScore;
}

function awayscore3() {
    awayScore += 3;
    awayEl.textContent = awayScore;
}

function homeresert() {
    homeEl.textContent = 0
    homeScore = 0
}

function awayresert() {
    awayEl.textContent = 0
     awayScore = 0
}
// Timer functions
let timerEl = document.getElementById("timer-el");
let timer;
let initialTime = 15 * 60; // 15 minutes in seconds
let timeRemaining = initialTime;

function startTimer() {
    clearInterval(timer); // Clear any existing timer
    timer = setInterval(updateTimer, 1000); // Update timer every second
}

function updateTimer() {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;

    // Format time with leading zeros if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timerEl.textContent = minutes + ':' + seconds;

    // Stop the timer when it reaches 0
    if (timeRemaining > 0) {
        timeRemaining -= 1;
    } else {
        clearInterval(timer);
    }
}

function resetTimer() {
    clearInterval(timer); // Stop the timer
    timeRemaining = initialTime; // Reset to initial time
    timerEl.textContent = "15:00"; // Reset the display
}
