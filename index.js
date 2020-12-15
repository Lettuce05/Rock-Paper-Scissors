function computerPlay(){
    let choices = ['rock','paper','scissors'];
    let randomInt = Math.floor(Math.random() * 3);
    return choices[randomInt];
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

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        //get player selection
        playerSelection = prompt("Choose Rock, Paper, or Scissors:");
        playerSelection = playerSelection.toLowerCase();
        //get computer selection
        computerSelection = computerPlay();
        //play round
        let result = playRound(playerSelection, computerSelection);
        //update score
        if(result == 1){
            playerScore++;
        } else if(result == 2){
            computerScore++;
        }
        //output results
        if(i == 4){
            if(playerScore > computerScore){
                console.log(`You Win! Player: ${playerScore} Computer: ${computerScore}`);
            } else if(computerScore > playerScore){
                console.log(`You Lose! Player: ${playerScore} Computer: ${computerScore}`);
            } else if(computerScore == playerScore){
                console.log(`Tie Game! Player: ${playerScore} Computer: ${computerScore}`);
            }
        } else {
            console.log(`Player: ${playerScore} Computer: ${computerScore}`);
        }
    }
}

game();