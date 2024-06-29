/*import {PI,getArea,getCircumference} from './mathUtil.js';

console.log(PI);
console.log(getArea(10));
console.log(getCircumference(10));
-------------------------ASYNCHRONOUS----------------*/
/*
function func1(callback){
    setTimeout(() => { console.log("Task 1"); callback(); },3000);
}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);
--------------------------ERROR HANDLING ---------------------------*/
/*
try{
    console.log(x);
}
catch(error){
    console.log(error);
}
console.log("You have reached the end of the program");

// DIVIDE BY ZERO EXAMPLE
try{
    let dividend = Number(window.prompt("Enter the dividend"));
    let divisor = Number(window.prompt("Enter the divisor"));

    if(divisor == 0){
        throw new Error("Divisor cannot be zero");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }
    let result = (dividend/divisor);
    console.log(result);
}
catch(error){
    console.error(error);
}
console.log("You have reached the end");
------------------------CALCULATOR EXERCISE------------------------------------*/
const display = document.getElementById("myInput");

function appendToDisplay(input){
    display.value += input;

}
function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error";
    }
}
function clearDisplay(){
    display.value = "";
}


