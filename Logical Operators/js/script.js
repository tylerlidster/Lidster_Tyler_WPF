//Conditional Logic - Logical Operators
/*
var budget = 300;
var iPhonePrice = 199.99;
var paycheck = 200;

//if the price of the phone is less than our budget AND if our paycheck is over 300
if(iPhonePrice < budget && paycheck > 300){
    console.log("We can buy the iPhone!");
}else{
    console.log("No phone for you!");
}
*/

var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

if(iPhonePrice < budget || wonLottery){
    console.log("We can buy the iPhone!");
}else{
    console.log("No phone for you!");
}