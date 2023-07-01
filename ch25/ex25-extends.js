class Animal {
  constructor(age, weight) {
    this.age = age;
    this.weight = weight;
  }
  eat() {
    return "eat";
  }
  move() {
    return "move";
  }
}

class Bird extends Animal {
  fly() {
    return "fly";
  }
}

const bird = new Bird(1, 5);
console.log(bird);
console.log(bird instanceof Bird);
console.log(bird instanceof Animal);

// 생성자 함수 상속 : 뒤에 [[Construct]] 내부 메서드를 갖는 표현식이면 가능
function Base(a) {
  this.a = a;
}

class Derived extends Base {
  b = 3;
}

const derived = new Derived(1);
console.log(derived);

// 동적 상속
function Base1() {}
class Base2 {}

let condition = true;

// 조건에 따라 상속 대상을 결정함
class DynamicDerived extends (condition ? Base1 : Base2) {}

const dynamicDerived = new DynamicDerived();
console.log(dynamicDerived);

console.log(dynamicDerived instanceof Base1);
console.log(dynamicDerived instanceof Base2);

// subclass의 암묵적 constructor
class BaseV3 {
  constructor() {}
}

class DerivedV3 extends BaseV3 {
  constructor(...args) {
    super(...args);
  }
}

const derivedV3 = new DerivedV3();
console.log(derivedV3); // DerivedV3{}
