function Holiday_Plan() {
    var str = "Where do you go for holiday?";
    var result = str.fontcolor("blue");
    document.getElementById("Vacation").innerHTML = result;
}
//concatenate
function myHoliday() {
    var question = "Where do you go for holiday";
    question += " and why do you choose to visit the place?"
    document.getElementById("Place").innerHTML = question;
}