function getComputerChoice(){
    const a = Math.round(Math.random()*3);
    let b;
    if(a == 0){
        b = "Rock"
    }
    else if(a == 1){
        b = "Paper"
    }
    else{
        b = "Scissors"
    }
    return b;
}
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection == computerSelection)
        return "Draw! Play Again"
    if(playerSelection == "rock" && computerSelection == "paper")
        return "You lose! Paper beats Rock"
    if(playerSelection == "rock" && computerSelection =="scissors")
        return "You win! Rock beats Scissors"


    if(playerSelection == "scissors" && computerSelection == "paper")
        return "You win! Scissors beats Paper"
    if(playerSelection == "scissors" && computerSelection == "rock")
        return "You lose! Rock beats Scissors"

    if(playerSelection == "paper" && computerSelection == "rock")
        return "You win! Paper beats Rock"
    if(playerSelection == "paper" && computerSelection == "scissors")
        return "You lose! Scissors beats Paper"
    
}

function game(){
    var userCount = 0;
    var computerCount = 0;
    var userInput;
    var winner;
    for(i = 0; i < 5; i++){
        userInput = prompt("Make your selection")
        winner = playRound(userInput, getComputerChoice())
        if(winner == "You win! Rock beats Scissors" || winner == "You win! Scissors beats Paper" || winner == "You win! Paper beats Rock")
            userCount++;
        else if(winner == "You lose! Paper beats Rock" || winner == "You lose! Rock beats Scissors" || winner == "You lose! Scissors beats Paper")
            computerCount++;
    }

    if(userCount > computerCount)
        return "You win!";
    else if( computerCount> userCount)
        return "You lose!";
    else{
        return "Draw";
    }
}

alert(game());

    
