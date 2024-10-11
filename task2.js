// Задача 2. Написать функцию/метод, которая на вход получает массив положительных целых чисел произвольной длины.
// Например [42, 12, 18]. На выходе возвращает массив чисел, которые являются общими
// делителями для всех указанных числе. В примере это будет [2, 3, 6].


function Num2 (numbers) {
    const maxValue = Math.max(...numbers);
    let result = [];

    for (let i = 2; i <= maxValue; i++){

        const divisionResult = numbers.every(number => {
            return number % i === 0
        })
        if (divisionResult) {
            result.push(i)
        }
    }
    return result;
}

console.log(Num2([25, 10, 50]));
console.log(Num2([42, 12, 18]));
console.log(Num2([50, 12, 34]));