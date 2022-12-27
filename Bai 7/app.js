function addUp(n){
    return n*(n+1)/2;
}
function FizzBuzz(n){
    let result = [];
    for (let i =1;i<=n;i++){
        if (i%15==0){
            result.push("FizzBuzz");
        }
        else if (i%3==0){
            result.push("Fizz");
        }
        else if (i%5==0){
            result.push("Buzz");
        }
        else result.push(i);

    }
    return result;
}

const button = document.querySelector('.btn');
button.addEventListener('click',function(){
    const number = document.getElementById('UserInput');
    console.log(FizzBuzz(number.value));
})

