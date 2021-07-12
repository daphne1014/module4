let startbtn = document.getElementById("start_button");
console.dir(startbtn);
let startContainer = document.getElementById('start');
let quiz = document.getElementById("quiz");
let question = document.getElementById("question");
let choiceA = document.getElementById("a");
let choiceB = document.getElementById("b");
let choiceC = document.getElementById("c");
let choiceD = document.getElementById("d");
let counter = document.getElementById("counter");
const scoreDiv = document.getElementById("scoreContainer");

let questions = [
    {
        question: 'What is a pseudo-class?',
        choiceA: 'A CSS rule that contains no declarations',
        choiceB: 'A CSS declaration that hides the element.',
        choiceC: 'An element that has more than one class.',
        choiceD: 'A CSS keyword to target an element\'s state.', //this is the answer
        correct: "D"
    },
    {
        question: 'What is an example of a pseudo-element?',
        choiceA: '::before',
        choiceB: '::after',
        choiceC: '::first-letter',
        choiceD: 'All of the above.',
        correct: "D"
    },
    {
        question: 'What does the z-index property do?',
        choiceA: 'Removes an element from the DOM.',
        choiceB: 'Changes the stacking order of elements.', //this is the answer
        choiceC: 'Changes the opacity of an element.',
        choiceD: 'Forces an element to be positioned relatively.',
        correct: "B"
    },
    {
        question: 'Which of the following is NOT a reason to validate a user\'s responses?',
        choiceA: 'Offers the user an opportunity to enter a correct response.',
        choiceB: 'Reduces bogus answers getting stored in the database.',
        choiceC: 'Improves the user experience.', //this is the answer
        choiceD: 'Increases the overall quality of the user data.',
        correct: "C"
    }
];

let lastQuestion = questions.length - 1;
let startQuestion = 0;
let count = 0;

let startQuiz = function (){
    for (var i=0; i<questions.length;i++){
        window.alert('quiz started '+i)
    }
};

$(startbtn).click(startQuiz);
