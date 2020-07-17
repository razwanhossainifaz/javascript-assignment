/* ------------------ Feet To Mile ---------------------------- */

function feetToMile(feet){
    var mile = feet/5280;
    while( feet <= 0){
        return "Distance can not be negative"
    }
    return mile;
}
var result = feetToMile(1);
console.log(result);

/* ------------------ Make Wood Calculator ----------------------- */

function woodCalculator(chair,table,bed){
    var chair = chair * 1;
    var table = table * 3;
    var bed = bed * 5;
    var total = chair + table + bed;
    if( chair <= 0){
        return "Your input is invalid"
    }
    else if( table <= 0){
        return "Your input is invalid"
    }
    else if( bed <= 0){
        return "Your input is invalid"
    }
    else{
        return total;
    }
}
var result = woodCalculator(14,5,12);
console.log(result);

/* ----------------- Make a brick calculator ---------------------- */

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