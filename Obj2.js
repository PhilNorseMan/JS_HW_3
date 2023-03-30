/*Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"*/

function taxDeduction(num) {
    let result = num - num * 0.13;
    if (isNaN(num)) {
        console.log("Incorrect input!");
    } else
        console.log("The amount of wages minus taxes is equal to " + result);
}

var userNum = prompt("Please, enter the salary amount", 0);
taxDeduction(userNum);