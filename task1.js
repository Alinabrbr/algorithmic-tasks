// Задача 1. Разработайте функцию, которая принимает целое число в качестве аргумента и возвращает
// строку, содержащую это число и слово "компьютер" в нужном склонении по падежам
// в зависимости от числа. Например, при вводе числа 25 функция должна возвращать
// "25 компьютеров", для числа 41 — "41 компьютер", а для числа 1048 — "1048 компьютеров".



function Num1 (number) {
    let arr = [...number.toString()]
    let string = 'компьютер';
    let item = +arr[arr.length - 1];
    let result = '';

    if (item === 1) {
        result = `${number} ${string}`;
        return result;
    }

    else if (item === 2 || item === 3 || item === 4) {
        result = `${number} ${string + 'a'}`;
        return result;
    }
    else {
        result = `${number} ${string + 'ов'}`;
        return result;
    }
}

console.log(Num1(1048));
console.log(Num1(1049));
console.log(Num1(2400));
console.log(Num1(2401));
console.log(Num1(2402));
console.log(Num1(2403));
console.log(Num1(2404));
console.log(Num1(2405));
console.log(Num1(2406));
console.log(Num1(2407));