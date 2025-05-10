let Userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
 const compScorePara = document.querySelector("#com-score");
const gencompchoice=()=>{
    const option=["rock" ,"paper" ,"scissor"];
    const randID= Math.floor(Math.random()*3);
    return option[randID];


};
const draw=() =>{
    
    msg.innerText="game draw";
    msg.style.backgroundColor="red";
};

const showwiner=(userwin,userchoice,comchoice)=>{
    if(userwin){
        Userscore++;
     userScorePara.innerText = Userscore;
        
        
        console.log("you win");
        msg.innerText=`you win your ${userchoice} beat  ${comchoice}`;
       msg.style.backgroundColor="green";
    }
    else{
        compscore++;
     compScorePara.innerText = compscore;
      
        msg.innerText=`you lose ,your ${userchoice} beated by ${comchoice}`;
        msg.style.backgroundColor="blue";
    }
};
const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    const comchoice=gencompchoice();
    console.log("com choice=" ,comchoice);


if( userchoice===comchoice){
    draw();
}
else{
    let userwin=true;
    if(userchoice==="rock"){
        userwin=comchoice==="paper"?false: true;
    }
    else if(userchoice==="paper"){
        userwin=comchoice==="scissor"?false:true
    }
    else{
        userwin=comchoice==="rock"?false:true;
    }
    showwiner(userwin,userchoice,comchoice);
}
};

choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        
      
        playgame(userchoice);
        
});
});











