/*Concatenate */
function Sentence() {
    var part_1 = "I ";
    var part_2 = "am "
    var part_3 = "studying "
    var part_4 = "all day. "
    var full_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = full_sentence;
}
/*slice()Method */

function slice_Method() {
    var Sentence = "I am studying all day.";
    var Section = Sentence.slice(5,13);
    document.getElementById("Slice").innerHTML = Section;
}
/*toUpperCase()Method */
function Upper_function() {
var Name = "Maribel";
var UpperName = Name.toUpperCase();
document.getElementById("Upper").innerHTML = UpperName;
}
/*search()method */

var text = "Maribel is studying.Maribel is sleepy."
var position = text.search("Maribel");
document.getElementById("searching").innerHTML = position;

/*Number Methods */
function string_Method() {
    var X = 200;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
/*toPrecision()Method */
function precision_Method() {
    var X = 12346.7890;
    document.getElementById("Precision").innerHTML = X.toPrecision(9);
}
/*toFixed()Method */
var num1 = 10.5678
var n = num1.toFixed(2);
document.getElementById("Fixed").innerHTML = n;

/*valueOf()Method */
var text1 = "Good day";
var result = text1.valueOf();

document.getElementById("wordtext").innerHTML = result;