var num1 = +prompt("Enter First Number");
var num2 = +prompt("Enter Second Number");
var sign = prompt("Enter Operator");

if (sign == "+" || sign == "-" || sign == "*" || sign == "/" || sign == "%") {
    document.write("Your Addition Answer is " + parseFloat(num1 + num2) + "</br>");
    document.write("Your Subraction Answer is " + (num1 - num2) + "</br>")
    document.write("Your Multiplication Answer is " + num1 * num2 + "</br>");
    document.write("Your Division Answer is " + num1 / num2 + "</br>");
    document.write("Your Modulus Answer is " + num1 % num2 + "</br>");
} else {
    document.write("Incorrect Operator");
}


document.write ("<h1>Calculator</h1>");
var num1 = +prompt("Enter a First Number");
var num2 = +prompt("Enter a Second Number");
var sign = prompt("Enter Operator");

if (sign == "+") {
    document.write("Your Answer is " + parseFloat(num1 + num2));
} else if (sign == "-") {
    document.write("Your Answer is " + (num1 - num2));
} else if (sign == "*"){
    document.write("Your Answer is " + num1 * num2);
} else if (sign == "/"){
    document.write("Your Answer is " + num1 / num2);
}else if (sign == "%"){
    document.write("Your Answer is " + (num1 % num2));
}else {
    document.write("Invalid Operator");
}