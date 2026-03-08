// 1. Personalized Greeting and Date Function
function displayPersonalizedInfo() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    // Use switch statement for greeting
    switch (true) {
        case (hour < 12):
            greeting = "Good Morning";
            break;
        case (hour < 18):
            greeting = "Good Afternoon";
            break;
        default:
            greeting = "Good Evening";
    }

    // Prompt for name and capitalize first letter
    let name = prompt("Please enter your name:");
    let formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    
    document.getElementById("greeting-display").innerHTML = `${greeting}, ${formattedName}!`;

    // User friendly date using at least 2 date methods
    // Methods used: toDateString() and toLocaleTimeString()
    const friendlyDate = "Today is " + now.toDateString() + " at " + now.toLocaleTimeString();
    document.getElementById("date-display").innerHTML = friendlyDate;
}

// 2. Email Validation Function
function processEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    let email = "";
    let isValid = false;

    // Loop until valid email is entered
    while (!isValid) {
        email = prompt("Please enter your email address:");
        if (emailRegex.test(email)) {
            isValid = true;
        } else {
            alert("Invalid email format. Please try again.");
        }
    }

    // Split email and convert username to uppercase
    let emailParts = email.split("@");
    let username = emailParts[0].toUpperCase();
    let domain = emailParts[1];

    document.getElementById("user-info-display").innerHTML = 
        `User: ${username} | Domain: ${domain}`;
}

// 3. Quote of the Day Function
function displayQuote() {
    // Array of quotes
    const quotes = [
        "The only way to do great work is to love what you do.",
        "Innovation distinguishes between a leader and a follower.",
        "Stay hungry, stay foolish.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "The mind is everything. What you think you become."
    ];
    
    // Generate random number between 0 and 4
    let randomIndex = Math.floor(Math.random() * 5);
    
    document.getElementById("quote-display").innerHTML = 
        `<p><em>Quote of the Day: ${quotes[randomIndex]}</em></p>`;
}

// 4. Question and Answer Arrays
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

// 5. Main Quiz Logic
function runQuiz() {
    let totalScore = 0;

    for (let i = 0; i < questions.length; i++) {
        let guesses = 3;
        let isCorrect = false;

        while (guesses > 0 && isCorrect === false) {
            // Requirement: Answers should require strings, convert to lowercase for comparison
            let userInput = prompt(questions[i] + "\nAttempts left: " + guesses);
            
            if (userInput.toLowerCase().trim() === answers[i]) {
                alert("Correct!");
                totalScore += guesses; 
                isCorrect = true;
            } else {
                guesses--;
                if (guesses > 0) {
                    alert("Wrong! Try again.");
                } else {
                    alert("Out of tries! The answer was " + answers[i]);
                }
            }
        }
    }
    return totalScore;
}

// 6. Start Quiz and Calculate Percentage
function startQuiz() {
    let finalScore = runQuiz(); 
    const totalPointsPossible = 9; // Rubric requirement: total possible points is 9
    
    // Requirement: Calculate percentage and use number function to round to 2 decimal places
    let percentage = (finalScore / totalPointsPossible) * 100;
    let roundedPercent = percentage.toFixed(2);

    document.getElementById("score-display").innerHTML = 
        `<h3>Quiz Finished!</h3>` +
        `<p>Your total score is: ${finalScore} / ${totalPointsPossible}</p>` +
        `<p>Percentage: ${roundedPercent}%</p>`;

    if (finalScore === 9) {
        document.getElementById("score-display").innerHTML += 
            `<h2 style='color: #28a745;'>PERFECT SCORE! 🥳</h2>`;
    }
}

// 7. Initialize Page (Call functions before the trivia quiz)
displayPersonalizedInfo();
processEmail();
displayQuote();