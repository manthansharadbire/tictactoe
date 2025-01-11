
const board =[-1, -1, -1, -1, -1, -1, -1, -1, -1];
let currentPlayer = '🏏';
function renderBoard(){
const allBoxes = document.querySelectorAll('.box');
allBoxes.forEach((boxElement, i)=>{
if(board[i]=='🏏'){
boxElement.innerHTML = '<img src="./images/player1.png" height="80px"/>';
}
else if(board[i]=='🏀'){
boxElement.innerHTML = '<img src="./images/player2.png" height="70px"/>';
}
else{
boxElement.innerHTML = '';
}
})
}
renderBoard();

function selectBox(boxNumber){
    if (board[boxNumber] !== -1){
        alert('Invalid Move')
        return;
    }
board[boxNumber] = currentPlayer;
renderBoard();
if (currentPlayer === "🏏"){
    currentPlayer = "🏀";
} else {
    currentPlayer = "🏏";
}

const currentPlayerElement = document.getElementById("currentPlayer");
currentPlayerElement.innerText = currentPlayer;
}

function resetBoard(){
    board.fill(-1);
    renderBoard();

    currentPlayer = "🏏";
    const currentPlayerElement = document.getElementById("currentPlayer");
    currentPlayerElement.innerText = currentPlayer;
}

function isPlayerPresent(places, player){
    const a = places[0];
    const b = places[1];
    const c = places[2];

    if(board[a] == player && board[b] == player && board[c] == player){
        return true;
    }
    else{
        return false;
    }
}

function checkForWinner(){
if (isPlayerPresent([0,1,2], "🏏")){
    alert("Player 🏏 wins");
}
else if(isPlayerPresent([3,4,5], "🏏")){
    alert("Player 🏏 wins");
}
else if(isPlayerPresent([6,7,8], "🏏")){
    alert("Player 🏏 wins");
}
else if(isPlayerPresent([0,3,6], "🏏")){
    alert("Player 🏏 wins");
}
else if(isPlayerPresent([1,4,7], "🏏")){
    alert("Player 🏏 wins");
}
else if(isPlayerPresent([2,5,8], "🏏")){
    alert("Player 🏏 wins");
}
else if(isPlayerPresent([0,4,8], "🏏")){
    alert("Player 🏏 wins");
}
else if(isPlayerPresent([2,4,6], "🏏")){
    alert("Player 🏏 wins");
}

if (isPlayerPresent([0,1,2], "🏀")){
    alert("Player 🏀 wins");
}
else if(isPlayerPresent([3,4,5], "O")){
    alert("Player 🏀 wins");
}
else if(isPlayerPresent([6,7,8], "O")){
    alert("Player 🏀 wins");
}
else if(isPlayerPresent([0,3,6], "O")){
    alert("Player 🏀 wins");
}
else if(isPlayerPresent([1,4,7], "O")){
    alert("Player 🏀 wins");
}
else if(isPlayerPresent([2,5,8], "O")){
    alert("Player 🏀 wins");
}
else if(isPlayerPresent([0,4,8], "O")){
    alert("Player 🏀 wins");
}
else if(isPlayerPresent([2,4,6], "O")){
    alert("Player 🏀 wins");
}

}
