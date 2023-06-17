// new 연산자를 통한 빈 객체 생성
const person = new Object();

person.name = 'Lee';
person.sayHello = function () {
    console.log('Hi! My name is ' + this.name);
};

console.log(person);
person.sayHello();

const strObj = new String('Lee');
console.log(typeof strObj);
console.log(strObj);
const strObjTwo = String('1234');
console.log(strObjTwo, typeof strObjTwo);  // 1234 string

const numObj = new Number(1234);
console.log(typeof numObj);
console.log(numObj);
const numObjTwo = Number(12345);
console.log(numObjTwo, typeof numObjTwo);  // 12345 number

const boolObj = new Boolean(true);
console.log(typeof boolObj);
console.log(boolObj);
const boolObjTwo = Boolean(false);
console.log(boolObjTwo, typeof boolObjTwo);  // false boolean

// 생성자로 함수 생성 - 권장하지 않음
const func = new Function('x', 'return x * x');
console.log(typeof func);
console.dir(func);
const funcTwo = Function('x', 'return x * x');
console.log(typeof funcTwo);

const arr = new Array(1, 2, 3);
console.log(typeof arr);
console.log(arr);

const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp);
console.log(regExp);

const date = new Date();
console.log(typeof date);
console.log(date);
