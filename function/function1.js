// sayHi.counter = 0; // 변수선언
function sayHi(){
    sayHi.counter = 0; // 변수선언
    sayHi.counter++;
    console.log(sayHi.counter);
}

sayHi();
sayHi();
console.log(sayHi.counter);

function makeCounter(){
    counter.cnt = 0;
    function counter(){
        return counter.cnt++;
    }
    return counter;
}
let c = new makeCounter();
// console.log(c());
// console.log(c());
// console.log(c());