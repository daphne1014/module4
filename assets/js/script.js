let viewScore = document.getElementById("view-score");
let timer = document.getElementById("timer");
let startDiv = document.getElementById("start-block");
let startBtn = document.getElementById("start-btn");
let quiz = document.getElementById("quiz-block");
let right = document.getElementById("result-correct");
let wrong = document.getElementById("result-wrong");
let resultDiv = document.getElementById("result-block");
let scoreEl = document.getElementById("score");
let initialSubmit = document.getElementById("initial-submit");
let initial = document.getElementById("initial");
let submitBtn = document.getElementById("submit-btn");
let highscoreDiv = document.getElementById("highscore-block");
let highscore = document.getElementById("highscore");
let question = document.getElementById("question");
let choiceA = document.getElementById("a");
let choiceB = document.getElementById("b");
let choiceC = document.getElementById("c");
let choiceD = document.getElementById("d");
let timerInterval;
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
let runningQuestion = 0;
let count = 0;
let score = 0;
let time = 0;

quiz.style.display = "none";
right.style.display = "none";
wrong.style.display = "none";
resultDiv.style.display = "none";
highscoreDiv.style.display = "none";

// define functions
function startQuiz() {
    time = 60;
    score = 0;
    startDiv.style.display = "none";
    quiz.style.display = "block";
    timer.textContent = time;
    startTimer();
    renderQuestion();
};


function startTimer() {
    timerInterval = setInterval(function () {
        if (time >= 0) {
            time--;
            timer.textContent = time;
        } else {
            scoreDisplay();
        }
    }, 1000);
    renderQuestion();
};

function renderQuestion() {
    let q = questions[runningQuestion];
    question.innerHTML = "<h2>" + q.question + "</h2>";
    choiceA.innerHTML = "<button>" + q.choiceA + "</button>";
    choiceB.innerHTML = "<button>" + q.choiceB + "</button>";
    choiceC.innerHTML = "<button>" + q.choiceC + "</button>";
    choiceD.innerHTML = "<button>" + q.choiceD + "</button>";
};

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // answer is correct
        score++;
        right.style.display = "block";
        wrong.style.display = "none";
    } else {
        time -= 15;
        right.style.display = "none";
        wrong.style.display = "block";
    }
    // count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        endQuiz();
    }
};
function endQuiz() {
    scoreEl.textContent = score;
    clearInterval(timerInterval);
    timer.textContent = 0;
    time = 0
    quiz.style.display = "none";
    right.style.display = "none";
    wrong.style.display = "none";
    resultDiv.style.display = "block";
    highscoreDiv.style.display = "none";
};


function scoreSubmit() {
    let initials = initial.value.trim();
    let totalScore = 0;
    let scoreList = [];
    if (initials !== "") {
        let scoreData = window.localStorage.getItem("scores") || '';
        if (scoreData !== "") {
            scoreList = scoreData.split(',');
        }
        // check if we already have this user
        for (let i = 0; i < scoreList.length; i = i + 2) {
            if (scoreList[i] === initials) {
                //update user score if new score is higher
                if (parseInt(scoreList[i + 1]) <= score) {
                    scoreList[i + 1] = score;
                }
                totalScore = 1;
            }
        }
        // add new user score
        if (totalScore === 0) {
            scoreList.push(initials);
            scoreList.push(score);
        }
        // update localStorege
        window.localStorage.setItem("scores", scoreList.toString());
        // show high scores
        for (let i = 0; i < scoreList.length; i += 2) {
            let newDiv = document.createElement("div");
            newDiv.textContent = (i / 2 + 1) + ". " + scoreList[i] + " - " + scoreList[i + 1];
            scoreEl.appendChild(newDiv);
        }
        initialSubmit.style.display= "none";
    } else {
        alert("Erorr! Input initials.");
    }
};

function viewHighScore() {
    resultDiv.style.display = "block";
    highscoreDiv.style.display = "none";
    if (initials !== "") {
        highscoreDiv.value = "";
        let storedScore = window.localStorage.getItem("scores") || "";
        if (storedScore !== "") {
            scoreList = storedScore.split(",");
            for (let i = 0; i < storedScore.length; i += 2) {
                let scoreListNew = document.createElement("div");
                scoreListNew.textContent = (i / 3) + " " + scoreList[i] + " " + scoreList[i + 1];
                highscoreDiv.appendChild(storedScore);
            };
        };
    }
}

