function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}
/*subtraction code*/
function subtraction_Sample() {
    var subtract = 10 - 6;
    document.getElementById("Math2").innerHTML = "10 - 6 = " + subtract
}
/*addition code*/
function multiplication_Sample() {
    var multiply = 11 * 6;
    document.getElementById("Math3").innerHTML = "11 * 6 = " + multiply
}
/*division*/
function division_Sample() {
    var divide = 10 / 5;
    document.getElementById("Math4").innerHTML = "10 / 5 = " + divide
}
/*multiple operations*/
function more_Math() {
    var simple_Math = (3 + 2) * 10 / 2 -6;
    document.getElementById("Math5").innerHTML = "3 plus 2, multiplied by 10, divided in half and then subtracted by 6 equals " + simple_Math;
}
/*modulus*/
function modulus_Operator() {
    var simply_Math = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of:" + simply_Math;
}
/*negation*/
function negation_Operator() {
    var x = 9;
    document.getElementById("Math7").innerHTML = -x;
}
/*increment*/
var X = 6;
X++;
document.write(X);


/*decrement*/
var Y = 8;
Y--;
document.write(Y);
/*Math.random function*/
window.alert(Math.random()*50);
