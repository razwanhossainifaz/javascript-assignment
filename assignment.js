//Feet To Mile

function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var result = feetToMile(1);
console.log(result);

//Make Wood Calculator

function woodCalculator([chair,table,bed]){
    var result = (chair * 1) + (table * 3) + (bed * 5);
    console.log(result);
}
woodCalculator([14,5,12]);

// Make a brick calculator

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