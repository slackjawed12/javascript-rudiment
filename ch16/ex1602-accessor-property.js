const person = {
    firstName: 'Gildong',
    lastName: 'Hong',

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
};

console.log(person.firstName+' '+person.lastName);

// setter 호출
person.fullName = 'Baekho Gang';
console.log(person);

// getter
console.log(person.fullName); 

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptor);

// 일반 객체의 __proto__ : 접근자 프로퍼티
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
// 함수 객체의 prototype : 데이터 프로퍼티
console.log(Object.getOwnPropertyDescriptor(function(){}, 'prototype'));
