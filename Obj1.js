/*Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени*/

function cube(num) {
    /*return num * num * num;*/
    return Math.pow(num, 3);
}

let firstNum = 2;
let secondNum = 3;
let result = cube(firstNum) + cube(secondNum);
console.log(result);