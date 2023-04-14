let obj = {name : 'hong', num : 1, weight : 72.3};
let {name, num, weight} = obj;
console.log(name);
console.log(num);
console.log(weight);

let arr = [10,20,30];
let [a,b] = arr;
console.log(a);
console.log(b);
console.log(c);

let obj2 = obj;
obj.name = 'song';s
console.log(obj);
console.log(obj2);

let obj3 = {...obj};
obj.name = 'song';
console.log(obj);
console.log(obj3);