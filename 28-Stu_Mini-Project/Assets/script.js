var timerEl = document.getElementById('countdown');
var button = document.getElementById("startButton");
var wins = 0;
var losses = 0; 
//Random words 
var possibleWords = ["javascript", "html", "style", "dom", "bubbling", "storage", "objects", "github", "intervals", "function", "header", "footer", "website", "bootsrap"];
//var letterInChosenWord = possibleWords.split("")

//var pauseGame = false;
//var guessedLetters = [];
//var guessingWord = [];
//var wordToMatch = [];



//Countdown Timer
button.addEventListener("click", function() {
  var timeLeft = 11;
    var timerInterval = setInterval(function() {
      timeLeft--;
      timerEl.textContent = timeLeft + " seconds remaining";
      
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + " seconds remaining";
      } else if(timeLeft === 1) {
        timerEl.textContent = timeLeft + " second remaining";
      } else if(timeLeft === 0) {
        timerEl.textContent = "Game Over!";  
        clearInterval(timerInterval);
       
      }
    }, 1000);
    var raNum = Math.floor(Math.random() * 14);
    var possibleWords = ["javascript", "html", "style", "dom", "bubbling", "storage", "objects", "github", "intervals", "function", "header", "footer", "website", "bootsrap"];
    document.querySelector("#currentword").textContent = possibleWords[raNum];

    
  });
// Code for math random function
 // randomWord: function(){
 //   return this._wordData(this.words[ Math.floor(Math.random() * this.words.length)] );
 // },


//Message for when you Win
//textContent ("YOU WON!! 🏆 ")
//textContent ("YOU LOSE 👎")