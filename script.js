var currentQuestionIndex = 0;
var score = 0;

// Array of questions with correct answers updated
const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the capital of Spain?",
        choices: ["Ankara", "Madrid", "Berlin", "Paris"],
        correctAnswer: "Madrid"
    },
    {
        question: "What is the capital of Germany?",
        choices: ["Beijing", "Buenos Aires", "Kyiv", "Berlin"],
        correctAnswer: "Berlin"
    }
];

// Selecting elements from the HTML by their IDs or classes
var questionArea = document.getElementById('question-area'); // Display question
var answerButtons = document.querySelectorAll('.answer-btn'); // Answer buttons
var scoreCounter = document.getElementById('score-counter'); // Score display element
var nextQuestionButton = document.getElementById('next-question'); // Next question button

// Function to display the current question and set up answer buttons
function showQuestion() {
    // Get the current question object
    const currentQuestion = questions[currentQuestionIndex];

    // Display the question text
    questionArea.textContent = currentQuestion.question;

    // Set text for each answer button
    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.choices[index]; // Set button text to each choice
    });
}

// Call the function initially to display the first question
showQuestion();

// Adding click event listeners to each answer button
answerButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Check if the clicked button text matches the correct answer
        const selectedAnswer = button.textContent;
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;

        if (selectedAnswer === correctAnswer) {
            // Update score and display success message
            score++;
            alert('Correct!'); // Replace with a better UI feedback if needed
        } else {
            // Display try again message
            alert('Try Again!');
        }

        // Update the score counter display
        scoreCounter.textContent = `Score: ${score}`;
    });
});

// Add a click event to the Next Question button
nextQuestionButton.addEventListener('click', () => {
    // Move to the next question
    currentQuestionIndex++;

    // Check if there are more questions left
    if (currentQuestionIndex < questions.length) {
        // Show the next question
        showQuestion();
    } else {
        // End of quiz logic
        alert(`Quiz Over! Your final score is: ${score}`);
    }
});
