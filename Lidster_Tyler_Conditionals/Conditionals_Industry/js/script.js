/*Tyler Lidster
WPF0714 Section 01
7.24.2014
Conditionals_Industry
*/

//Sets a value of 50 as the hotels base occupancy to decide on which rate to sell
var occupants = 50;
//prompts the user for occupancy number
var occupancy = prompt("What is our occupancy tonight?");
console.log(occupancy);
//if the hotels occupancy is greater than 50 sell each room at 150
//if the hotels occupancy is less than 50 sell at a discount
if(occupancy > occupants){
    alert("Sell each room at a rate of $150.");
}else{
    alert("Sell each room at a discounted rate of $100");
}
