function calculate(a: number, b: number, callback: (result: number) => void): void {
    const c = a + b;
    callback(c);
}

calculate(5, 7, (result) => {
    console.log(`Kết quả của phép tính là: ${result}`);
});
