//ELSE / IF
//Making a machine make a decision between 3 or more blocks of code

var kidHeight = 52;
var minHeight = 48;
var wParentHeight = 45; //the height of the kid with the parent

//if the child is old enough, print to console "you can ride"
//if the kid is over 48 inches in height

if(kidHeight > minHeight){
    //you can ride
    console.log("You can ride the coaster");
}else if(kidHeight > wParentHeight ){
    //you can ride with a parent present
    console.log("you can ride, but only with a parent present");
}else{
    //sorry you have growing to do
    console.log("sorry kid, you've got some growing to do first");
}