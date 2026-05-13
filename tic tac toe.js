let boxes=document.querySelectorAll(".box");
let reset= document.querySelector("#reset");
let newgame=document.querySelector("#newgame");
let message=document.querySelector(".message");
let msg=document.querySelector("#msg");
let count=0;
let turno=true;
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame=()=>{
    turno=true;
    count=0;
    enablebox();
    message.classList.add("hide");
}
boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        
        if(turno){
        box.innerText="O";
        turno=false;
        }else {
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        count++;
    checkwin();
    if(count===9){
        gamedraw();
    }
    });
});
const gamedraw = () => {
    msg.innerText = "It's A Draw!";
    message.classList.remove("hide");
    disablebox();
};
const disablebox=()=>{
for(let box of boxes){
    box.disabled=true;
}
};
const enablebox=()=>{
for(let box of boxes){
    box.disabled=false;
    box.innerText="";
}
};
const showwinner=(winner)=>{
    msg.innerText=`Congratulation! Winner Is ${winner}`;
    message.classList.remove("hide");
    disablebox();
}

const checkwin= ()=>{
    for(let pattern of win){
       
          let pos1val=boxes[pattern[0]].innerText;
       let pos2val=boxes[pattern[1]].innerText;
       let pos3val=boxes[pattern[2]].innerText;
            if(pos1val!=""&& pos2val!="" && pos3val!=""){
                if(pos1val===pos2val&&pos2val===pos3val){
                    console.log("winner",pos1val);
                    showwinner(pos1val);
                }
            }

       
    }
};

reset.addEventListener("click", resetgame);
newgame.addEventListener("click", resetgame);