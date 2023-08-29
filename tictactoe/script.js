const boxes = document.querySelectorAll(".box");
const gameinfo = document.querySelector(".info");
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPositions = [
    // horizontal
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    // vertical
    [0, 3, 6],
    [1, 4, 7], 
    [2, 5, 8], 
    // diagonal
    [0, 4, 8],
    [2, 4, 6]
];

function initGame(){
    currentPlayer = "X";
    gameGrid=["","","","","","","","",""];
    boxes.forEach((box, index) =>{
        box.innerHTML="";
        boxes[index].styles.pointerEvents = "all";
        // have to remove green as well
    })
    newGameBtn.classList.add("active");
    gameinfo.innerHTML = `Current Player - ${currentPlayer}`;
}

initGame();

function swapTurn(){
    if(currentPlayer === "X"){
        currentPlayer = "O";
    }
    else{
        currentPlayer = "X";
    }
    gameinfo.innerHTML = `Current Player - ${currentPlayer}`;
}

function checkGameOver(){
    let answer = "";
    
}
function handleClick(index){
    if(gameGrid[index] === ""){
        boxes[index].innerHTML = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        // swap the turn
        swapTurn();
        checkGameOver();
    }
}
boxes.forEach((box, index)=>{
    box.addEventListener('click', ()=>{
        handleClick(index);
    })
})

newGameBtn.addEventListener('click', initGame);