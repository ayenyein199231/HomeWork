let msg1 = document.querySelector(".msg1");
let msg2 = document.querySelector(".msg2");
let msg3 = document.querySelector(".msg3");
let gameBorder = document.getElementById("gameBorder");

let chance = 10;
let guessedNum = [];
let answer = Math.floor(Math.random()*50) + 1;

msg2.textContent = "Number of chance to guess : " + chance;

msg3.textContent = "Guessed number are : " + guessedNum;

function play(){
    let guessNum = Number(document.getElementById("guessNum").value);
    console.log(guessNum);
    console.log(answer);

    if(guessNum < 1 || guessNum > 50){
        alert("Please enter between 1 to 50")
    }else{
        if(guessNum > answer){
            msg1.textContent = "Your number is too height ";
            chance--;
            msg2.textContent = "Number of chance to guess : " + chance;

            gameBorder.classList.add("wrong");
            guessNum.value = " ";

            guessedNum.push(guessNum);
            msg3.textContent = "Guessed number are : " + guessedNum;

            document.getElementById("guessNum").value = "";

        }else if(guessNum < answer){
            msg1.textContent = "Your number is too low ";
            chance--;
            msg2.textContent = "Number of chance to guess : " + chance;

            gameBorder.classList.add("wrong");
            guessNum.value = " ";

            guessedNum.push(guessNum);
            msg3.textContent = "Guessed number are : " + guessedNum;

            document.getElementById("guessNum").value = "";

        }else{
               msg1.textContent = "Congulation You Won this game !!"; 
               gameBorder.classList.add("true");
               document.querySelector(".btn-guess").disabled = true;
        }

            if(chance <= 0){
                    document.querySelector(".btn-guess").disabled = true;
                    alert("Your change is empty / Please Restart the game.")
                }

    }


    
}




function restart(){

    document.getElementById("guessNum").value = "";
    msg1.textContent = "Your game successfully restart !!";
    chance = 10;
    msg2.textContent = "Number of chance to guess : " + chance;
    guessedNum = [];
    msg3.textContent = "Guessed number are : " + guessedNum;
    gameBorder.classList.remove("true");
    gameBorder.classList.remove("wrong");
    answer = Math.floor(Math.random()*50) + 1;
    document.querySelector(".btn-guess").disabled = false;
    console.log(answer);

}