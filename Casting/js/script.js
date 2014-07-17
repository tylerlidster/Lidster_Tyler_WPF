//Casting
//Treating strings like numbers and numbers like strings

//Treating strings as numbers
//var stringVar = "6"; //This is holding the string 6 not the number 6
//var result = 7 + stringVar;
//console.log(result);
//Gives you the number 76
//Its concatenating them, adding them as strings not as numbers


//To add the number and variable as numbers
//need to treat the variable as a number
//To cast, encase the item in parentheses
//var stringVar = "6"; //This is holding the string 6 not the number 6
//var result = 7 + Number(stringVar);
//console.log(result);

//add Number in front of (stringVar) encased in parentheses and it treats it as a number
//This gives you 13 when output by adding 6 and 7




//Treating numbers as strings
var areaCode = 407;
var firstPart = 203;
var secPart = 4529;
//(407) 203-4529
var phoneNo = "(" String(areaCode) + ")" + String(firstPart) + "-" +  String(secPart);
console.log(phoneNo);

//adding String in front of (areaCode) and so on will display them by adding the numbers as characters
//not adding them as numbers
//to format it to look like a phone number (407) 203-4529
//you add parentheses and quotations as shown for the (407)
//then add quotations "-" and dash for the 203-4529

