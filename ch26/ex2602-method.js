const obj = {
  x: 1,
  // 메서드
  foo() {
    return this.x;
  },
  bar: function () {
    return this.x;
  },
};

console.log(obj.foo());
console.log(obj.bar());

// new obj.foo(); foo is not a constructor . 메서드이기 때문
new obj.bar();
console.log(obj.foo.hasOwnProperty("prototype"));
console.log(obj.bar.hasOwnProperty("prototype"));

// 표준 빌트인 객체의 프로토타입메서드, 정적 메서드 : non-constructor
console.log(String.prototype.toUpperCase.prototype);
console.log(Number.isFinite.prototype);
console.log(Array.prototype.map.prototype);
console.log(Array.from.prototype);

// [[HomeObject]]
const base = {
  name: "lee",
  sayHi() {
    return `Hi! ${this.name}`;
  },
};

const derived = {
  __proto__: base,
  sayHi() {
    // 메서드의 super 참조는 sayHi의 [[HomeObject]]의 프로토타입인 base를 가리킴
    return `${super.sayHi()}. how are you doing?`;
  },

  // syntaxError
  // sayHello: function () {
  //   return `${super.sayHi}. how are you?`;
  // },
};

console.log(derived.sayHi());
// console.log(derived.sayHello());
