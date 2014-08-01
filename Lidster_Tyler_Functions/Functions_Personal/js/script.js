//Tyler Lidster
//WPF 1407 - Section 01
// 7.31.14
//Functions_Personal


//Create a function to turn fahrenheit into Celsius for my trip to Europe next year
function tempF(){
    var temp = prompt("What is the temperature in Fahrenheit?");//created variable for temp
    console.log("It is "+ temp + " fahrenheit.");//output fahrenheit input back to user
    var tempC = (temp - 32) * (5 / 9);//calculate celsius


console.log(tempC);//output celsius temp from fahrenheit
}
tempF();//invoke function
