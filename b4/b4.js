"use strict";
function displayNumbers(callback, delay) {
    for (let i = 1; i < 99999; i++) {
        setTimeout(() => {
            callback(i);
        }, i * delay);
    }
}
function myCallback2(num) {
    console.log(`Số thứ tự: ${num}`);
}
const delayInSeconds = 1000;
displayNumbers(myCallback2, delayInSeconds);
