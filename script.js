let palpTile;
let yodaTile;

let score =0;
let gameOver = false;

window.onload = function(){
    setGame();
}

function setGame(){
    //setup game board grid
    for (let i =0; i <9; i++){ //i goes from 0 - 8 so total 9
        let tile =document.createElement("div") // creating div tags <div></div>
        tile.id=i.toString(); //assign each tile an id
        
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setPalp,1000); //2000ms or 2 secs
    setInterval(setYoda,3000);
}

function randomTile() {
    let num = Math.floor(Math.random()*9); //math random gives no b/w 0-1 and mul by 9 so you get some no b/w 0-9, so then you floor to get lowest
    return num.toString(); //making string so that it can match tile id
}



function setPalp() {
    if (gameOver){
        return;
    }
    if (palpTile){
        palpTile.innerHTML="";
    }
    let palp =document.createElement("img");
    palp.src = "./images/palp.png"
    let num = randomTile(); //number of the tile assigned randomly to put palp into it
    if (palpTile && palpTile.id==num){ // to make sure they dont land on the same tile
        return;
    }
    palpTile = document.getElementById(num);
    palpTile.appendChild(palp);
}



function setYoda() {
    if (gameOver){
        return;
    }
    if (yodaTile){
        yodaTile.innerHTML=""; //if it exits, make the string empty
    }
    let yoda =document.createElement("img");
    yoda.src="./images/baby_yoda.webp"
    let num = randomTile();
    if (palpTile && palpTile.id==num){ // if the number of tile for palp is the same as num then we dont set number for yoda
        return;
    }
    yodaTile = document.getElementById(num);
    yodaTile.appendChild(yoda);
}

function selectTile (){
    if (gameOver){
        return;
    }
    if (this==palpTile){ //checking if this is palp tile so we can give score
        score = score +10;
        document.getElementById("score").innerText=score.toString(); //update score on website
    }
    else if (this ==yodaTile){ //game over guys

        document.getElementById("score").innerText ="GAME OVER: " + score.toString();
        gameOver=true;

    }
}

