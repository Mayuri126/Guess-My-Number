
const startButton = document.querySelector(".start-button");

function makesound(){
    var audio = new Audio("./audio.mp3");
    audio.play();

    setTimeout(function() {
        window.location.href = 'game.html';
      }, 1000);
}

startButton.addEventListener("click", function(){
    makesound();

});