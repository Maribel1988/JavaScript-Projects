function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height") . value;
    Can_ride = (Height<52) ? "You are too short":"You are tall enough ";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age") . value;
    Can_vote = (Age<18) ? "You are not old enough ":"You are old enough ";
    document.getElementById("Vote").innerHTML = Can_vote + "to vote."
}
/*Keywords and Constructors */
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}

function Student (Year, Course, Major) {
    this.Student_Year = Year;
    this.Student_Course = Course;
    this.Student_Major = Major;
}
var Mia = new Student ("first year ", "BSEducation ", "English");
var Pia = new Student ("second year", "Criminology", "Forensic");
var Ken = new Student ("fourth year", "BSAccountancy", "Finance");
function myFunction2() {
    document.getElementById("New_and_This").innerHTML = 
    "Mia is a " + Mia.Student_Year  + Mia.Student_Course + Mia.Student_Major;
}
/*Nested Function */

function Counting_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var counter = 0;
        function Plus_one() {counter += 1;}
        Plus_one();
        return counter;
    }
}
