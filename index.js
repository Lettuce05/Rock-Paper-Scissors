function computerPlay(){
    let choices = ['rock','paper','scissors'];
    let randomInt = Math.floor(Math.random() * 3);
    return choices[randomInt];
}

function addCpuIllustration(cpuChoice, cpuButton, cpuImage){
    if(cpuChoice == "rock"){
        cpuButton.classList.add("rock");
        cpuButton.classList.add("rock-selected");
        cpuImage.src = "./img/icon-rock.svg";
    } else if(cpuChoice == "paper"){
        cpuButton.classList.add("paper");
        cpuButton.classList.add("paper-selected");
        cpuImage.src = "./img/icon-paper.svg";
    } else if(cpuChoice == "scissors"){
        cpuButton.classList.add("scissors");
        cpuButton.classList.add("scissors-selected");
        cpuImage.src = "./img/icon-scissors.svg";
    }
    cpuButton.appendChild(cpuImage);
    game.appendChild(cpuButton);
}

function updateScore(result){
    let temp;
    if(result == 1){
        temp = parseInt(userScore.innerText);
        temp++;
        userScore.innerText = String(temp);
    } else if(result == 2){
        temp = parseInt(cpuScore.innerText);
        temp++;
        cpuScore.innerText = String(temp);
    }
}

function playRound(playerSelection, computerSelection){
    let p = playerSelection;
    let c = computerSelection;
    if(p == c){
        console.log("It was a tie!");
        return 0;
    } else if(p == "rock" && c == "scissors" || p == "scissors" && c == "paper" || p == "paper" && c == "rock"){
        console.log(`You Win! ${p} beats ${c}`);
        return 1;
    } else if(c == "rock" && p == "scissors" || c == "scissors" && p == "paper" || c == "paper" && p == "rock"){
        console.log(`You Lose! ${c} beats ${p}`);
        return 2;
    }
}

function displayResult(result, cpuButton, cpuImage){
    let resultText = document.createElement("div");
    resultText.classList.add("result-text");
    if(result == 1){
        resultText.innerText = "YOU WIN";
    } else if(result == 2){
        resultText.innerText = "YOU LOSE";
    } else {
        resultText.innerText = "TIE";
    }
    game.appendChild(resultText);
    let resultButton = document.createElement("button");
    resultButton.classList.add("result-button");
    if(parseInt(userScore.innerText) < 5 && parseInt(cpuScore.innerText) < 5){
        resultButton.innerText = "NEXT ROUND";
    } else {
        resultButton.innerText = "PLAY AGAIN";
    }
    game.appendChild(resultButton);
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const triangle = document.querySelector(".triangle");
const game = document.querySelector(".game");
const userText = document.querySelector(".user-selection");
const cpuText = document.querySelector(".cpu-selection");
const userScore = document.querySelector(".user-score");
const cpuScore = document.querySelector(".cpu-score");

rock.addEventListener("click", ()=>{
    paper.classList.toggle("not-selected");
    scissors.classList.toggle("not-selected");
    triangle.classList.toggle("not-selected");
    rock.classList.toggle("user-selected");
    userText.classList.toggle("initial-state");
    cpuText.classList.toggle("initial-state");
    const cpuButton = document.createElement("button");
    const cpuImage = document.createElement("img");
    let cpuChoice = computerPlay();
    addCpuIllustration(cpuChoice, cpuButton, cpuImage);
    let result = playRound("rock", cpuChoice);

    updateScore(result);
    displayResult(result);

    const resultButton = document.querySelector(".result-button");
    const resultText = document.querySelector(".result-text");

    resultButton.addEventListener("click", ()=>{
        if(userScore.innerText == "5" || cpuScore.innerText == "5"){
            userScore.innerText = "0";
            cpuScore.innerText = "0";
        }
        resultButton.remove();
        resultText.remove();
        cpuButton.remove();
        paper.classList.toggle("not-selected");
        scissors.classList.toggle("not-selected");
        triangle.classList.toggle("not-selected");
        rock.classList.toggle("user-selected");
        userText.classList.toggle("initial-state");
        cpuText.classList.toggle("initial-state");
    });
});

paper.addEventListener("click", ()=>{
    rock.classList.toggle("not-selected");
    scissors.classList.toggle("not-selected");
    triangle.classList.toggle("not-selected");
    paper.classList.toggle("user-selected");
    userText.classList.toggle("initial-state");
    cpuText.classList.toggle("initial-state");
    const cpuButton = document.createElement("button");
    const cpuImage = document.createElement("img");
    let cpuChoice = computerPlay();
    addCpuIllustration(cpuChoice, cpuButton, cpuImage);
    let result = playRound("paper", cpuChoice);
    updateScore(result);
    displayResult(result, cpuButton, cpuImage);

    const resultButton = document.querySelector(".result-button");
    const resultText = document.querySelector(".result-text");

    resultButton.addEventListener("click", ()=>{
        if(userScore.innerText == "5" || cpuScore.innerText == "5"){
            userScore.innerText = "0";
            cpuScore.innerText = "0";
        }
        resultButton.remove();
        resultText.remove();
        cpuButton.remove();
        rock.classList.toggle("not-selected");
        scissors.classList.toggle("not-selected");
        triangle.classList.toggle("not-selected");
        paper.classList.toggle("user-selected");
        userText.classList.toggle("initial-state");
        cpuText.classList.toggle("initial-state");
    });
});

scissors.addEventListener("click", ()=>{
    paper.classList.toggle("not-selected");
    rock.classList.toggle("not-selected");
    triangle.classList.toggle("not-selected");
    scissors.classList.toggle("user-selected");
    userText.classList.toggle("initial-state");
    cpuText.classList.toggle("initial-state");
    const cpuButton = document.createElement("button");
    const cpuImage = document.createElement("img");
    let cpuChoice = computerPlay();
    addCpuIllustration(cpuChoice, cpuButton, cpuImage);
    let result = playRound("scissors", cpuChoice);
    updateScore(result);
    displayResult(result);

    const resultButton = document.querySelector(".result-button");
    const resultText = document.querySelector(".result-text");

    resultButton.addEventListener("click", ()=>{
        if(userScore.innerText == "5" || cpuScore.innerText == "5"){
            userScore.innerText = "0";
            cpuScore.innerText = "0";
        }
        resultButton.remove();
        resultText.remove();
        cpuButton.remove();
        paper.classList.toggle("not-selected");
        rock.classList.toggle("not-selected");
        triangle.classList.toggle("not-selected");
        scissors.classList.toggle("user-selected");
        userText.classList.toggle("initial-state");
        cpuText.classList.toggle("initial-state");
    });
});