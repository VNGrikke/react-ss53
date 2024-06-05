function myForeach(numbers: number[], callback: (index: number, arr: number[] | string[]) => void): void {
    for (const index in numbers) {
        callback(+index, numbers);
    }
}

function showIndex(index: number, arr: number[] | string[]): void {
    console.log(`vị trí: `, index, ` | phần tử: `, arr[index], ` | Mảng:  `, arr);
}

myForeach([1, 2, 3, 4, 5], showIndex);


