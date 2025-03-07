let gameSeq = [];
let userSeq = [];
let color = ["yellow","red","green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function() {
    if(started==false){
        console.log("Game started");
        started=true;
    }

    levelUp();
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },200);
}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randCol = color[randIdx];
    let randBtn = document.querySelector(`.${randCol}`)
    gameSeq.push(randCol);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
    if(gameSeq[idx]===userSeq[idx]){
        if(gameSeq.length===userSeq.length){
            setTimeout(levelUp(),1000);
        }
    } else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b><br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);
        reset();
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);

    userCol=btn.getAttribute("id");
    userSeq.push(userCol);

    checkAns(userSeq.length-1);
}

let btns = document.querySelectorAll(".btn");
for(btn of btns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}