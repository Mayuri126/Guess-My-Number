
var random_num = Math.floor(Math.random()*20) + 1 ;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
}

function makesound(){
    var audio = new Audio("./audio.mp3");
    audio.play();
}

document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value);
   
    var activeButton= document.querySelector(".check");
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 200);

    makesound();
    
    // No input number

    if(!guess){
        displayMessage ("🚫 No number!");
    }
    
    // Player wins

    else if(guess === random_num){

        document.querySelector(".number").textContent = random_num;
        displayMessage("🎉 Correct Number!");
        document.querySelector("body").style.backgroundColor = "#60b347"
        document.querySelector(".number").style.width = "30rem";
        
        if(score > highscore){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    }

    // guess is not correct === guess is high number and and guess is low number 

    else if(guess !== random_num){
        if(score > 1){
            // document.querySelector(".message").textContent = guess > random_num ? "📈 Too High!" : "📉 Too Low!";
            displayMessage(guess > random_num ? "📈 Too High!" : "📉 Too Low!");
            score--;
            document.querySelector(".score").textContent = score;
            document.querySelector("body").style.backgroundColor = "#d83131"
        }
        else{
            document.querySelector(".message").textContent = "💥 Lost The game!"
            document.querySelector(".score").textContent = 0;
        }
    }
});

document.querySelector(".again").addEventListener("click",function(){
    score = 20;
    random_num = Math.floor(Math.random()*20) + 1 
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#d56d3d";
    displayMessage("Start guessing...");
    document.querySelector(".guess").value =  "";
    var activeButton= document.querySelector(".again");
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 200);

    makesound();
});


// guess is high number

//     else if(guess > random_num){
//         if(score > 1){
//             document.querySelector(".message").textContent = "📈 Too High!";
//             score--;
//             document.querySelector(".score").textContent = score;
//         }
//         else{
//             document.querySelector(".message").textContent = "💥 Lost The game!"
//             document.querySelector(".score").textContent = 0;
//         }
//     }


// guess is low number

//     else{
//         if(score > 1){
//             document.querySelector(".message").textContent = "📉 Too Low!";
//         score--;
//         document.querySelector(".score").textContent = score;
//         }
//         else{
//             document.querySelector(".message").textContent = "💥 Lost The game!"
//             document.querySelector(".score").textContent = 0;
//         }
//     }
// });

