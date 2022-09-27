const selections = document.querySelectorAll(".selection");

let pScore = 0;
let cScore = 0;

selections.forEach((selection) => {
    selection.addEventListener("click", function() {
        const pInput = this.value;

        const cOptions = ["rock", "paper", "scissors"];
        const cInput = cOptions[Math.floor(Math.random() * 3)];

        updateMoveImgs(pInput, cInput);
        compareInputs(pInput, cInput);
        updateScore();
        if (checkWinner()) {
            pScore = cScore = 0;
            updateScore();
        };
    })
});

function updateMoveImgs(pInput, cInput) {
    document.getElementById("p-move").src = `./img/${pInput}.svg` ;
    document.getElementById("c-move").src = `./img/${cInput}.svg` ;
}

function compareInputs (pInput, cInput) {
    if (pInput === cInput ) {
        document.getElementById("result-text").innerHTML = "Draw!";
        return;
    }

    if(pInput === "rock") {
        if(cInput == "scissors") {
        document.getElementById("result-text").innerHTML = "You win!";
        pScore++;
        }
        else {
            document.getElementById("result-text").innerHTML = "Computer wins!";
            cScore++;
        }
    }
    if(pInput === "paper") {
        if(cInput == "rock") {
        document.getElementById("result-text").innerHTML = "You win!";
        pScore++;
        }
        else {
            document.getElementById("result-text").innerHTML = "Computer wins!";
            cScore++;
        }
    }
    if(pInput === "scissors") {
        if(cInput == "paper") {
        document.getElementById("result-text").innerHTML = "You win!";
        pScore++;
        }
        else {
            document.getElementById("result-text").innerHTML = "Computer wins!";
            cScore++;
        }
    }
}

function updateScore() {
    document.getElementById("p-score").innerHTML = pScore;
    document.getElementById("c-score").innerHTML = cScore;
}

function checkWinner() {
    if(pScore === 5 || cScore === 5) {
        const winner = pScore === 5
        ? "You won the game! Good job!"
        : "Computer won the game, you lost!";
        document.getElementById("result-text").innerHTML = winner;
        return true;
    }
    return false;
}