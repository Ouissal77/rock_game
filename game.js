function getComputerChoice() {
    const choices=["Rock","Paper","Scissors"];
   random =choices[Math.floor(Math.random()*(choices.length))];
    return random;
}



function round(computer,player) 
{
    let result = document.querySelector(".result");
    player=player.charAt().toUpperCase() + player.slice(1).toLowerCase();

    if (player ==="Rock" || player ==="Paper" || player ==="Scissors")
    {
        if (player === computer) {
           result.innerHTML= "it's a tie , Try Again";
           // return ("it's a tie !! try again");
        }
        else if ((player === "Rock" && computer === "Paper") || 
                (player === "Paper" && computer === "Scissors") || 
                (player === "Scissors" && computer === "Rock")) 
                    {
                        result.innerHTML= "You Lost " + computer + " defeat " + player

                       // console.log( "You Lost");
                        //alert(("You lose !" + computer + " defeat " + player))
                    return 0;
                    }
        else {
            //console.log("You win! " + player + " defeat " + computer);
            result.innerHTML="You win! " + player + " defeat " + computer;
            //alert("You win! " + player + " defeat " + computer);
            return 1;}
    }
    else {
        alert("please enter a proper choice");
    //return ("not valid");
}

}
   

function game()
{
    let m=0,k=0;
    let z;
    let count=0;
    
        
        const buttons = document.querySelectorAll('.circle');
        const player=document.querySelector('.playerResult');
        const computerr=document.querySelector('.computerResult');
        const rround=document.querySelector('.rround');

    buttons.forEach((btn) => {

        // and for each one we add a 'click' listener
        btn.addEventListener('click', () => {
        count++;
        console.log(count);
        rround.innerHTML=count;
      
           z=round(getComputerChoice(), btn.firstElementChild.className);
           console.log(z);
           if (z===0) m=m+1;
        else if (z===1) k=k+1;
       player.innerHTML=k;
       computerr.innerHTML=m;
       
        if (count === 5) {
            count= 0;
            
            let result = document.querySelector(".result");
            if (m>k) { //console.log("you lost this game"); alert("you lost this game");
            
            result.innerHTML="you lost this game with " + m + " to " + k; }
            else if (m<k) {
            result.innerHTML="You Are a winner of this Round with " + k + " to " + m;}
            else {result.innerHTML="No one Wins , it's a Tie !" +m+" to " +k;
               // console.log("no one wins lol"); alert("no one wins lol!!!");
            }
            m=0;
            k=0;
          }
        });
      });
      

      
       

}


//game();
/*function game2(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach((btn) => {

        // and for each one we add a 'click' listener
        btn.addEventListener('click', () => {
            round(getComputerChoice(), btn.innerHTML);
        });
      });
    
}
//game2();*/


game();


const element = document.querySelectorAll('.circle');

element.forEach((ele) => {
    ele.addEventListener('click', () => {
 
  ele.classList.add('move-right');})
});
function removeTransition(e){
//console.log(e);
element.forEach( (ele) => {
    ele.classList.remove('move-right');
})

}


element.forEach( (ele) => {
ele.addEventListener('animationend', removeTransition );
}) 


