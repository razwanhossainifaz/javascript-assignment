/* ------------------ Feet To Mile ---------------------------- */

function feetToMile(feet){
    var mile = feet/5280;
    while( feet <= 0){
        return "Distance can not be negative"
    }
    return mile;
}
var result = feetToMile(-12);
console.log(result);

/* ------------------ Make Wood Calculator -------------------------- */

function woodCalculator([chair,table,bed]){
    var result = (chair * 1) + (table * 3) + (bed * 5);
    console.log(result);
}
woodCalculator([14,5,12]);

/* ----------------- Make a brick calculator ----------------------*/

function brickCalculator(n){
    if( n <= 0 ){
        var result = "Your input is wrong"
        console.log(result);
    }
    else if( n <= 10){
        var result = 1000 * 15;
        console.log(result);
    }
    else if( n > 10 , n <= 20 ){
        var result = 1000 * 12;
        console.log(result);
    }
    else{
        var result = 1000 * 10;
        console.log(result);
    }
}
brickCalculator(21);


/* ----------------- Find Tiny Friend -------------------- */

function tinyFriend(friendName){
    var min = friendName[0];
    for(var i = 0; i <= friendName.length; i++){
        var element = friendName[i];
        if(element < min){
            min = element;
        }
    }
    return min;
}
var result = tinyFriend(["Sadman" , "Junayed" , "Rubel" , "Ifaz" , "Shariful"]);
console.log(result);