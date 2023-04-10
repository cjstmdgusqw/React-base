function Calculator(num1, num2){
    this.num1 = num1;
    this.num2 = num2;
    this.sum = function(){
        return this.num1 + this.num2;
    }
    this.mul = function(){
        return this.num1 * this.num2;
    }
}



let calculator = new Calculator(20,10);

console.log('sum = ' + calculator.sum());
console.log('mul = ' + calculator.mul());

// sum = 20
// mul = 200
