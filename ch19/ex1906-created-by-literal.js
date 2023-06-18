const obj = new Object();
console.log(obj.constructor === Object);

const add = new Function('a', 'b', 'return a+b');
console.log(add.constructor===Function);

function Person(name){
    this.name = name;
}
const me = new Person('lee');
console.log(me.constructor === Person);

// 리터럴로 객체 생성
const objTwo ={};
console.log(obj.constructor === Object); // true

const addTwo = function(a,b){return a+b;};

const arr = [1,2,3];
const regexp=/is/ig;


