// Задача 4. Написать метод, который в консоль выводит таблицу умножения. На вход метод получает число, до которого выводит таблицу умножения.
// В консоли должна появиться таблица.

function Num4 (number) {
    let table2 = {};
    let arr = []
    let columnCount = [];
    for (let i = 1; i <= number; i++) {
        arr = []
        columnCount.push(i)
        for (let j = 0; j <= number; j++) {
            arr.push(i*j);
            table2[i] = arr
        }
    }
    console.table(table2, columnCount);
}

Num4(5);
Num4(7);
Num4(9);