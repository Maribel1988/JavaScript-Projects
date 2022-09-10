document.write ("HI");

window.alert("Hello, World!");

document.write("\"Be who you are and say what you feel,"+ "because those who mind don\'t matter and those matter don\'t mind\""+"-Dr.Seuss");
var Family = "The Arezzinis", Dad = " Jeremiah", Mom = "Hermoine",
Daughter = "Penny", Son = "Zorro";
var Dad = Dad.fontcolor("red");
document.write(Dad);

var blues = "I have the blues.";
var blues = blues.fontcolor("blue");
document.write(blues);

function My_First_Function() {
    var str = "This text is green!";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}
function myFunction() {
    var sentence = "I am learning";
    sentence += "a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}
