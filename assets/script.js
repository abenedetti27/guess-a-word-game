//Start the game with button
    //add eventlistener to button
    //hidden word appears= query selector or variable
    //timer starts counting down in intervals of 1000 ms
    //Start new game when game is over
//comapre letters input to letters in hidden word= event listener
    //if letter is correct, letter will appear
    //if letter is wrong, time is deducted from timer =set interval, clear interval
//if timer runs out, game is over -lose
//if word is guessed, game is over -win
//when game is won, wins are incremented to scoreboard and saved to local storage
//when game is lost, losses are incremented to scoreboard and save to local storage



var button = document.querySelector("button");
var timerEl = document.getElementById("timer");
var userInput;
var hidden;
var scoreboard = {
    wins:0, 
    losses:0
};

button.addEventListener("click", countdown);
function countdown(){
    var timeRemaining = 10;
    var timeInterval = setInterval(function(){ 
    //conditional statements for time tk
    if(timeRemaining >=1){
        timeRemaining--;
        timerEl.textContent=timeRemaining;

    }   
    else{
        clearInterval(timeInterval);
    } 
    },1000);

}