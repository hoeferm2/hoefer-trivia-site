// Document Selectors
var question1El = document.querySelector("#question-1")
var question2El = document.querySelector("#question-2")
var question3El = document.querySelector("#question-3")
var question4El = document.querySelector("#question-4")
var highscoreBtn = document.querySelector("#highscore-btn");
var timeLeftSpan = document.querySelector("#timeLeftSpan");
var highScoreSpan = document.querySelector("highScoreSpan")
//LocalStorage Variable
var score = 0;
var secondsLeft = 75;
var timerel = document.querySelector("#timer")
var startEl = document.querySelector("#start-button")

//Quiz Material
var questionBank = ["What color was Napoleons white horse?", /*"Who played the Terminator in the terminator?", "Who is the best basketball player of all time?", "Whats the deal with airline food?" */];

/*var answerBank = {
    questionBank0: ["White", "Brown", "Purple", "Black"]
    //questionBank1: ["Arnold Swarzenegger", "Selvester Stallone", "Steven Segal", "Tyler Perry"]
    questionBank2: ["Aaron Carter", "Shaquille O'Neal", "Brent Barry", "Gary Payton"]    
    questionBank3: ["It's GOOD!", "No idea Jerry!", "I mean it's not the best.", "I don't know What?"]
};
var playBtn = document.querySelector("#play-btn"); */

//TODO: Countdown timer
//TODO: List of questions = Array

// TODO: function init


function startQuiz() {
    console.log("You clicked the play button");
    function buttonHidden() {

        document.querySelector(".container").classList.add("hidden")
        // playBtn.classList.add("hidden");
        // highscoreBtn.classList.add("hidden");
        console.log("The buttons have gone")
    }
    buttonHidden();

    function renderQuestion() {
        //TODO: randomly pick words from words array
        var randomQuestion = Math.floor(Math.random() * questionBank.length);
        console.log(randomQuestion, questionBank[randomQuestion]);
        // pulls array spot and word
        randomQuestion = questionBank[randomQuestion];
        console.log(randomQuestion);
        // changes variable to just word
        //Splits the word string into an array
        //TODO: make question # associated with random question appear
    }
    renderQuestion()

}

/*
    


    //TODO: List of questions = Array

    //TODO: High score button function





    function viewScore() {
        console.log("You want to see scores.")
        buttonHidden();

    }

    playBtn.addEventListener("click", startQuiz);
    // disapearing button function
   // highscoreBtn.addEventListener("click", viewScore)

   */