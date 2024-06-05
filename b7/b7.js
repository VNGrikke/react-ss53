"use strict";
function myForeach(numbers, callback) {
    for (const index in numbers) {
        callback(+index, numbers);
    }
}
function showIndex(index, arr) {
    console.log(`vị trí: `, index, ` | phần tử: `, arr[index], ` | Mảng:  `, arr);
}
myForeach([1, 2, 3, 4, 5], showIndex);
