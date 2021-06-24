var timerEl = document.getElementById('countdown');
var button = document.getElementById("startButton");
var newQuestion = $("#question");
var options = $("#ansOptions");
var highScores = $("#highScores");

//Question
//Arrays in JavaScipt can be used to store ______ ?
//Answers: 1. Numbers & Strings, 2. Other Arrays, 3. Booleens, 4. All of the above.
//Question
//A Very useful tool used during develment and debuggind for printing content to the debugger is:
//Answers: 1. JavaScipt 2. Terminal/Bash, 3. for loops, 4. console.log
//Question
//The condition in an if/else statement is enclosed within _____. 
//Answers: 1. Quotes, 2. Curley brackets, 3. Paraphrashes, 4. Square brackets
//Question
//Which of the follow statements is INCORRECT?
//Answers: 1. Ten == "10", 2. "10" == 10, 3. 10 === "Ten", 4. "Ten" = 10

button.addEventListener("click", function() {
    var timeLeft = 61;
      var timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;
        
        if (timeLeft > 1) {
          timerEl.textContent = "Time: " + timeLeft;
        } else if(timeLeft === 0) {
          timerEl.textContent = "Game Over!";  
          clearInterval(timerInterval);
        }
      }, 1000);

      if (timeLeft === 0) {
        return;
      }
      
    $("button").detach();
    $("p").empty();
        
     newQuestion.text("Commonly used data types DO NOT include: ");
      
     var answer1 = [
        "1. String",
        "2. Booleens",
        "3. Numbers",
        "4. Alerts",
      ];

      for (var i = 0; i < answer1.length; i++) {
        // Create a new `<div>` for each ability and its text content
        var answersLi1 = $('<li>');

      answersLi1.text(answer1[i]);
      
      options.append(answersLi1);
    }

    });

   highScores.on("click", function() {
    newQuestion.text("highscores");
    
    $("button").detach();
    $("p").empty();
    
    var $bt = $( "input/>").attr({type:"button",name:"Go Back", value: "Dynamic Button"});
    $("#ansOptions").append($bt);
    
    var $bt = $( "input/>").attr({type:"button",name:"Reset", value: "Dynamic Button"});
    $("#reset").append($bt);
   }); 
