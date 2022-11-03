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

/*Time_function */
function get_Date() {
    var greeting;

    if (new Date().getHours() < 18){
        greeting = 'Good evening';
    }
   
        document.getElementById("Greeting").innerHTML = greeting + " How are you today?";
    
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}
function Time_function() {
    var Time = new Date().getHours();
    var Greeting;
    if (Time < 12 == Time >0) {
        Greeting = "Good morning!";
    }
    else if (Time>12 == Time < 18){
        Greeting = "Good afternoon.";
      }  else {
            Greeting = "Good evening.";
    } document.getElementById("Time_of_day").innerHTML = Greeting
    
}

