/*Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел*/

function findMax(num1, num2, num3) {
    /*var max;
    if (num1 > num2 && num1 > num3) {
        max = num1;
    } else if (num2 > num3) {
        max = num2;
    } else {
        max = num3;
    }*/
    var max = Math.max(num1, num2, num3);

    return max;
}

let userNum1 = +prompt("Please, enter the first number", "");
let userNum2 = +prompt("Please, enter the second number", "");
let userNum3 = +prompt("Please, enter the third number", "");

var result = findMax(userNum1, userNum2, userNum3);
console.log("max number is " + result);