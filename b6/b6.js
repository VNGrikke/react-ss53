"use strict";
function displayNumbers(tasks, delay) {
    tasks.forEach((task, index) => {
        setTimeout(() => {
            task();
        }, ((index + 1) + 0.5) * delay);
    });
}
function task1() {
    console.log('Task 1 được thực thi');
}
function task2() {
    console.log('Task 2 được thực thi');
}
function task3() {
    console.log('Task 3 được thực thi');
}
const tasks = [task1, task2, task3];
const delay = 1000;
displayNumbers(tasks, delay);
