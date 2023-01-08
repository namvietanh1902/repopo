function doubleChar(str) {
    let res = ""
    for (let i = 0; i < str.length; i++) {
        res += str.charAt(i) + str.charAt(i);
    }
    return res;
}
function freeShipping(cartItem) {
    let sum = 0;
    for (const key in cartItem) {
        sum += cartItem[key];
    }
    return sum > 50.00;
}
let btn = document.getElementById("input-btn");
console.log(btn);
btn.addEventListener("click", () => {
    alert(doubleChar(document.getElementById("input").value));
})
console.log(freeShipping({ "Shampoo": 15.99, "Mineral": 10 }));
let a = [1, 3, 4];
console.log(a.reduce((sum, currentVal) => {
    return sum + currentVal
}, 0));
let numberSet = new Set();
let numberArr = [1, 213, 1, 3, 2, 12, 2, 321]
numberArr.forEach((item) => {
    numberSet.add(item)
})

console.log(numberSet);