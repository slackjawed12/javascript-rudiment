// 일반함수 this
class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }

  add(arr) {
    console.log(this); // Prefixer {prefix: 'webkit-'}
    return arr.map(function (item) {
      // typeError : 클래스 내부의 코드에는 strict mode
      // strict mode에서 일반함수 호출 this : undefined.
      // 해결 방안 : map 함수의 경우 두 번째 인수 사용, Function.prototype.bind 메서드 이용 등
      return this.prefix + item;
    });
  }

  addV2(arr) {
    // 화살표 함수는 this 바인딩을 갖지 않으므로 상위 스코프의 this를 참조하게 됨 : 스코프 체인 탐색함
    return arr.map((item) => this.prefix + item);
  }
}

const prefixer = new Prefixer("webkit-");
// console.log(prefixer.add(["transition", "user-select"]));
console.log(prefixer.addV2(["transition", "user-select"]));

(function () {
  const foo = () => console.log(this);
  foo();
}).call({ a: 1 });

(function () {
  const bar = () => () => console.log(this);
  bar()();
}).call({ a: 1 });

// 화살표함수의 this 확인
const counter = {
  num: 1,
  increase: () => ++this.num,
};

console.log(counter.increase());

// call, apply, bind로 this 교체 불가
global.x = 1;
const normal = function () {
  return this.x;
};
const arrow = () => this.x;

console.log(normal.call({ x: 10 }));
console.log(arrow.call({ x: 10 }));

// 항상 상위 스코프의 this 바인딩 참조
const add = (a, b) => a + b;

console.log(add.call(null, 1, 2));
console.log(add.apply(null, [1, 2]));
console.log(add.bind(null, 1, 2)());

// 메서드 축약표현이 아닌 메서드로 정의한 함수에서 화살표함수 쓰면 안 됨
// this가 상위스코프의 전역객체를 가리킴
const person = {
  name: "lee",
  sayHi: () => console.log(`Hi ${this.name}`),
};
person.sayHi();

// 메서드 축약표현과 화살표함수는 괜찮다.
const personV2 = {
  name: "kim",
  sayHi() {
    console.log(`Hi ${this.name}`);
  },
};
personV2.sayHi();

// 프로토타입 객체의 프로로토타입 메서드로 화살표함수 할당하는 경우
function Person(name) {
  this.name = name;
}

// 화살표 함수의 this : 상위스코프 thisValue인 전역객체가 됨
Person.prototype.sayHi = () => console.log(`Hi ${this.name}`);
const personV3 = new Person("lee");
personV3.sayHi();

function PersonV2(name) {
  this.name = name;
}

// 프로퍼티의 동적 추가에서는 축약표현을 쓸 수 없으므로 일반함수를 할당한다.
PersonV2.prototype.sayHi = function () {
  console.log(`Hi, ${this.name}`);
};

const personV4 = new PersonV2("kim");
personV4.sayHi();

// ES6 메서드를 동적추가 하려면?
function PersonV3(name) {
  this.name = name;
}

// prototype 객체에 직접 객체리터럴을 바인딩
PersonV3.prototype = {
  // constructor 프로퍼티와 생성자 함수 연결을 재설정
  constructor: PersonV3,
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};

const personV5 = new PersonV3("Lee");
personV5.sayHi();
