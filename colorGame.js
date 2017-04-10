var colors = ["rgb(255, 0, 0)",
              "rgb(255, 0, 0)",
              "rgb(255, 0, 0)",
              "rgb(255, 0, 0)",
              "rgb(255, 0, 0)",
              "rgb(255, 0, 0)"];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[Math.floor(Math.random() * 6)];
var colorDisplay = document.getElementById("colorDisplay");
//colorDisplay.textContent = pickedColor;

var messageDisplay = document.getElementById("message");
var newColors = document.getElementById("newColors");
var easyMode = document.getElementById("easy");
var hardMode = document.getElementById("hard");


newColors.addEventListener("click", function(){
    reset(6);

    //set the colors in the squares
    setColors(6);
});

easyMode.addEventListener("click", function(){

    reset(3);
    setColors(3);
});

hardMode.addEventListener("click", function(){
    reset(6);
    setColors(6);
});

function reset(num){
    //reset the display message
    messageDisplay.textContent = "";

    //reset the color pick
    pickedColor = pickColor(num);

    //reset the h1
    document.querySelector("h1").style.backgroundColor = "#232323";

    //reset all values of the squares background color
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = "#232323";
    }
}


window.addEventListener("load", setColors(6));

function randomColor(){
    return Math.floor(Math.random() * 256);
}

function createRGBString(){

    var rgbStr = "rgb(" + randomColor() + ", " + randomColor() + ", " + randomColor() + ")";
    return rgbStr;
}

function correctPick(correctColor, num){
    for(var i = 0; i < num; i++){
        squares[i].style.backgroundColor = correctColor;

    }
    document.querySelector("h1").style.backgroundColor = correctColor;
}
function pickColor(num){
    return Math.floor(Math.random() * num);
}

function setColors(num){
    for(var i = 0; i < num; i++){


        //add initial colors to squares
        squares[i].style.backgroundColor = createRGBString();

        pickedColor = squares[Math.floor(Math.random() * num)].style.backgroundColor;

        colorDisplay.textContent = pickedColor;

        console.log(pickedColor);

        //add click Listenter to squares
        squares[i].addEventListener("click", function(){
            //grab the color of the clicked square and compare to picked color
            var clickedColor = this.style.backgroundColor;

             console.log(clickedColor, pickedColor);
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                correctPick(pickedColor, num);
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}