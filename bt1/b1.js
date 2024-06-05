"use strict";
function calculate(a, b, callback) {
    const c = a + b;
    callback(c);
}
calculate(5, 7, (result) => {
    console.log(`Kết quả của phép tính là: ${result}`);
});
