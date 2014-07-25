/*Tyler Lidster
 WPF 1407 Section 01
 7.24.14
 Conditional_Wacky
 */

//Driving to California, using hours of sleep and coffee to evaluate how long
//to drive for before stopping
var goodSleep = 8;
var badSleep = 4;
var coffee = 2;
var hotel = badSleep + coffee;
//if I've slept 8 hours drive for 15 hours
if(goodSleep > badSleep){
    console.log("Drive for 15 hours.")
//if I did not get much sleep but had coffee, its okay to keep driving
    //but start looking for a hotel
}else if(hotel > goodSleep){
    console.log("Start looking for a hotel");
//Not safe to drive, I should nap
}else{
    console.log("Pull over and take a nap, you're too tired!");
}