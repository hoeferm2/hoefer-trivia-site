//TODO: Countdown timer
//TODO: List of questions = Array

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

function populatebuttons() {
    button1.innerText = questionBank[1];
    button2.innerText = questionBank[2];
    button3.innerText = questionBank[3];
    button4.innerText = questionBank[4];
}


var questionBank = ["What color was Napoleons white horse?", "White", "Brown", "Purple", "Black"]
// TODO: Implement multiple questions
// var questionBank ={
//     question1: ["What color was Napoleons white horse?", "White", "Brown", "Purple", "Black"]
//     question2: ["Who played the Terminator in the terminator?", "Arnold Swarzenegger", "Selvester Stallone", "Steven Segal", "Tyler Perry"]
//     question3: ["Who is the best basketball player of all time?", "Aaron Carter", "Shaquille O'Neal", "Brent Barry", "Gary Payton"]
//     question4: ["Whats the deal with airline food?","It's GOOD!", "No idea Jerry!", "I mean it's not the best.", "I don't know What?"]
// }
//Quiz Material
// var questionBank = ["What color was Napoleons white horse?","Who played the Terminator in the terminator?", "Who is the best basketball player of all time?", "Whats the deal with airline food?" ];


// var answerBank = {
//     horse: ["White", "Brown", "Purple", "Black"]
//     terminator: ["Arnold Swarzenegger", "Selvester Stallone", "Steven Segal", "Tyler Perry"]
//     basketball: ["Aaron Carter", "Shaquille O'Neal", "Brent Barry", "Gary Payton"]    
//     airline: ["It's GOOD!", "No idea Jerry!", "I mean it's not the best.", "I don't know What?"]
// };

var playBtn = document.querySelector("#play-btn");
playBtn.addEventListener("click", startQuiz);



function startQuiz() {
    console.log("You clicked the play button");

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

function renderQuestion() {
    // randomly pick Questions from the Questions array
    //    var randomQuestion = Math.floor(Math.random() * questionBank.length);
    //     console.log(randomQuestion, questionBank[randomQuestion]);
    //     // pulls array spot and word
    //     randomQuestion = questionBank[randomQuestion];
    //     console.log(randomQuestion);
    var currentQuestion = questionBank[questionIndex]
    console.log(currentQuestion)
    console.log(questionSpan)
    questionSpan.innerText = currentQuestion;

    // This line populates the question buttons
    console.log(populatebuttons)
    populatebuttons()


}

function buttonHidden() {

    document.querySelector("#home").classList.add("hidden")
    // playBtn.classList.add("hidden");
    // highscoreBtn.classList.add("hidden");
    console.log("The buttons have gone")
    hiddenQuestion.classList.remove(".hidden-question")
    hiddenQuestion.classList.add("visible-question");
    renderQuestion();
}




//TODO: List of questions = Array

//TODO: High score button function





function viewScore() {
    console.log("You want to see scores.")
    buttonHidden();

}


// disapearing button function
highscoreBtn.addEventListener("click", viewScore)

