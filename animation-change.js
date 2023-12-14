var CharacterArrray = [
    
    "A","a","B","b","C","c","D","d","E","e","F","f","G","g","H","h",
    "I","i","J","j","K","k","L","l","M","m","N","n","O","o","P","p",
    "Q","q","R","r","S","s","T","t","U","u","V","v","W","w","X","x",
    "Y","y","Z","z",  
    "0","1","2","3","4","5","6","7","8","9",
    "?",",","@","!","#","%","*",";","&"

]

var rgbRArray = [43,202,18,255,66,125,0];
var rgbGArray = [107,189,41,87,166,191,0];
var rgbBArray = [255,217,82,102,255,38,0];

var x = document.getElementById("text-zone");
var i = 0;
var j = 0;
var k = 0;
// String colorstring = "rgb(" + rgbRArray[k] + "," + rgbGArray[k] + "," + rgbBArray[k] +
var minus = false;
var textWeightArray = [56,952];
// var textItalicArray = [10,-6];

function changeText(){
    if (i < CharacterArrray.length){
        x.innerHTML = CharacterArrray[i];
        i++;
    }else{
        x.innerHTML = CharacterArrray[0];
        i = 0;
    }

    j++;
    if(j == textWeightArray.length) j=0;

    x.style.fontVariationSettings = "\"wght\" " + textWeightArray[j];
    
}

function changeColor(){
    if(k == 0) x.style.color = "rgb(43,107,255)";
    else if(k == 1) x.style.color = "rgb(202,189,217)";
    else if(k == 2) x.style.color = "rgb(18,41,82)";
    else if(k == 3) x.style.color = "rgb(255,87,102)";
    else if(k == 4) x.style.color = "rgb(66,166,255)";
    else if(k == 5) x.style.color = "rgb(125,191,38)";
    else if(k == 6) x.style.color = "rgb(0,0,0)";

    if(k == 7) {x.style.color = "rgb(43,107,255)"; k = 0;}
    k++;

}


setInterval(changeText, 1600);
setInterval(changeColor, 1600);
