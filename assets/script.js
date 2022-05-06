var timer = document.getElementById("time")
var start = document.getElementById("beginning")
var questiontext = document.getElementById("question")
var timeinterval
var Liban = 60
var x = 0
var olEL = document.getElementById("choices")
var Luffy = document.getElementById("1")
var Madara = document.getElementById("2")
var Zoro = document.getElementById("3")
var score = document.getElementById("score")
var points = 0
var finalScoreEl = document.getElementById("Finalscore")
var InitialsEl = document.getElementById("Initial")
var endscreenEl = document.getElementById("endscreen")
var submitEl = document.getElementById("submit")
var formEl = document.getElementById("form")

var question = [
    { question: "who is the greatest MC?", choices: ["Eren", "Kaneki", "Naruto"], answer: "Eren" },
    { question: "What is the most overated anime", choices: ["Onepiece", "naruto", "None"], answer: "None" },
    { question: "Anime of the decade?", choices: ["Onepiece", "Naruto", "Attack on Titan"], answer: "Attack on Titan" }
]
function Kenny() {
    questiontext.textContent = question[x].question
    for (let i = 0; i < question[x].choices.length; i++) {
        question[x].choices
        if (i === 0) {
            Luffy.innerText = question[x].choices[i]
            Luffy.addEventListener("click", userchoice)
        } else if (i === 1) {
            Madara.innerText = question[x].choices[i]
            Madara.addEventListener("click", userchoice)
        } else {
            Zoro.innerText = question[x].choices[i]
            Zoro.addEventListener("click", userchoice)
        }
    }
}
start.addEventListener("click", function () {
    timeinterval = setInterval(() => {
        if (Liban > 0) {
            Liban--;
            timer.textContent = Liban
        }
    }, 1000);
    start.setAttribute("style", "display:none")
    Kenny()
})
function userchoice() {
    if (question[x].answer === this.innerHTML) {
        points++;
        score.textContent = points;
    } else {
        Liban -= 5
    }
    if (x < question.length - 1) {
        x++
        Kenny()
    } else {
        endgame()
    }
}
function endgame() {
    console.log("game", endscreenEl)
    clearInterval(timeinterval)
    timer.setAttribute("style","display:none")
    questiontext.setAttribute("style","display:none")
    olEL.setAttribute("style","display:none")
    endscreenEl.setAttribute("style","display:block")
    formEl.setAttribute("style","display:block")

}
