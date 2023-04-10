class User {
    constructor(){ // 변수는 컨스럭트안에서 실행을 시킨다. name 과 age를 생략시켜도 상관없다 constructor(name, age)
        this.name = 'hong'; // 전역변수
        this.age = 20; // 지역변수
    }
    sayHi(){
        console.log(this.name);
        console.log(this.age);
    }
}

let user = new User();
let user2 = new User('hong', 20);
user.sayHi();