var user1 = prompt("Player 1 Name?");
var user2 = prompt("Player 2 Name?");

var userRandom = Math.floor(Math.random() * 2);

console.log(userRandom);

if (userRandom == 0 && user1 !== "" && user1 !== " " && user2 !== "" && user2 !== " ") {
    var call = prompt(user1 + " What is your call, Heads or Tails");
    console.log(call)
    call.toLowerCase();
    if (call !== "heads" && call !== "tails") {
        alert("Please type the call correctly");
        var call = prompt(user1 + " What is your call, Heads or Tails");
        console.log(call)
        call.toLowerCase();
        countdown();
    }


}
else if (userRandom == 1 && user1 !== "" && user1 !== " " && user2 !== "" && user2 !== " ") {
    var call = prompt(user1 + " What is your call, Heads or Tails");
    console.log(call)
    call.toLowerCase();
    if (call !== "heads" && call !== "tails") {
        alert("Please type the call correctly");
        var call = prompt(user1 + " What is your call, Heads or Tails");
        console.log(call)
        call.toLowerCase();
        countdown();
    }

}
else {
    alert("Please enter Information Correctly")
}

// Call is received now time to generate random value for the toss
// var count = 0;
// var point = 0;
// function flip() {
//     var tossRandom = Math.floor(Math.random() * 2);

//     console.log("toss", tossRandom)
//     if (tossRandom == 0) {
//         document.getElementById("result").innerHTML = "<h1>Heads</h1>";
//         if (userRandom == 0 && call == "heads") {
//             var count = count + 1;
//             document.getElementById("user1").innerHTML = "<h2>" + user1 + " <br>" + count + "</h2>"
//             console.log("Count", count)
//         }
//         // else if (userRandom == 0 && call == "tails") {
//         //     point++;
//         //     document.getElementById("user2").innerHTML = "<h2>" + point + "</h2>"
//         //     console.log("point", point)
//         // }
//         // else if (userRandom == 1 && call == "heads") {
//         //     var count = count + 1;
//         //     document.getElementById("user2").innerHTML = "<h2>" + user2 + " <br>" + count + "</h2>"
//         //     console.log("point", count)
//         // }
//     }
//     else {
//         document.getElementById("result").innerHTML = "<h1>Tails</h1>"
//         // if (userRandom == 1 && call == "tails") {
//         //     count++;
//         //     document.getElementById("user2").innerHTML = "<h2>" + user2 + " <br>" + point + "</h2>"
//         //     console.log("point", point)
//         // }
//     }
// }

var score1 = 0;
var score2 = 0;

function flip() {
    var randomNumberForFliping = Math.floor(Math.random() * 2) + 1;
    switch (randomNumberForFliping) {
        case 1:
            document.getElementById("result").innerText = "Heads";
            score1 = score1 + 1;
            document.getElementById("user1").innerHTML = "<h2>" + user1 + " <br>" + score1 + "</h2>"
            break;
        case 2:
            document.getElementById("result").innerText = "Tails";
            score2 = score2 + 1;
            document.getElementById("user2").innerHTML = "<h2>" + user2 + " <br>" + score2 + "</h2>"
            break;
    }
}

function reset(){
    location.reload()
}



//Wroking on countDown Timer
var startingMintes = 1;
var time = startingMintes * 60;
var countDown = document.getElementById("Timer");

var settime = setInterval(updateCountDown, 1000)
function updateCountDown() {
    var minutes = Math.floor(time / 60)
    let second = time % 60;
    second = second < 1 ? '0' + second : second;
    countDown.innerText = `${minutes} : ${second}`;
    time--;
    if (minutes === 0 && second == 00) {
        clearInterval(settime);
        if (score1 > score2) {
            document.getElementById("winner").innerText = "Congrats " + user1 + " WON MATCH";
        }
        else if (score2 > score1) {
            document.getElementById("winner").innerText = "Congrats " + user2 + " WON MATCH";
        }
        else{
           document.getElementById("winner").innerText = "MATCH TIED "
        }
    }
}