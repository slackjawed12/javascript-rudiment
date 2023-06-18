const obj = {};
const parent = {x:1};
console.log(obj.__proto__);
// __proto__의 setter 호출
obj.__proto__ = parent;

console.log(obj.__proto__);
console.log(obj.x);

// 상호 참조 프로토타입 체인
const parentTwo = {};
const childTwo = {};

// childTwo.__proto__ = parentTwo;
// parentTwo.__proto__ = childTwo; // Cyclic __proto__ value

// objTwo : 프로토타입 체인 종점
const objTwo = Object.create(null);
console.log(objTwo.__proto__);  // undefined
console.log(Object.getPrototypeOf(obj)); // null

const objThree ={};
const parentThree = {x:3};

Object.getPrototypeOf(objThree);
Object.setPrototypeOf(objThree, parentThree);

console.log(objThree.x);


