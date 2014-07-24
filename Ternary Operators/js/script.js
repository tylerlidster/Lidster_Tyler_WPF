//Ternary Operators
//Decision making on one line

/*
var gpa = 48;

//if the gpa is over the min 2.0 score, the student can graduate

if( gpa > 2.0){
    console.log("You can graduate!")
}else{
    console.log("GPA is too low!");
}


//Using Ternary Operator
(gpa > 2.0) ? console.log("You can Graduate") : console.log("GPA too low");
*/

var age = 11;
var book;

//If the child is under 10, they get green eggs and ham
//otherwise they get the Time Machine

/*
if(age <10){
    book = "Green Eggs and Ham";
}else{
    book = "The Time Machine";
}
console.log(book);
*/

//Using a Ternary Operator
book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine"
console.log(book);

//assigned the ternary the value by using
// book=
//will output the book name depending on age
