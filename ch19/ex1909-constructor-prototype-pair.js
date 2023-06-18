console.log(Person.prototype);

// constructor. 호이스팅 됨
function Person(name){
    this.name=name;
}

// non-constructor
const PersonTwo = name => {
    this.name=name;
}

console.log(PersonTwo.prototype); // undefined


// 객체 리터럴로 생성하면 Object.prototype
const obj = {x:1};

console.log(obj.constructor === Object);
console.log(obj.hasOwnProperty('x'));

// Object 생성자 함수 : Object.prototype
// 객체 리터럴로 생성한 객체와 동일구조
const objTwo = new Object();
objTwo.x  = 1;

console.log(objTwo.constructor === Object);
console.log(objTwo.hasOwnProperty('x'));

// 생성자 함수로 생성 : Person.prototype
function Person(name){
    this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHello = function(){
    console.log(`Hi! My name is ${this.name}`);
}

const me = new Person('lee');
const you = new Person('Kim');

me.sayHello();
you.sayHello();



