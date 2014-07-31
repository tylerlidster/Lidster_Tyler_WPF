
//Create a file that will give us a random number

//Ask the user for a min number
var min = prompt("Please type in a min number:");

//validate that prompt

//before use a conditional - OLD WAY
/*if(min ===""){
    //Re-Prompt the user for a number
    min = prompt("Please type in a min number, Please don't leave blank.");
}


//Validate using a while loop
//Tests for an empty string - user didnt type anything in
while(min===""){
    //Re-Prompt the user
    min = prompt("Please type in a min number:");
}
//Validate that it is a number
//Uses isNaN - is not a number - user types in a word not a number - it will loop the form/question
while(isNaN(min)){
    //Re-Prompt the user
    min = prompt("Please type in a min number:");
}
*/
//combine Validation into 1 while loop
//Combines both examples from abover
//Tests for both an empty string and not a number
//Use OR not AND - can't be a number and an empty string at once
while(isNaN(min) || min===""){
    //Re-Prompt the user
    min = prompt("Please type in a min number:");
}