function myFind(numbers: number[], callback: (index: number, x:number)=> boolean, numberFind:number): void {
    let check:boolean = false    
    for (const index in numbers) {

        check = callback(numbers[index], numberFind);
        if (check) {
            return console.log(numbers[index]);
        }
    }
    return console.log(null);
}

function find(index: number, y:number): boolean {
    if(index === y) return true
    return false;
}

myFind([1, 2, 3, 4, 5], find, 66);
myFind([1, 2, 3, 4, 5], find, 2);

