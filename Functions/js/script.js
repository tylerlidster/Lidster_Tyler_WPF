//Tyler Lidster
//Functions



/*

Example Functions

function outptMsg(){
    console.log("Hello World");
}

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}
*/

//Calling a Function
//calArea();
//Makes the the code reusable again and again


/*Arguments and Parameters

calcArea(30, 20);

function calcArea(w, h){ //w=30, h=20
    var area = w * h;
    console.log(area);
}


function dogYears(age){
    var dogYears = age * 7;
    console.log("Sparky is " +dogYears + " years old.");
}
var age1 = 4;//Could also just use 4 instead of age1 like below with 5
dogYears(age1);//Passing the value 4 to "age"
dogYears(5);//Passing the value os 5 to "age"

*/

/*
//RETURNING VARIABLES
//use RETURN
//return area;

var total = calcArea(30, 20);

function calcArea(w, h){
    var area = w * h;
    return area;
}
console.log(total);
*/

/*
//ANONYMOUS FUNCTIONS
var functionName = function(){
    //code to run
}

functionName();//call the function


var calcArea = function(width, height) {
    //code the function runs
    var area = width * height;
    return area;
}

var a = calcArea (20, 30);//invoking - should happen after function

console.log(a);

 */