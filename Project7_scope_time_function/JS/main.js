/*global variable */
var X = 10;
function my_Number() {
    document.getElementById("MyNumber").innerHTML = "My favorite number is " + X;
}
function his_Number() {
    document.getElementById("HisNumber").innerHTML = "His favorite number is " + X;
}
/*local variable */
function my_Numbers2() {
    var X = 10;
    document.write(10 + X);
}
document.write(10 + X);
function my_Numbers3() {
    document.write(X + 20);
}
document.write(X + 20);

function my_Numbers_1() {
    var X = 11;
    console.log(15 + X);
}
function my_Numbers_2() {
    console.log(X + 100);
}
my_Numbers_1();
my_Numbers_2();
