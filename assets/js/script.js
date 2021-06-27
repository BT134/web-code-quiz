// Declared variables
var timerEl = document.getElementById('countdown');
var startButton = document.getElementById("start-button");
var homeScreen = document.getElementById('home-screen');

var score = 0;
var questionIndex = 0;

// Seconds left:
var secondsLeft = 61;
// Holds interval time
var holdInterval = 0;
// Holds penalty time
var penalty = 10;
// Creates new element
var ulCreate = document.createElement("ul");

var questions = [
  {
    questionToAsk: "Arrays in JavaScipt can be used to store ______ ?",
    choices: ["Numbers & Strings", "Other Arrays", "Booleans", "All of the Above"],
    answer: "All of the Above",
  },
  {
    questionToAsk: "A Very useful tool used during develment and debugging for printing content to the debugger is:",
    choices: ["JavaScipt", "console.log", "Terminal/Bash", "for loops"],
    answer: "console.log",
  },
  {
    questionToAsk: "The condition in an if/else statement is enclosed within _____.",
    choices: ["Quotes", "Curley Brackets", "Parentheses", "Square Brackets"],
    answer: "Parentheses",
  },
  {
    questionToAsk: "Which of the follow statements is INCORRECT?",
    choices: ["10 === 'Ten'", "Ten == '10'", "'10' == 10", "10 === 10"],
    answer: "10 === 'Ten'",
  },
  { 
    questionToAsk: "Commonly used data types DO NOT include:",
    choices: ["String", "Booleens", "Numbers", "Alerts"],
    answer: "Alerts",
  },
];

// Triggers timer on button, shows user a display on the screen
startButton.addEventListener("click", function () {
  // We are checking zero because its originally set to zero
  if (holdInterval === 0) {
      holdInterval = setInterval(function () {
          secondsLeft--;
          timerEl.textContent = "Time: " + secondsLeft;

          if (secondsLeft <= 0) {
              clearInterval(holdInterval);
              allDone();
              timerEl.textContent = "Time's up!";
          }
      }, 1000);
  }
  render(questionIndex);
});

// Renders questions and choices to page: 
function render(questionIndex) {
  // Clears existing data 
  homeScreen.innerHTML = "";
  ulCreate.innerHTML = "";
  // For loops to loop through all info in array
  for (var i = 0; i < questions.length; i++) {
      // Appends questions only
      var userQuestion = questions[questionIndex].questionToAsk;
      var userChoices = questions[questionIndex].choices;
      var createH2 = document.createElement("h2");
      createH2.setAttribute("id", "createH2");
      createH2.textContent = userQuestion;
  }
  homeScreen.appendChild(createH2);

  // New for each for question choices
  userChoices.forEach(function (newItem) {
      var listItem = document.createElement("li");
      listItem.setAttribute("id", "answers-li");
      listItem.textContent = newItem;
      homeScreen.appendChild(ulCreate);
      ulCreate.appendChild(listItem);
      listItem.addEventListener("click", (compare));
  })  
}

// Event to compare choices with answer
function compare(event) {
  var element = event.target;

  if (element.matches("li")) {

      var createDiv = document.createElement("div");
      createDiv.setAttribute("id", "createDiv");
      // Correct condition 
      if (element.textContent == questions[questionIndex].answer) {
          score++;
          createDiv.textContent = "Correct!";
          // Correct condition 
      } else {
          // Will deduct -10 seconds off secondsLeft for wrong answers
          secondsLeft = secondsLeft - penalty;
          createDiv.textContent = "Wrong! The correct answer was:  " + questions[questionIndex].answer;
      }

  }
  // Question Index determines number question user is on
  questionIndex++;

  if (questionIndex >= questions.length) {
      // All done will append last page with user stats
      allDone();
      createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
  } else {
      render(questionIndex);
  }
  homeScreen.appendChild(createDiv);

}

// All done will append last page
function allDone() {
  homeScreen.innerHTML = "";
  timerEl.innerHTML = "";

  // Heading:
  var createH1 = document.createElement("h1");
  createH1.setAttribute("id", "createH1");
  createH1.textContent = "All Done!";

  homeScreen.appendChild(createH1);

  // Paragraph
  var createP = document.createElement("p");
  createP.setAttribute("id", "createP");

  homeScreen.appendChild(createP);

  // Calculates time remaining and replaces it with score
  if (secondsLeft >= 0) {
      var timeRemaining = secondsLeft;
      var createP2 = document.createElement("p");
      clearInterval(holdInterval);
      createP.textContent = "Your final score is: " + timeRemaining;

      homeScreen.appendChild(createP2);
  }

  // Label
  var createLabel = document.createElement("label");
  createLabel.setAttribute("id", "createLabel");
  createLabel.textContent = "Enter your initials: ";

  homeScreen.appendChild(createLabel);

  // input
  var createInput = document.createElement("input");
  createInput.setAttribute("type", "text");
  createInput.setAttribute("id", "initials");
  createInput.textContent = "";

  homeScreen.appendChild(createInput);

  // submit
  var createSubmit = document.createElement("button");
  createSubmit.setAttribute("id", "submit");
  createSubmit.textContent = "Submit";

  homeScreen.appendChild(createSubmit);

  // Event listener to capture initials and local storage for initials and score
  createSubmit.addEventListener("click", function () {
      var initials = createInput.value;

      if (initials === null) {

          console.log("No value entered!");

      } else {
          var finalScore = {
              initials: initials,
              score: timeRemaining
          }
          console.log(finalScore);
          var allScores = localStorage.getItem("allScores");
          if (allScores === null) {
              allScores = [];
          } else {
              allScores = JSON.parse(allScores);
          }
          allScores.push(finalScore);
          var newScore = JSON.stringify(allScores);
          localStorage.setItem("allScores", newScore);
          // Travels to final page
          window.location.replace("./highscores.html");
      }
  });

}
