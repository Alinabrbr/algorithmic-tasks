// Задача 3. Написать функцию/метод, которая возвращает массив простых чисел в диапазоне
// (2 числа - минимальное и максимальное) заданных чисел. Например, на вход переданы 2 числа: от 11 до 20
// (диапазон считается включая граничные значения).

function Num3 (number1, number2) {
    let divisionResult = [];
    let result = [];

    for (let i = number1; i <= number2; i++) {
        for (let j = 1; j <= i; j++) {
            if (i % j === 0 ) {
                divisionResult.push(j)
            }
        }
        if (divisionResult.length === 2) {
            result.push(i);
        }
        divisionResult = [];
    }

    return result;

}

console.log(Num3(11, 20))
console.log(Num3(1, 20))
console.log(Num3(3, 17))