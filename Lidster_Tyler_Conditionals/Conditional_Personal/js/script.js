/*Tyler Lidster
WPF 1407 Section 01
7.24.14
Conditional_Personal
 */

//set the value for the variable rainChance
var rainChance = 5;
//prompt the user to enter the chance of rain for that day
var percent = prompt("What is the chance of rain for today?");


//if the chance of rain is less than 5% than I will wash my car
//if the chance of rain is greater than 5% I will watch Netflix
//output result as to whether or not wash my car 
(percent < rainChance) ? console.log("My car is going to be clean!") : console.log("I'd rather wait and watch Netflix for now.");

