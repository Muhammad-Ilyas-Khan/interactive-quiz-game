var currentQuestionIndex = 0;
var score = 0;
const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },

    {
        question: "What is the capital of Spain?",
        choices: ["Ankara", "Madrid", "Berlin", "Paris"],
        correctAnswer: "Paris"
    },

    {
        question: "What is the capital of Germany?",
        choices: ["Beijing", "Buenos Aires", "Kyiv", "Berlin"],
        correctAnswer: "Paris"
    }
]

//selectiong elements from the HTLM by their IDs or classes
var questionArea = document.getElementById('question-area'); //display question
var answerButtons = document.quesrySelectorAll('.answer-btn'); // answer buttons
var scoreCounter = document.getElementById('score-counter'); // score display element
var nextQuestionButton = document.getElementById('next-question'); // next question button

// create a function to show a question

function showQuestion() {
    // get current question
    const currentQuestion = questions[currentQuestionIndex];

    // display question text
    questionArea.textContent = currentQuestion.question;

}

// set text for each answer button
answerButtons.forEach((button, index) => {
    button.textContent = currentQuestion.choices[index]; // set button text to each choice
})

// call the function initially to display the first question
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

