const Person = (function () {
    function Person(name) {
        this.name = name;
    }

    // 생성자 함수의 prototype 프로퍼티를 통해 프로토타입 교체
    // 객체 리터럴 할당
    // constructor 없어서 Person 생성자 참조가 안됨.
    Person.prototype = {
        sayHello() {
            console.log(`Hi! my name is ${this.name}`);
        }
    };

    return Person
}());

const me = new Person('Lee');
console.log(me.constructor !== Person);
console.log(me.constructor === Object);

// 되살리기 : constructor 프로퍼티 추가
Person.prototype.constructor = Person;
console.log(me.constructor === Person);

// 인스턴스에 의한 프로토타입 교체
function PersonTwo(name) {
    this.name = name;
    // this.sayHello = function () {
    //     console.log("안녕하세요");
    // }
}

const meTwo = new PersonTwo('Lee');

const parent = {
    sayHello() {
        console.log(`my name is ${this.name}`);
    }
};

// 객체의 프로토타입을 parent 객체로 교체
Object.setPrototypeOf(meTwo, parent);
console.log(meTwo.__proto__);
meTwo.sayHello();

// 올바르게 교체하기 - prototype과 constructor가 서로 연결되도록
function PersonV3(name){
    this.name = name;
}

const meV3 = new PersonV3('Lee')
// 프로토타입으로 교체할 객체
const parentV3 = {
    // constructor 프로퍼티와 생성자 함수간 연결 설정
    constructor: PersonV3,
    sayHello(){
        console.log(`my name is ${this.name}`);
    }
};
// 생성자함수 prototype 프로퍼티 - 프로토타입 연결 설정
PersonV3.prototype = parentV3;

// 교체
Object.setPrototypeOf(meV3, parentV3);
meV3.sayHello();

console.log(meV3.constructor===PersonV3);
console.log(meV3.constructor!==Object);

console.log(PersonV3.prototype === Object.getPrototypeOf(meV3));
