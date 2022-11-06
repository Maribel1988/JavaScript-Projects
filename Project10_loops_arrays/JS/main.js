function Call_Loop() {
    var text = "You are "
    var i = 10;
    while (i > 0) {
        text += "<br> in queue number " + i;
       i--; 
    }
    document.getElementById("Loop").innerHTML = text;
}
/*for loop */
var Instruments = ["Piano", "Trumpet", "Harmonica", "Violin", "Drum"];
var Content = "";
var X;
function for_Loop() {
    for (X = 0; X < Instruments.length; X++ ) {
        Content += Instruments[X] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
/*Arrays snd objects */
function array_Function() {
    var OceanSky_Pic = [];
    OceanSky_Pic[0] = "Maldives hut";
    OceanSky_Pic[1] = "Golden Gate bridge";
    OceanSky_Pic[2] = "woman paddling";
    OceanSky_Pic[3] = "dark sky";
    OceanSky_Pic[4] = "sunset by the beach";
    document.getElementById("Array").innerHTML = "This is a photo of the Golde Gate Bridge " + OceanSky_Pic[1] + ".";
}
/*Const */
function constant_function() {
    const luxury_Car = {type:"SUV", brand:"Nio", color:"red"};
    luxury_Car.price = "$200000";
    luxury_Car.color = "golden"
    document.getElementById("Constant").innerHTML = "The price of a luxurious car " + luxury_Car.type + " is " + luxury_Car.price;
    document.getElementById("Constant").innerHTML = "The price of a luxurious car " + luxury_Car.color + " " + luxury_Car.brand + " is " + luxury_Car.price;
}

var X = 20;
{let X = 10;
}
{
    let X = 15;
}   
document.getElementById("let_Array").innerHTML = X;
/*let keyword , properties and method */
let student = {
    firstName: "Mary",
    lastName: "Jones",
     year : "first year",
    course: "Business Management",
    grade : "pass",
    fullName : function() {
        return student.firstName + " " + student.lastName;
    }
};
    document.getElementById("let_Key").innerHTML = student.fullName() + " is a " + student.year + "" +student.course + " student.";
  
    
    /*break and continue statement */
    let text = "";
    for (i = 10; i > 0; i--) {
        if(i===8) { break; }
        text += "You are in queue number" + i + "<br>";
    }
    
    document.getElementById("break_Statement").innerHTML = text;

    let num1 = "";
    for (i = 10; i > 0; i--) {
        if(i===8) { continue; }
        num1 += "You are in queue number" + i + "<br>";
    }
    
    document.getElementById("con_Statement").innerHTML = num1;