// Buttons
startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", scoreSubmit);


// let startbtn = document.getElementById("start_button");
// console.dir(startbtn);
// let startContainer = document.getElementById('start');
// let quiz = document.getElementById("quiz");
// let quizEnd = document.getElementById("end_quiz");
// let question = document.getElementById("question");
// let choiceA = document.getElementById("a");
// let choiceB = document.getElementById("b");
// let choiceC = document.getElementById("c");
// let choiceD = document.getElementById("d");
// let finalScore = document.getElementById("final_score");
// let initialQ = document.getElementById("ask_initials");
// let submit = document.getElementById("submit");
// let timerEl = document.getElementById("timer");
// let scoreDiv = document.getElementById("scoreContainer");
// let score = 0;
// let initialTime = 0;
// let submit = document.getElementById("submit");
// let initials = document.getElementById("initialData");

// let questions = [
//     {
//         question: 'What is a pseudo-class?',
//         choiceA: 'A CSS rule that contains no declarations',
//         choiceB: 'A CSS declaration that hides the element.',
//         choiceC: 'An element that has more than one class.',
//         choiceD: 'A CSS keyword to target an element\'s state.', //this is the answer
//         correct: "D"
//     },
//     {
//         question: 'What is an example of a pseudo-element?',
//         choiceA: '::before',
//         choiceB: '::after',
//         choiceC: '::first-letter',
//         choiceD: 'All of the above.',
//         correct: "D"
//     },
//     {
//         question: 'What does the z-index property do?',
//         choiceA: 'Removes an element from the DOM.',
//         choiceB: 'Changes the stacking order of elements.', //this is the answer
//         choiceC: 'Changes the opacity of an element.',
//         choiceD: 'Forces an element to be positioned relatively.',
//         correct: "B"
//     },
//     {
//         question: 'Which of the following is NOT a reason to validate a user\'s responses?',
//         choiceA: 'Offers the user an opportunity to enter a correct response.',
//         choiceB: 'Reduces bogus answers getting stored in the database.',
//         choiceC: 'Improves the user experience.', //this is the answer
//         choiceD: 'Increases the overall quality of the user data.',
//         correct: "C"
//     }
// ];

// let lastQuestion = questions.length - 1;
// let runningQuestion = 0;
// let count = 0;
// let timeLeft = 30;

// function countdown() {
//     let timeInterval = setInterval(function () {
//         // As long as the `timeLeft` is greater than 1
//         if (timeLeft > 1) {
//             // Set the `textContent` of `timerEl` to show the remaining seconds
//             timerEl.textContent = timeLeft + ' seconds remaining';
//             // Decrement `timeLeft` by 1
//             timeLeft--;
//         } else if (timeLeft === 1) {
//             // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
//             timerEl.textContent = timeLeft + ' second remaining';
//             timeLeft--;
//         } else {
//             // Once `timeLeft` gets to 0, set `timerEl` to an empty string
//             timerEl.textContent = '';
//             // Use `clearInterval()` to stop the timer
//             clearInterval(timeInterval);
//             // Call the `displayMessage()` function
//             endquiz();
//         }
//     }, 1000);
// }



// function renderQuestion() {
//     let q = questions[runningQuestion];
//     question.innerHTML = "<h2>" + q.question + "</h2>";
//     choiceA.innerHTML = "<button>" + q.choiceA + "</button>";
//     choiceB.innerHTML = "<button>" + q.choiceB + "</button>";
//     choiceC.innerHTML = "<button>" + q.choiceC + "</button>";
//     choiceD.innerHTML = "<button>" + q.choiceD + "</button>";
// }

// startbtn.addEventListener("click", startQuiz);

// // start quiz
// function startQuiz() {
//     timerEl.textContent= timeLeft + " seconds remaining";
//     // timeLeft = setInterval(countdown,1000);
//     countdown();
//     start.style.display = "none";
//     renderQuestion();
//     quiz.style.display = "block";
// };
// function saveScores (){
//     var initialEl = initials.value.trim();
//     if (initials !== ""){
//         var newScore = {initials: initials, score:score};

//     }
// };

// function endquiz() {
//     start.style.display = "none";
//     quiz.style.display = "none";
//     quizEnd.style.display = "block";
//     finalScore.innerHTML = "<h3>Your final score is: " + score + "</h3>"
// };
// submit.addEventListener('click', saveScores);



// // checkAnwer
// console.log("current time is "+ timeLeft);



