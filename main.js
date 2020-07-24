// function popUp(message) {
//     alert(message);
// }
//                  0      1        2         3       4           5         6        7       8        9      10        11        12     13        14      15      16      17            //
var colorArray = ["Red", "Red", "Orange", "Orange", "Yellow", "Yellow", "Green", "Green", "Blue", "Blue", "Purple", "Purple", "Pink", "Pink", "Black", "Black","Brown", "Brown"];
 
// var arr1 = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "black", "brown"];
// var arr2 = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "black", "brown"];

// //code on line 11 taken from stackoverflow//
// var randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
 
// console.log("random color =>", randomColor);


// colorArray.onclick = randomColor

// for (let i = 0; i < colorArray.length; i++){
//     console.log(colorArray[i]);
// }

// var tileClick = document.querySelectorAll('tilePiece');
// for (var i = 0; i < tileClick.length; i++) { //that's a loop//
//     tileClick[i].addEventListener('click', function (event)
//     {console.log('clicked');

// }, false);
// }

document.getElementById("0").addEventListener("click", functionRed);
function functionRed () {
      document.getElementById("0").style.backgroundColor = "red";
}

document.getElementById("1").addEventListener("click", functionRed1);
function functionRed1 () {
      document.getElementById("1").style.backgroundColor = "red";
}
 
document.getElementById("2").addEventListener("click", functionOrange);
function functionOrange () {
      document.getElementById("2").style.backgroundColor = "orange";
}

document.getElementById("3").addEventListener("click", functionOrange1);
function functionOrange1 () {
      document.getElementById("3").style.backgroundColor = "orange";
}

document.getElementById("4").addEventListener("click", functionYellow);
function functionYellow () {
      document.getElementById("4").style.backgroundColor = "yellow";
}

document.getElementById("5").addEventListener("click", functionYellow1);
function functionYellow1 () {
      document.getElementById("5").style.backgroundColor = "yellow";
}

document.getElementById("6").addEventListener("click", functionGreen);
function functionGreen () {
      document.getElementById("6").style.backgroundColor = "green";
}

document.getElementById("7").addEventListener("click", functionGreen1);
function functionGreen1 () {
      document.getElementById("7").style.backgroundColor = "green";
}

document.getElementById("8").addEventListener("click", functionBlue);
function functionBlue () {
      document.getElementById("8").style.backgroundColor = "blue";
}

document.getElementById("9").addEventListener("click", functionBlue1);
function functionBlue1 () {
      document.getElementById("9").style.backgroundColor = "blue";
}

document.getElementById("10").addEventListener("click", functionPurple);
function functionPurple () {
      document.getElementById("10").style.backgroundColor = "purple";
}

document.getElementById("11").addEventListener("click", functionPurple1);
function functionPurple1 () {
      document.getElementById("11").style.backgroundColor = "purple";
}

document.getElementById("12").addEventListener("click", functionPink);
function functionPink () {
      document.getElementById("12").style.backgroundColor = "pink";
}

document.getElementById("13").addEventListener("click", functionPink1);
function functionPink1 () {
      document.getElementById("13").style.backgroundColor = "pink";
}

document.getElementById("14").addEventListener("click", functionBlack);
function functionBlack () {
      document.getElementById("14").style.backgroundColor = "black";
}

document.getElementById("15").addEventListener("click", functionBlack1);
function functionBlack1 () {
      document.getElementById("15").style.backgroundColor = "black";


document.getElementById("16").addEventListener("click", functionBrown);
function functionBrown () {
      document.getElementById("16").style.backgroundColor = "brown";
}


document.getElementById("17").addEventListener("click", functionBrown1);
function functionBrown1 () {
      document.getElementById("17").style.backgroundColor = "brown";
}
}

//lines 121-126 of code are modified from codepen (https://codepen.io/juliogcampos/pen/BzdjwY)//

var tileClick =
document.getElementsByClassName("tilePiece"),
    count = 0;
tileClick.onclick = function() {
    count += 1;
}

if (tileClick === 2) {
    function compare(arr1, arr2)
    const finalarray = [];
}