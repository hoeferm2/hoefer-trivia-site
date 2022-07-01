


function showScore() {
    //
    clearInterval(window.timeinterval);
    var userInitials = prompt("Enter your name");
    localStorage.setItem(userInitials, score)
    // i think i alreadty have a style
    for (let i = o; i < localStorage.length; i++) {
        let li = document.createElement('li')
        console.log(localStorage.key(i))
        highScores.appendchild(li)
        li.textContent = localStorage.key(i) + ': ' + localStorage.getItem(localStorage.key(i))
    }
}

