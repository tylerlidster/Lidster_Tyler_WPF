/*
Tyler Lidster
WPF 1407 Section 01
GoTo Training Week 2
 */

//alert("Testing 1,2,3");

//Create a js file that will tell us how old we are


//Create a variable to hold the persons name
//Do not use quotes or it will display what is typed within them
//Text String with quotes - Variable without quotes
var name = prompt("Please Type In Your Name");

//Console.log out that name
console.log(name);

//Alert the user and tell him hi
alert("Welcome "+name+"! We have a few more questions for you");

//Create the variable and prompt user for year of birth
var yearBorn = prompt("What Year Were You Born?");
console.log(yearBorn);

//Create a variable for the current year
var currentYear = 2014;


//Calculate the persons age - save that calculation as a variable
var age = currentYear - yearBorn;
console.log(age);

//Let's tell the user how old they are
alert(name + " You Are "+age+" years old.");
console.log(name + " You Are "+age+" years old.");

//Let's make it more complex

//How old you will be in the future

//Prompt user for how many years in the future
var yearsMore = prompt("How Many Years In The Future Would You Like?");
console.log(yearsMore);


//Prompting returns a String!! Not a number!
// "10" not 10

//Cast a variable
//Cast as a number - Number(variable)
//Cat as a string by String(variable)

//Calculate the future age
var futureAge = age + Number(yearsMore);
console.log(futureAge);


//Make out results look pretty
console.log("You Will Be "+futureAge+" In "+yearsMore+" Years");
alert("You Will Be "+futureAge+" in "+yearsMore+" Years");

