const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)


const questionE = document.getElementById("question");
const formE = document.getElementById('form')
const inputE = document.getElementById('input')
const scoreE = document.getElementById('score')

questionE.innerText = `What is ${num1} multiply by ${num2} ?`
const correctAns = num1 * num2

let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
    score = 0;
}


function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}

formE.addEventListener("submit", () => {
    const userAns = parseInt(inputE.value)
    if (userAns == correctAns) {
        score++;
        updateLocalStorage();
    }
    else {
        score--;
        updateLocalStorage();
    }


})
scoreE.innerText = `Your Score : ${score}`
