"use strict";
function myFilter(numbers, callback, numberFind) {
    let newarr = [];
    for (const index in numbers) {
        let check = false;
        check = callback(numbers[index], numberFind);
        if (check)
            newarr.push(numbers[index]);
    }
    return console.log(newarr);
}
function find(index, y) {
    if (index === y)
        return true;
    return false;
}
myFilter([1, 2, 3, 4, 5], find, 66);
myFilter([1, 2, 2, 3, 4, 5], find, 2);
