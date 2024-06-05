function myFindIndex(numbers: number[], callback: (index: number, x: number) => boolean, numberFind: number): void {
    let check: boolean = false
    for (const index in numbers) {
        check = callback(numbers[index], numberFind);
        if (check) return console.log(index);
    }
    return console.log(-1);
}

function find(index: number, y: number): boolean {
    if (index === y) return true
    return false;
}

myFindIndex([1, 2, 3, 4, 5], find, 66);
myFindIndex([1,3, 2, 2, 3, 4, 5], find, 2);


