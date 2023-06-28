function Person(name, age) {
  this.name = name;
  let _age = age;

  // 인스턴스 메서드 : 중복생성 문제
  this.sayHi = function () {
    console.log(`Hi! My name is ${this.name}. I am ${_age}`);
  };
}

// 프로토타입 메서드 : 중복생성 방지 but private 역할을 했던 _age 참조 불가
// Person.prototype.sayHi = function () {
//   console.log(`Hi! My name is ${this.name}. I am ${_age}`);
// };

const me = new Person("lee", 20);
me.sayHi();
console.log(me.name);
console.log(me._age);

const you = new Person("kim", 30);
you.sayHi();
console.log(you.name);
console.log(you._age);

// 즉시실행함수 이용
const PersonV2 = (function () {
  let _age = 0;

  function PersonV2(name, age) {
    this.name = name;
    _age = age;
  }

  // 즉시실행함수 소멸되어도 _age를 참조하고 있으므로 클로저
  PersonV2.prototype.sayHi = function () {
    console.log(`Hi! My name is ${this.name}. I am ${_age}`);
  };

  // 클로저인 생성자 함수 반환
  return PersonV2;
})();

const one = new PersonV2("lee", 20);
console.log(one.name);
console.log(one._age);
one.sayHi();
const two = new PersonV2("kim", 30);
console.log(two.name);
console.log(two._age);
two.sayHi();
// 문제점 : 여러 인스턴스 생성할 때 자유변수 변경됨 - 추후 추가 예정이라함.
one.sayHi();
