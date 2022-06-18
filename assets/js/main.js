adviceNum = document.querySelector(".adviceNum");
adviceMsg = document.querySelector(".advice");
dice = document.querySelector(".dice");

function play() {
    var audio = new Audio("assets/sound/click.m4a")
    audio.play();
}

function fetchApi(){
    let url = `https://api.adviceslip.com/advice`;
    fetch(url)
    .then(response => response.json())
    .then(response => {
        adviceNum = document.querySelector(".adviceNum");
        adviceMsg = document.querySelector(".advice");
        adviceNum.innerText = "#" + response.slip.id
        adviceMsg.innerText = "“" + response.slip.advice + "”";
    }
    );
}

dice.addEventListener("click", () => {
    adviceMsg.classList.remove("show")
    setTimeout(function () {
        fetchApi();
    }, 200)
    
    setTimeout(function () {
        adviceMsg.classList.add("show")
    }, 800)
})

fetchApi();
setTimeout(function () {
    adviceMsg.classList.add("show")
}, 800)