// IIFE 패턴으로 Person 생성자와 프로토타입에 메서드 추가 후 변수에 할당
const Person = (function (){
    // 생성자 함수
    function Person(name){
        this.name = name;
    }

    // 프로토타입 메서드
    Person.prototype.sayHello = function() {
        console.log(`Hi! My name is ${this.name}`);
    }

    // 생성자 함수 반환
    return Person;
}());

console.log(Person.prototype);
const me = new Person('Lee');

// 인스턴스 메서드
me.sayHello = function(){
    console.log(`안녕하세요. 제 이름은 ${this.name}입니다.`);
};

// 인스턴스 메서드가 호출된다.
me.sayHello();

// 인스턴스 메서드 삭제
delete me.sayHello;
me.sayHello();

// 두번 해도 프로토타입의 메서드를 삭제하진 않는다.
delete me.sayHello;
me.sayHello();

// 프로토타입 메서드 변경 : 직접 접근
Person.prototype.sayHello = function() {
    console.log(`Hey! my name is ${this.name}`);
};
me.sayHello();

delete Person.prototype.sayHello;
// me.sayHello();