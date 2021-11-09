function zarAt() {
    var div = document.getElementById('player1Choosen');
    var myNumber = (Math.floor(Math.random() * 6) + 1);
    div.innerHTML = '<img class="animate__animated animate__bounceInLeft player1Img" src="images/250x250/' + myNumber + '.png" id="player1">';
    computerDice();
}

function computerDice() {
    var div = document.getElementById('computerChoice');
    var myNumber = (Math.floor(Math.random() * 6) + 1);
    div.innerHTML = '<img class="animate__animated animate__bounceInRight computerImg" src="images/250x250/' + myNumber + '.png" id="computer">';
    getResult();
}

function getResult() {
    var player1 = document.getElementById('player1');
    var computer = document.getElementById('computer');

    var computerSrc = computer.getAttribute('src');
    var playerSrc = player1.getAttribute('src');


    //substring folder name
    var playerSubstring = playerSrc.substring(15, 16);
    var computerSubstring = computerSrc.substring(15, 16);

    console.log(playerSubstring, computerSubstring);

    let playerWin = 0;
    let computerWin = 0;

    var homeScore = document.getElementById("homeScore");
    var computerScore = document.getElementById("computerScore");

    if (playerSubstring > computerSubstring) {
        if (homeScore.innerHTML > 0) {
            if (computerScore.innerHTML > 0) {
                playerWin = homeScore.innerHTML;
                computerWin = computerScore.innerHTML;
            }
            playerWin = homeScore.innerHTML;
        }
        console.log("humanity win");
        ++playerWin;
        homeScore.innerHTML = playerWin;
    } else if (playerSubstring < computerSubstring) {
        if (computerScore.innerHTML > 0) {
            if (homeScore.innerHTML > 0) {
                computerWin = computerScore.innerHTML;
                playerWin = homeScore.innerHTML;
            }
            computerWin = computerScore.innerHTML;
        }
        console.log("computer win");
        ++computerWin;
        computerScore.innerHTML = computerWin;
    } else {
        draw = 1;
    }

}