// let quizContainer = document.getElementById('quiz_container');
// let resultsContainer = document.getElementById('results');
// let submitButton = document.getElementById('submit');
// let highestScoreContainer = document.getElementById('highest-scores');

let questions = [
    {
        question: 'What is a pseudo-class?',
        answer: {a: 'A CSS rule that contains no declarations',
            b: 'A CSS declaration that hides the element.',
            c: 'An element that has more than one class.',
            d: 'A CSS keyword to target an element\'s state.'}, //this is the answer
        correctAnswer: "d"
        },
    {
        question: 'What is an example of a pseudo-element?',
        answer:{a: '::before',
            b:'::after',
            c:'::first-letter',
            d: 'All of the above.'}, //this is the answer
            correctAnswer: "d"
    },
    {
        question: 'What does the z-index property do?',
        answer: {a: 'Removes an element from the DOM.',
            b: 'Changes the stacking order of elements.', //this is the answer
            c: 'Changes the opacity of an element.',
            d: 'Forces an element to be positioned relatively.'},
            correctAnswer: "b"
    },
    {
        question: 'Which of the following is NOT a reason to validate a user\'s responses?',
        answer: {a: 'Offers the user an opportunity to enter a correct response.',
            b: 'Reduces bogus answers getting stored in the database.',
            c: 'Improves the user experience.', //this is the answer
            d: 'Increases the overall quality of the user data.'},
            correctAnswer: "c"
    }
];

let score = 0;

for(var i=0; i<questions.length;i++){
    var answer = confirm(questions[i].question);

}
