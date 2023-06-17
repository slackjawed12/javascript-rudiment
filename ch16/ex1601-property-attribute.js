const o ={};

// o.[[Prototype]]
console.log(o.__proto__);

// 디스크립터 객체
const person = {
    name: 'lee'
};

console.log(Object.getOwnPropertyDescriptor(person, 'name'));

const person2 = {
    name: 'lee'
};
person2.age = 20;

console.log(Object.getOwnPropertyDescriptors(person2));
