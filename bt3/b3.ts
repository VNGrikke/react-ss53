type CallbackFunction = (element: number) => number;

function processArray(arr: number[], callback: CallbackFunction): void {
    arr.forEach((element, index) => {
        const result = callback(element);
        setTimeout(() => {
            console.log(`Phần tử thứ: ${result}`);
        }, index * 1000);
    });
}

const myArray = [1, 2, 3, 4, 5];
const myCallback: CallbackFunction = (num) => num;

processArray(myArray, myCallback);
