function biggestEvenNumber(input){
    let arr = input.split(", ");
    let evenArr = [];
    for (let i = 0; i < arr.length; i++){ 
        if (arr[i]%2==0) evenArr.push(parseInt(arr[i]));
    }
    console.log(evenArr);
    if (evenArr.length==0) return -1;
    else{
        let max = evenArr[0];
        for (let i = 0; i < evenArr.length; i++){
            if (evenArr[i]>max) max = evenArr[i];
            
        }
        return max;
    }
}
function fib( n)
{
    if (n <= 1) {
        return n;
    }
 
    return fib(n - 1) + fib(n - 2);
}
const button1 = document.querySelector('.btn-1');
const button2 = document.querySelector('.btn-2');

button1.addEventListener('click',function(){
    const number = document.getElementById('Bai1');
    alert(biggestEvenNumber(number.value));
})
button2.addEventListener('click',function(){
    const number = document.getElementById('Bai2');
    alert(fib(number.value));
})

