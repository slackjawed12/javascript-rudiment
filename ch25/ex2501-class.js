// 클래스는 함수이다 - 일급객체
class PersonV1 {}

const PersonV2 = class {};
const PersonV3 = class MyClass {};

class Person {
  // 생성자
  constructor(name) {
    // 인스턴스 생성
    this.name = name;
  }

  sayHi() {
    console.log(`my name is ${this.name}`);
  }

  // 정적 메서드
  static sayHello() {
    console.log("hello");
  }
  // 생성자 함수의 방식
  // Person.sayHello = function(){
  //   console.log("hello");
  // }
}

const me = new Person("lee");

console.log(me.name);
me.sayHi();
Person.sayHello();
