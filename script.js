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
