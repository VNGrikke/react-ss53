"use strict";
function checkCondition(callback, b) {
    setTimeout(() => { callback(b); }, 3000);
}
function myCallback3(x) {
    console.log("điều kiện trả về:", x);
}
checkCondition(myCallback3, 1 < 3);
checkCondition(myCallback3, 6 > 7);
