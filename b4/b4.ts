function displayNumbers(callback: (num: number) => void, delay: number): void {
    for (let i = 1; i < 99999; i++) {
        setTimeout(() => {
            callback(i);
        }, i * delay);
    }
}

function myCallback2(num: number): void {
    console.log(`Số thứ tự: ${num}`);
}

const delayInSeconds = 1000;
displayNumbers(myCallback2, delayInSeconds);
