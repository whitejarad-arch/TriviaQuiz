// 1. Create Question and Answer Arrays
const questions = [
    "In Norse mythology, what is the name of the 'All-Father' god?",
    "A legendary bird that is reborn from its own ashes is the...",
    "The multi-headed serpent that regrows two heads for every one cut off is the..."
];

const answers = [
    "odin",
    "phoenix",
    "hydra"
];

// 2. The Main Quiz Function
function runQuiz() {
    let totalScore = 0; // Cumulative score

    // 3. The FOR LOOP (Iterates through the 3 questions)
    for (let i = 0; i < questions.length; i++) {
        let guesses = 3; // Reset guesses to 3 for each new question
        let isCorrect = false;

        // 4. The WHILE LOOP (Handles the 3 attempts per question)
        while (guesses > 0 && isCorrect === false) {
            let userInput = prompt(questions[i] + "\nAttempts left: " + guesses);

            // 5. THE CONDITIONAL (Check if the answer is correct)
            // .toLowerCase() makes it "case-insensitive" (Paris vs paris)
            if (userInput.toLowerCase() === answers[i]) {
                alert("Correct!");
                totalScore += guesses; // Add points based on remaining attempts
                isCorrect = true;      // This breaks the while loop
            } else {
                guesses--; // Subtract 1 attempt
                if (guesses > 0) {
                    alert("Wrong! Try again.");
                } else {
                    alert("Out of tries! The answer was " + answers[i]);
                }
            }
        }
    }

    // 6. Return the accumulated points
    return totalScore; 
} 

// 7. calls the quiz and displays the returned result
function startQuiz() {
    let finalScore = runQuiz(); // Captures the returned value
    
    // Display logic (Rubric Requirement)
    document.getElementById("score-display").innerHTML = 
        "<h3>Quiz Finished! Your total score is: " + finalScore + "</h3>";
    
    // Check for perfect score
    if (finalScore === 9) {
        document.getElementById("score-display").innerHTML += 
            "<h2 style='color: #28a745;'>🎉 PERFECT SCORE! 🎉</h2>";
    }
}