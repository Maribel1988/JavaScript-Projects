document.write(typeof "Word")

document.write(typeof 9)

function my_Functions() {
    document.getElementById("Test").innerHTML = 0/0;
}

function my_Functions3() {
    document.getElementById("Test3").innerHTML = isNaN("This is a string");
}
function my_Functions4() {
    document.getElementById("Test4").innerHTML = isNaN("8888");
}

document.write(2E310);




document.write(5>3);


document.write(6>7);



document.write(-2E310);


console.log(5+5);

document.write("29" + 6);

document.write(20+3==23);

document.write(20==23);

a = 9
b = 9
document.write(a===b);

C = 5
D = 10
document.write(C===D);

e = 6
f = "6"
document.write(e===f);

g = 7
h = 1
document.write(g===h);
/*AND operator */
document.write(11 > 9  && 12 >8);
document.write(6 < 13 && 14 >16);
/*OR operator */
document.write(3>2 || 1>4);
document.write(1>3 || 8>9);

function not_Function() {
    document.getElementById("Not").innerHTML = !(6>9);
}


function not_Function2() {
    document.getElementById("Not2").innerHTML = !(16>9);
}







