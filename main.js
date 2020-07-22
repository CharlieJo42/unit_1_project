// function popUp(message) {
//     alert(message);
// }

var colorArray = ["Red", "Red1", "Orange", "Orange1", 
"Yellow", "Yellow1", "Green", "Green1", "Blue", "Blue1", 
"Purple", "Purple1", "Pink", "Pink1", "Black", "Black1",
"Brown", "Brown1"];

//code on line 11 taken from stackoverflow//
const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];

console.log("random color =>", randomColor);
