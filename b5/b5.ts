function checkCondition(callback: (err: boolean) => void, b: boolean) {
    setTimeout(() => { callback(b) }, 3000);
}
function myCallback3(x:boolean) {
    console.log("điều kiện trả về:", x);
}

checkCondition(myCallback3, 1<3);
checkCondition(myCallback3, 6>7);
