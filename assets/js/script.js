//TODO: Countdown timer
//TODO: List of questions = Array

//TODO: check answer
// gets what user clicked
// checks answer against correct

// TODO: function init


// Document Selectors
var questionSpan = document.querySelector("#questionSpan")
var hiddenQuestion = document.querySelector(".hidden-question")
var highscoreBtn = document.querySelector("#highscore-btn");
var timeLeftSpan = document.querySelector("#timeLeftSpan");
var highScoreSpan = document.querySelector("highScoreSpan")
var button1 = document.querySelector("#button1")
var button2 = document.querySelector("#button2")
var button3 = document.querySelector("#button3")
var button4 = document.querySelector("#button4")
//LocalStorage Variable
var score = 0;
var secondsLeft = 75;
var timerel = document.querySelector("#timer")
var startEl = document.querySelector("#start-button")
var questionIndex = 0


// var highScores = [
//     {
//         initials:"",
//         score: (num)
//     }
// ]
function populatebuttons() {


}



// TODO: Implement multiple questions
//Quiz Material

var questionBank = [
    {
        question: '"What color was Napoleons white horse?"',
        answers: ["White", "Brown", "Purple", "Black"],
        correct: 'White'
    },
    {
        question: "Who played Rocky in the Rocky?",
        answers: ["Arnold Swarzenegger", "Selvester Stallone", "Steven Segal", "Tyler Perry"],
        correct: "Selvester Stallone",
    },
    {
        question: "Who is the best basketball player of all time?",
        answers: ["Aaron Carter", "Shaquille O'Neal", "Brent Barry", "Gary Payton"],
        correct: "Aaron Carter",
    },
    {
        question: "Whats the deal with airline food?",
        answers: ["It's GOOD!", "No idea Jerry!", "I mean it's not the best.", "I don't know What?",],
        correct: "It's GOOD!"
    },
    {
        question: "California girls are ____",
        answers: ["Undeniable", "Daisy Dukes Bikinis on top", "So hot they'll melt your popsicle", "All",],
        correct: "All",
    },
]
var playBtn = document.querySelector("#play-btn");
playBtn.addEventListener("click", startQuiz);



function startQuiz() {
    console.log("You clicked the play button");

    // starTimer();
    buttonHidden();



    // console.log("The question is rendered.")

    // function revealQuestion() {
    //     document.querySelector(".hidden-question").setAttribute("class", "visible-question")
    // }
    // revealQuestion()
    // function populateQuestion() {
    //     document.querySelector("#questionSpan").innerHTML = randomQuestion;
    // }
    // populateQuestion()
}

function loadQuestion() {
    console.log(questionBank.length - 1);
    var currentQuestion = questionBank[questionIndex].question
    // var question1 = questionBank[questionIndex][1]
    console.log(currentQuestion)
    console.log(questionSpan)
    questionSpan.innerText = currentQuestion;


    // randomly pick Questions from the Questions array
    //    var randomQuestion = Math.floor(Math.random() * questionBank.length);
    //     console.log(randomQuestion, questionBank[randomQuestion]);
    //     // pulls array spot and word
    //     randomQuestion = questionBank[randomQuestion];
    //     console.log(randomQuestion);

    //var currentQuestion = questionBank[questionIndex].question


    // This line populates the question buttons
    button1.innerText = questionBank[questionIndex].answers[0];
    button2.innerText = questionBank[questionIndex].answers[1];
    button3.innerText = questionBank[questionIndex].answers[2];
    button4.innerText = questionBank[questionIndex].answers[3];

    console.log(button1.innerText)
    console.log(button2.innerText)
    console.log(button3.innerText)
    console.log(button4.innerText)
    console.log(questionBank[questionIndex].correct)


}

function buttonHidden() {

    document.querySelector("#home").classList.add("hidden")
    // playBtn.classList.add("hidden");
    // highscoreBtn.classList.add("hidden");
    console.log("The buttons have gone")
    hiddenQuestion.classList.remove(".hidden-question")
    hiddenQuestion.classList.add("visible-question");
    loadQuestion();
}




// List of questions = Array

//TODO: High score button function





function viewScore() {
    console.log("You want to see scores.")
    buttonHidden();

}


// disapearing button function
highscoreBtn.addEventListener("click", viewScore)


button1.addEventListener("click", function () {

    if (button1.innerText === questionBank[questionIndex].correct) {
        console.log("YAY")
        score = score + 5
        console.log(score)
        questionIndex = questionIndex + 1
        loadQuestion()
    } else {
        console.log("Waahhh");
        console.log(score);
        questionIndex = questionIndex + 1
        loadQuestion()
    }
})
button2.addEventListener("click", function () {
    if (button2.innerText === questionBank[questionIndex].correct) {
        console.log("YAY")
        score = score + 5
        console.log(score)
        questionIndex = questionIndex + 1
        loadQuestion()
    } else {
        console.log("Waahhh");
        console.log(score);
        questionIndex = questionIndex + 1
        loadQuestion()
    }
})
button3.addEventListener("click", function () {
    if (button3.innerText === questionBank[questionIndex].correct) {
        console.log("YAY")
        score = score + 5
        console.log(score)
        questionIndex = questionIndex + 1
        loadQuestion()
    } else {
        console.log("Waahhh");
        console.log(score);
        questionIndex = questionIndex + 1
        loadQuestion()
    }
})
button4.addEventListener("click", function () {
    if (button4.innerText === questionBank[questionIndex].correct) {
        console.log("YAY")
        score = score + 5
        console.log(score)
        questionIndex = questionIndex + 1
        loadQuestion()
    } else {
        console.log("Waahhh");
        console.log(score);
        questionIndex = questionIndex + 1
        loadQuestion()
    }
})


// TODO: Endgame Function.

// 