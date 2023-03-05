let palpTile;

window.onload = function(){
    setGame();
}

function setGame(){
    //setup game board grid
    for (let i =0; i <9; i++){ //i goes from 0 - 8 so total 9
        let tile =document.createElement("div") // creating div tags <div></div>
        tile.id=i.toString(); //assign each tile an id
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setPalp,2000); //2000ms or 2 secs
}

function randomTile() {
    let num = Math.floor(Math.random()*9); //math random gives no b/w 0-1 and mul by 9 so you get some no b/w 0-9, so then you floor to get lowest
    return num.toString(); //making string so that it can match tile id
}



function setPalp() {
    if (palpTile){
        palpTile.innerHTML="";
    }



    let palp =document.createElement("img");
    palp.src = "./images/palp.webp"
    let num = randomTile(); //number of the tile assigned randomly to put palp into it
    palpTile = document.getElementById(num);
    palpTile.appendChild(palp);


}
