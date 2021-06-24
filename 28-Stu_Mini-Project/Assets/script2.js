document.onkeypress = function(event) {
    // Make sure key pressed is an alpha character
    if (isAlpha(event.key) && !pauseGame) {
        checkForLetter(event.key.toUpperCase())
    }
}
  
// Game Functions
// Check if letter is in word & process
function checkForLetter(letter) {
var foundLetter = false

// Search string for letter
for (var i=0, j= wordToMatch.length; i<j; i++) {
    if (letter === wordToMatch[i]) {
        guessingWord[i] = letter
        foundLetter = true
        // If guessing word matches random word
        if (guessingWord.join("") === wordToMatch) {
            // Increment # of wins
            wins++
            pauseGame = true
            updateDisplay()
            setTimeout(resetGame)
        }
    }
}

}
// Check in keypressed is between A-Z or a-z
function isAlpha (ch){
return /^[A-Z]$/i.test(ch);
}

function resetGame() {
timeLeft = 0
pauseGame = false

// Get a new word
wordToMatch = possibleWords[Math.floor(Math.random() * possibleWords.length)].toUpperCase()
console.log(wordToMatch)

// Reset word arrays
guessedLetters = []
guessingWord = []

// Reset the guessed word
for (var i=0, j=wordToMatch.length; i < j; i++){
    // Put a space instead of an underscore between multi word "words"
    if (wordToMatch[i] === " ") {
        guessingWord.push(" ")
    } else {
        guessingWord.push("_")
    }
}

// Update the Display
updateDisplay()
}

function updateDisplay () {
document.getElementById("wins").innerText = wins
document.getElementById("currentWord").innerText = guessingWord.join("")
document.getElementById("guessedLetters").innerText =  guessedLetters.join(" ")
}    

