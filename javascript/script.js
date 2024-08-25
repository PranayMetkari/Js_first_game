let userScore = 0 ;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score")
const genComputerchoice = () => {
   const option = ["rock" , "paper" , "scissor"];
   const randIdx = Math.floor(Math.random() *3);
   return option[randIdx];
} 


const drawgame = () => {
    // console.log("game was draw");
    msg.innerText = "Game Draw !";
    msg.style.backgroundColor = "blue";
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win !";
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lose !";
        msg.style.backgroundColor = "red";
    }
}
const playgame = (userchoice) => {
    console.log("user choice = ", userchoice);
    const compChoice = genComputerchoice();
    console.log("comp choice = ",compChoice);
    if(userchoice == compChoice){
        drawgame();
    }
    else{
        let userWin = true;
        if(userchoice === "rock"){
            userWin = compChoice === "paper"? false:true;
        }
        else if(userchoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);
    })
})