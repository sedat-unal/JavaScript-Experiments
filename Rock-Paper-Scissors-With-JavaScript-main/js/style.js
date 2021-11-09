function startGame() {
    var main = document.getElementById('main');
    var gameBoard = document.getElementById('gameBoard');
    if (main.style.display === "none") {
        main.style.display = "block";
    } else {
        main.style.display = "none";
        gameBoard.style.display = "block";
    }
}

function finishGame() {
    var main = document.getElementById('main');
    var gameBoard = document.getElementById('gameBoard');

    if (gameBoard.style.display === "none") {
        gameBoard.style.display = "block";
    } else {
        gameBoard.style.display = "none";
        main.style.display = "block";
    }
}

function myChoice(value) {
    var myChoice = document.getElementById('showMyChoice');
    myChoice.src = ('images/myChoice' + value + '.png');
    myChoice.style = ('width:300px; height:300px;');

    showPcChoice();
}

function showPcChoice() {
    var pcChoice = document.getElementById('showPcChoice');
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    pcChoice.className = 'animate__animated animate__flipInY';
    pcChoice.src = ('images/' + randomNumber + '.png');
    pcChoice.style = ('width:300px; height:300px;');
    setTimeout(showPcChoiceReset, 500);
}

function showPcChoiceReset() {
    var pcChoice = document.getElementById('showPcChoice');
    if (pcChoice.className !== '') {
        pcChoice.className = '';
    }
    gameOn();
}

function gameOn() {
    var humanChoice = document.getElementById('showMyChoice');
    var pcChoice = document.getElementById('showPcChoice');

    var imgSrc = humanChoice.getAttribute("src");
    var humanSubstring = imgSrc.substring(15, 16);

    var pcImgSrc = pcChoice.getAttribute("src");
    var pcSubstring = pcImgSrc.substring(7, 8);

    var humanChoosen, pcChoosen;
    switch (humanSubstring) {
        case '1':
            humanChoosen = "rock";
            break;
        case '2':
            humanChoosen = "paper";
            break;
        case '3':
            humanChoosen = "scissors";
            break;
    }
    switch (pcSubstring) {
        case '1':
            pcChoosen = "scissors";
            break;
        case '2':
            pcChoosen = "paper";
            break;
        case '3':
            pcChoosen = "rock";
            break;
    }

    let humanWin, pcWin, draw;

    if (humanChoosen == "rock") {
        if (pcChoosen == "scissors") {
            humanWin = 1;
        } else if (pcChoosen == "paper") {
            pcWin = 1;
        } else {
            draw = 1;
        }
    } else if (humanChoosen == "paper") {
        if (pcChoosen == "scissors") {
            pcWin = 1;
        } else if (pcChoosen == "paper") {
            draw = 1;
        } else {
            humanWin = 1;
        }
    } else {
        if (humanChoosen == "scissors") {
            if (pcChoosen == "scissors") {
                draw = 1;
            } else if (pcChoosen == "paper") {
                humanWin = 1;
            } else {
                pcWin = 1;
            }
        }
    }

    var humanScore = document.getElementById("humanScore");
    var pcScore = document.getElementById("pcScore");

    let hScore = 0;
    let pScore = 0;

    if (humanScore.innerHTML > 0) {

        if (pcScore.innerHTML > 0) {
            hScore = humanScore.innerHTML;
            pScore = pcScore.innerHTML;
        }
        hScore = humanScore.innerHTML;
    } else if (pcScore.innerHTML > 0) {
        if (humanScore.innerHTML > 0) {
            pScore = pcScore.innerHTML;
            hSocre = humanScore.innerHTML;
        }
        pScore = pcScore.innerHTML;
    }


    if (humanWin == 1) {
        console.log("human win");
        ++hScore;
        humanScore.innerHTML = hScore;
    } else if (draw == 1) {
        console.log("draw");
    } else {
        ++pScore;
        pcScore.innerHTML = pScore;
        console.log("pc win");
    }

}