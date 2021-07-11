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

let lastQuestion = questions.length -1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10;
let TIMER;
let score = 0;

function renderQuestion(){
    let q=questions[runningQuestion];
    question.innerHTML = "<h2>"+q.question+"</h2>";
    choiceA.innerHTML = "<button>"+q.choiceA+"</button>";
    choiceB.innerHTML = "<button>"+q.choiceB+"</button>";
    choiceC.innerHTML = "<button>"+q.choiceC+"</button>";
    choiceD.innerHTML = "<button>"+q.choiceD+"</button>";
}

startbtn.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}


// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        count++
    }else{
        count = 0;
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
    }else{    
        counter-1000;
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        endquiz();
    }
};

function endquiz(){
    question.innerHTML = "<h2>Save your progress</h2>";
    choiceA.innerHTML = "<p> final score: "+score +" /4</p>";
    choiceB.innerHTML = "<h2>What is your initial?</h2>";
    choiceC.innerHTML = "";
    choiceD.innerHTML = "";

    localStorage.setItem('score', score);

};







