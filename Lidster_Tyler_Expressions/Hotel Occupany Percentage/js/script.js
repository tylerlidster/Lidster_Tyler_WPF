/*
 Tyler Lidster
 WPF 1407 Section 01
 Expressions - Industry Specific
 */

var hotelRooms = 100;//There are 100 rooms in my hotel

var roomsSold = prompt("How many rooms are occupied?");//prompts user for input
console.log(roomsSold);//saves the users answer


/*calculates the occupancy by dividing roomsSold by hotelRooms which gives you a
decimal, use the multiplication operator to calculate the percentage in a whole number
*/
var occupancy = roomsSold / hotelRooms * 100;

//Displays the occupancy given the users input
alert("The occupancy of your hotel tonight is "+occupancy+ "%");
console.log(occupancy);



