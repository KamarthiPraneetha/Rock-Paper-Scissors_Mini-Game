let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const usersco=document.querySelector("#user-score");
const compsco=document.querySelector("#comp-score");

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randInx=Math.floor(Math.random()*3);
    return options[randInx];
}

const draw=()=>{
    console.log("game was draw");
    msg.innerText=("game is draw");
    msg.style.background="rgba(0, 0, 255, 0.225)";
}

const showwinner=(userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        usersco.innerText=userscore;
        console.log("you win");
        msg.innerText=("you win your"+" "+userchoice+" " +"beats" +" "+compchoice);
        msg.style.background="green";
    }else{
        compscore++;
        compsco.innerText=compscore;
        console.log("you lose");
        msg.innerText=("you loose "+" "+compchoice+" " +"beats your" +" "+userchoice);
        msg.style.background="red";
    }

}

const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    //generate computer choice
    const compchoice=gencompchoice();
    console.log("comp choice=",compchoice);
    if (userchoice === compchoice) {
        //Draw Game
        draw();
      } else {
        let userWin = true;
        if (userchoice === "rock") {
          //scissors, paper
          userWin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
          //rock, scissors
          userWin = compchoice === "scissors" ? false : true;
        } else {
          //rock, paper
          userWin = compchoice === "rock" ? false : true;
        }
        showwinner(userWin, userchoice, compchoice);
      }
    };

    


choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });

});