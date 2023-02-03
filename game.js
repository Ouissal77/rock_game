function getComputerChoice() {
    const choices=["Rock","Paper","Scissors"];
   random =choices[Math.floor(Math.random()*(choices.length))];
    return random;
}



function round(computer,player) 
{
    player=player.charAt().toUpperCase() + player.slice(1).toLowerCase();
    if (player ==="Rock" || player ==="Paper" || player ==="Scissors")
    {
        if (player === computer) {
            alert("it's a tie darlin")
            return ("it's a tie !! try again");
        }
        else if ((player === "Rock" && computer === "Paper") || 
                (player === "Paper" && computer === "Scissors") || 
                (player === "Scissors" && computer === "Rock")) 
                    {
                        console.log(("You lose !" + player + " defeat " + computer))
                        alert(("You lose !" + player + " defeat " + computer))
                    return 0;
                    }
        else {
            console.log("You win! " + player + " defeat " + computer);
            alert("You win! " + player + " defeat " + computer);
            return 1;}
    }
    else {
        alert("please enter a proper choice");
    return ("not valid")}

}
   

function game()
{
    let m=0,k=0;
    for (let i = 0; i < 3; i++) {
        
        player = prompt("what's your play now! ");
       
        z=round(getComputerChoice(),player);
        console.log(z);
       
        if (z===0) m=m+1;
        else if (z===1) k=k+1;

    }
    if (m>k) {console.log("you lost this game"); alert("you lost this game");}
    else if (m<k) {console.log("You Are a winner of this Round"); alert("You Are a winner of this Round");}
    else {console.log("no one wins lol"); alert("no one wins lol!!!");}
}

game();
