/*
 Tyler Lidster
 WPF 1407 Section 01
 GoTo Training Week 2
 */


//Prompts the user to enter how many hours they work a day
//Saves the user's input information
var hours = prompt("How many hours do you work a day?");
console.log(hours);

//Prompts the user to enter how many days they worked that week
//Saves the user's input information
var days = prompt("How many days did you work this week?");
console.log(days);

/*Uses the multiplication equals assignment operator to calculate the variables
hours and days into a new variable total
*/
var total = hours *= days;
console.log("total");

//Outputs the user's hours worked for that week
alert("You worked "+total+" hours this week");