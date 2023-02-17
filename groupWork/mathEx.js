let num = 98.42
let roundNum = Math.round(num)
let floorNum = Math.floor(num)
let ceilNum = Math.ceil(num)
let Pi = Math.PI
console.log(roundNum, floorNum, ceilNum, Pi)
console.log("Square root of 25 is " + Math.sqrt(25))
console.log("Cube root of 27 is " + Math.cbrt(27))

let str = "Sgroup Tonight Special 101"
let upper = str.toUpperCase()
console.log("String: ", str)
console.log("Length: ", str.length)
console.log("Upper: ", upper)
let strArr = str.split(" ")
console.log("Splitted string: ", strArr)
let replaced = str.replace("Sgroup", "Le Duc Tai")
console.log("Replaced string: ", replaced)
let sliced = str.slice(0, 4)
console.log("Sliced string: ", sliced)
let numberInStr = str.search("101")
console.log("Number in string: ", numberInStr)
console.log("Index of 101:  ", str.indexOf("101"))



let arr = [96, 82, 10, 40, 32]
let removed = arr.pop()
console.log(arr, removed)
arr.push(29)
let filterdArr = arr.filter((element) => {
    return element > 50
})
console.log("for each:")
//do not return anything
arr.forEach((element, index) => {
    console.log(index + " " + element)
})
console.log("Filtered Array: ", filterdArr)
//return a new array
const mappedArray = arr.map(number => {
    return number * 10;
});
console.log("Mapped Array: ", mappedArray)
let some = arr.some((element) => {
    return element > 30;
})
let every = arr.every((element) => {
    return element > 30;
})
console.log("Some element is bigger than 30: ", some)
console.log("Every element is bigger than 30: ", every)
let sum = arr.reduce((initial, element) => {
    return initial + element
}, 0)

console.log("Sum of every elements using reduce: ", sum)
let manyNumbers = [1, 1, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 6, 7, 7, 7, 7]
const reduceOccurrences = manyNumbers.reduce((acc, cur, index, arr) => {
    acc[cur] ? acc[cur]++ : acc[cur] = 1
    return acc
}, {})
console.log("Using reduce to count occurences of each element: ", reduceOccurrences)
