const person = {};

Object.defineProperty(person, 'firstName', {
    value: 'Gildong',
    writable: true,
    enumerable: true,
    configurable: true
});

// 디스크립터 객체의 프로퍼티를 명시하지 않으면 undefined, false로 초기화된다.
Object.defineProperty(person, 'lastName', {
    value: 'Hong',
});

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName', descriptor);

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);

// [[Enumerable]] false : for...in이나 Object.keys로 열거 불가
console.log(Object.keys(person));

// [[Writable]] false
// 변경하는 문은 무시됨
person.lastName='Lee';

// [[Configurable]] false
// 삭제문 무시
delete person.lastName;

// 재정의 불가
// Object.defineProperty(person, 'lastName', {enumerable: true});

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);

// 접근자 프로퍼티 정의
Object.defineProperty(person, 'fullName', {
    get() {
        return `${this.firstName} ${this.lastName}`;
    },
    set(name){
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable:true,
    configurable:true
});

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName', descriptor);

// setter 호출
person.fullName = 'Baekho Gang';
console.log(person.fullName);   // 결과 : Baekho Hong

/** defineProperties */
const person2 = {};

Object.defineProperties(person, {
    
})


