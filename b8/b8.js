"use strict";
function myFind(numbers, callback, numberFind) {
    let check = false;
    for (const index in numbers) {
        check = callback(numbers[index], numberFind);
        if (check) {
            return console.log(numbers[index]);
        }
    }
    return console.log(null);
}
function find(index, y) {
    if (index === y)
        return true;
    return false;
}
myFind([1, 2, 3, 4, 5], find, 66);
myFind([1, 2, 3, 4, 5], find, 2);
