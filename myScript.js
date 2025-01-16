function openWin(){
    window.location.assign("game.html");
}

var i = 0;
function move() { //süre geriye doğru akmaya başlar
if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 100;
    var id = setInterval(frame, 1000); //her 1 saniyede bir width 10'ar 10'ar azalır eğer tıklanırsa veya width 0 olursa durur tekrar çağırılıncaya kadar.
    function frame() {
    if (width == 0 || clicked == true) {
        clearInterval(id);
        i = 0;
    } else {
        width-=10;
        elem.style.width = width + "%";
        elem.innerHTML = width/10;
    }
    }
}
}

function computerChoice() { 
    var choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

var clicked = false; // oyuncunun seçimini kontrol eden değişken
var playerChoice = 0;
var playerScore = 0;
var computerScore = 0;


function play() { 
    clicked = false;
    document.getElementById("score").innerHTML = playerScore + "-" + computerScore; //skor değişkenlerini metne yerleştirir
    var choice = computerChoice(); //bilgisayarın seçimi belirlenir
    document.getElementById("result").innerHTML = ""; 
    document.getElementById("rock").style.border = "none"; // yeni oyun başladığında seçili olan kutuları kaldırır 41-42-43
    document.getElementById("paper").style.border = "none";
    document.getElementById("scissors").style.border = "none";


    

    var borderLoop = setInterval(computerChoosing,200); //oyuncu seçene kadar üç buton arasında bordere loop'u değişkeni

    
    function computerChoosing() { 
    if (clicked) { //tıklanınca kimin kazandığını belirler ve puanı ekler eğer 3'e ulaşan varsa oyunu bitirir
        clearInterval(borderLoop);
        
        if (choice == "rock") {
            document.getElementById("computerRock").style.border = "0.5vw solid green";
            document.getElementById("computerPaper").style.border = "none";
            document.getElementById("computerScissors").style.border = "none";
            if (playerChoice == 0){
                document.getElementById("result").innerHTML = "It's a tie!";}
            else if (playerChoice == 1) {
                document.getElementById("result").innerHTML = "You win!";
                document.getElementById("score").innerHTML = (++playerScore) + "-" + computerScore;
                if(playerScore == 3) {
                    document.getElementById("nextRound").value = "New Game";
                    setTimeout(() => {
                        alert("YOU WIN!");
                    }, 1000);
                    return;
                }
            }
            else {
                document.getElementById("result").innerHTML = "Computer wins!";
                document.getElementById("score").innerHTML = playerScore + "-" + (++computerScore);
                if (computerScore == 3) {
                    document.getElementById("nextRound").value = "New Game";
                    setTimeout(() => {
                        alert("COMPUTER WINS!");
                    }, 1000);
                    return;
                }
            } } 
        if (choice == "paper"){
            document.getElementById("computerPaper").style.border = "0.5vw solid green";
            document.getElementById("computerRock").style.border = "none";
            document.getElementById("computerScissors").style.border = "none";
            if (playerChoice == 0){
                document.getElementById("result").innerHTML = "Computer wins!";
                document.getElementById("score").innerHTML = playerScore + "-" + (++computerScore);
                if (computerScore == 3) {
                    document.getElementById("nextRound").value = "New Game";
                    setTimeout(() => {
                        alert("COMPUTER WINS!");
                    }, 1000);
                    return;
                }}
            else if (playerChoice == 1) {
                document.getElementById("result").innerHTML = "It's a tie!";}
            else {
                document.getElementById("result").innerHTML = "You win!";
                document.getElementById("score").innerHTML = (++playerScore) + "-" + computerScore;
                if(playerScore == 3) {
                    document.getElementById("nextRound").value = "New Game";
                    setTimeout(() => {
                        alert("YOU WIN!");
                    }, 1000);
                    return;
                }
            }
        }
        if (choice == "scissors") {
            document.getElementById("computerScissors").style.border = "0.5vw solid green";
            document.getElementById("computerRock").style.border = "none";
            document.getElementById("computerPaper").style.border = "none";
            if (playerChoice == 0){
                document.getElementById("result").innerHTML = "You win!";
                document.getElementById("score").innerHTML = (++playerScore) + "-" + computerScore;
                document.getElementById("nextRound").value = "New Game";
                if(playerScore == 3) {
                    setTimeout(() => {
                        alert("YOU WIN!");
                    }, 1000);
                    return;
                }
            }
            else if (playerChoice == 1) {
                document.getElementById("result").innerHTML = "Computer wins!";
                document.getElementById("score").innerHTML = playerScore + "-" + (++computerScore);
                if (computerScore == 3) {
                    document.getElementById("nextRound").value = "New Game";
                    setTimeout(() => {
                        alert("COMPUTER WINS!");
                    }, 1000);
                    return;
                }
            }
            else {
                document.getElementById("result").innerHTML = "It's a tie!";
            }
        }}
    else{ //tıklanmadığı sürece kutular arasında gezinir
        var index = Math.floor(Math.random() * 3);
        switch (index) {
            case 0:
                if (!clicked) {
                    document.getElementById("computerRock").style.border = "0.5vw solid white";
                    document.getElementById("computerPaper").style.border = "none";
                    document.getElementById("computerScissors").style.border = "none";
                }
                break;
            case 1:
                if (!clicked) {
                    document.getElementById("computerPaper").style.border = "0.5vw solid white";
                    document.getElementById("computerRock").style.border = "none";
                    document.getElementById("computerScissors").style.border = "none";
                }
                break;
            case 2:
                if (!clicked) {
                    document.getElementById("computerScissors").style.border = "0.5vw solid white";
                    document.getElementById("computerRock").style.border = "none";
                    document.getElementById("computerPaper").style.border = "none";
                }
                
                break;
            
        }
    
    
}
}
}

function rock() { //taş kutusu seçilirse
    clicked = true;
    playerChoice = 0;
    document.getElementById("rock").style.border = "0.5vw solid white";
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    
}

function paper() { //kağıt kutusu seçilirse
    clicked = true;
    playerChoice = 1;
    document.getElementById("paper").style.border = "0.5vw solid white";
    document.getElementById("rock").disabled = true;
    document.getElementById("scissors").disabled = true;
    return playerChoice[1];
}


function scissors() { //makas kutusu seçilirse
    clicked = true;
    playerChoice = 2;
    document.getElementById("scissors").style.border = "0.5vw solid white";
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    return playerChoice[2];
} 

function nextRound() { //next round butonuna basılınca ya yeni oyun kurar(eğer skor 3 ise) ya da bir sonraki tura geçer.
    if (playerScore == 3) {
        playerScore = 0;
        computerScore = 0;
        document.getElementById("nextRound").value = "Next Round";
    }
    if (computerScore == 3) {
        playerScore = 0;
        computerScore = 0;
        document.getElementById("nextRound").value = "Next Round";
    }
    clicked = false;
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    document.getElementById("rock").style.border = "none";
    document.getElementById("paper").style.border = "none";
    document.getElementById("scissors").style.border = "none";
    document.getElementById("result").innerHTML = "";
    document.getElementById("computerRock").style.border = "none";
    document.getElementById("computerPaper").style.border = "none";
    document.getElementById("computerScissors").style.border = "none";
    document.getElementById("score").innerHTML = playerScore + "-" + computerScore;
    play();
    move();

}