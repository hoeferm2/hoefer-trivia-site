//TODO: Countdown timer
// when timer ends something happens
//go to end screen.

// Document Selectors
var questionSpan = document.querySelector("#questionSpan")
var hiddenQuestion = document.querySelector(".hidden-question")
var highscoreBtn = document.querySelector("#highscore-btn");
var timeLeftSpan = document.querySelector("#timeLeftSpan");
var highScoreSpan = document.querySelector("#highScoreSpan");
var scoreSpan = document.querySelector("#scoreSpan");
// High score page div element
var highScorePage = document.querySelector("#highScores")
var endscreen = document.getElementById("#endscreen")
var playBtn = document.querySelector("#play-btn");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
// Questions and answers
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
//LocalStorage Variable
var score = 0;
var secondsLeft = 75;
var timerel = document.querySelector("#timer")
var startEl = document.querySelector("#start-button")
var questionIndex = 0
// ------------------------------------------------------------//
//TODO: Start Timer
function startTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeLeftSpan.textContent = secondsLeft + " seconds left";

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            // sendMessage();
        }

    }, 1000);
}

function startQuiz() {
    startTime()
    //console.log("You clicked the play button");
    scoreSpan.textContent = score + " points";

    // starTimer();
    buttonHidden();



    // //console.log("The question is rendered.")

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
    // // TODO: Endgame THIS STUFF IS NEW
    // //console.log(currentQuestion)
    // if (question.questionIndex === questionBank.length) {
    //     gameOver()
    // } else {
    //console.log(questionBank.length - 1);
    var currentQuestion = questionBank[questionIndex].question
    // var question1 = questionBank[questionIndex][1]
    //console.log(currentQuestion)
    //console.log(questionSpan)
    questionSpan.innerText = currentQuestion;
    console.log(questionBank.length)
    console.log(currentQuestion)

    // This line populates the question buttons
    button1.innerText = questionBank[questionIndex].answers[0];
    button2.innerText = questionBank[questionIndex].answers[1];
    button3.innerText = questionBank[questionIndex].answers[2];
    button4.innerText = questionBank[questionIndex].answers[3];

    //console.log(button1.innerText)
    //console.log(button2.innerText)
    //console.log(button3.innerText)
    //console.log(button4.innerText)
    //console.log(questionBank[questionIndex].correct)

}
// }


function buttonHidden() {

    document.querySelector("#home").classList.add("hidden")
    //console.log("The buttons have gone")
    hiddenQuestion.classList.remove("hidden-question")
    hiddenQuestion.classList.add("visible-question");
    highScorePage.classList.remove("visible-scores")
    highScorePage.classList.add("hidden-scores")
    loadQuestion();
}


// Start quiz button
playBtn.addEventListener("click", startQuiz);

// ViewHigh score button function

highscoreBtn.addEventListener("click", viewScore)



// Button Answering Functions
button1.addEventListener("click", function () {

    if (button1.innerText === questionBank[questionIndex].correct) {
        // //console.log("YAY")
        score = score + 5 + (secondsLeft * 1.3)
        scoreSpan.textContent = score + " points";
        //console.log(score)
        questionIndex = questionIndex + 1
        loadQuestion()
    } else {
        //console.log("Waahhh");
        // //console.log(score);
        questionIndex = questionIndex + 1;
        secondsLeft = secondsLeft - 5;
        loadQuestion()
    }
})
button2.addEventListener("click", function () {
    if (button2.innerText === questionBank[questionIndex].correct) {
        //console.log("YAY")
        score = score + 5 + (secondsLeft * 1.3)
        scoreSpan.textContent = score + " points";
        //console.log(score)
        questionIndex = questionIndex + 1
        loadQuestion()
    } else {
        //console.log("Waahhh");
        //console.log(score);
        questionIndex = questionIndex + 1;
        secondsLeft = secondsLeft - 5;
        loadQuestion()
    }
})
button3.addEventListener("click", function () {
    if (button3.innerText === questionBank[questionIndex].correct) {
        //console.log("YAY");
        score = score + 5 + (secondsLeft * 1.3)
        scoreSpan.textContent = score + " points";
        //console.log(score)
        questionIndex = questionIndex + 1
        loadQuestion()
    } else {
        //console.log("Waahhh");
        //console.log(score);
        questionIndex = questionIndex + 1;
        secondsLeft = secondsLeft - 5;
        loadQuestion()
    }
})
button4.addEventListener("click", function () {
    if (button4.innerText === questionBank[questionIndex].correct) {
        //console.log("YAY")
        score = score + 5 + (secondsLeft * 1.3)
        scoreSpan.textContent = score + " points";
        //console.log(score)
        questionIndex = questionIndex + 1
        loadQuestion()
    } else {
        //console.log("Waahhh");
        //console.log(score);
        questionIndex = questionIndex + 1;
        secondsLeft = secondsLeft - 5;
        loadQuestion()
    }
})






function viewScore() {
    //console.log("You want to see scores.")
    document.querySelector("#home").classList.add("hidden")
    //console.log("The buttons have gone")
    hiddenQuestion.classList.remove("visible-question")
    hiddenQuestion.classList.add("hidden-question");
    highScorePage.classList.remove("hidden-scores")
    highScorePage.classList.add("visible-scores")


}


// TODO: Endgame Function.
// To run when win conditions met.

// function gameOver() {
//     hiddenQuestion.classList.remove("visible-question")
//     hiddenQuestion.classList.add("hidden-question");
//     highScorePage.classList.add("hidden-scores")
//     highScorePage.classList.remove("visible-scores")
//     endscreen.classList.add("visible-gameOver")
//     endscreen.classList.remove("hidden-gameOver")
//     enterScore()
// }
// //To run when the game is finished.

// function enterScore() {
//     var userInitials = prompt("Enter your name");
//     localStorage.setItem(userInitials, score)
//     // i think i alreadty have a style
//     for (let i = o; i < localStorage.length; i++) {
//         let li = document.createElement('li')
//         //console.log(localStorage.key(i))
//         highScores.appendchild(li)
//         li.textContent = localStorage.key(i) + ': ' + localStorage.getItem(localStorage.key(i))
//     }
// }


