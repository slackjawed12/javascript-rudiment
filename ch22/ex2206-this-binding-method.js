const person = {
  name: "Lee",
  getName() {
    return this.name;
  },
};

console.log(person.getName());

const anotherPerson = {
  name: "Kim",
};

anotherPerson.getName = person.getName;

console.log(anotherPerson.getName());

const getName = person.getName;
console.log(getName()); // undefined : this.name=global.name이기 때문

// prototype 메서드 내부의 this는 호출한 객체
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const me = new Person("Lee");

console.log(me.getName());

Person.prototype.name = "Kim";

console.log(Person.prototype.getName());

const meTwo = new Person("park");
console.log(meTwo.getName());

// 생성자 함수의 this는 생성할 인스턴스
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());

const circle3 = Circle(15);
console.log(circle3);
console.log(radius); // 15 : 일반함수 호출된 Circle 내부의 this는 전역 객체이기 때문

// Function.prototype.apply/call/bind
function getThisBinding() {
  console.log(arguments);
  return this;
}

const thisArg = { a: 1 };
// console.log(getThisBinding()); // global

// this 바인딩
console.log(getThisBinding.apply(thisArg));
console.log(getThisBinding.call(thisArg));

// apply는 배열로 함수 인수 전달
console.log(getThisBinding.apply(thisArg, [1, 2, 3]));
// call 메서드는 쉼표로 구분한 리스트 형식
console.log(getThisBinding.call(thisArg, 1, 2, 3));

// 용도 : arguments 유사배열 객체에 배열 메서드를 사용하는 경우
function convertArgsToArray() {
  console.log(arguments);

  // this
  // console.log(arguments.slice(1)); // typeError
  const arr = Array.prototype.slice.call(arguments, 1); // 1부터 slice
  console.log(arr);

  return arr;
}

convertArgsToArray(1, 2, 3); // 2, 3

// Function.prototype.bind
function getThisBinding() {
  return this;
}

const thisArgTwo = { a: 1 };

console.log(getThisBinding.bind(thisArgTwo)); // 반환값 : this 바인딩이 교체된 함수
console.log(getThisBinding.bind(thisArgTwo)());
