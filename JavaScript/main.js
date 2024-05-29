const display = document.getElementById("display");


function appendToDisplay(value){
    display.value += value;
}


function clearToDisplay(){
    display.value = "";
}


function calculate(){
    display.value = eval(display.value)
}