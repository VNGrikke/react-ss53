function myFilter(numbers: number[], callback: (index: number, x: number) => boolean, numberFind: number): void {
    let newarr: number[] = [];
    for (const index in numbers) {
        let check: boolean = false
        check = callback(numbers[index], numberFind);
        if (check) newarr.push(numbers[index]);
    }
    return console.log(newarr);
}

function find(index: number, y: number): boolean {
    if (index === y) return true
    return false;
}

myFilter([1, 2, 3, 4, 5], find, 66);
myFilter([1, 2, 2, 3, 4, 5], find, 2);


