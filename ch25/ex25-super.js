// 1. super 키워드의 호출
// super class
class Base {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

class Derived extends Base {}

// superclass의 프로퍼티를 그대로 갖는 child 생성
// 이런 경우만 있으면 constructor 생략 가능
const derived = new Derived(1, 2);
console.log(derived);

// 생성자 명시하는 경우 super 생략 불가. 반드시 호출해야 함
// super 호출 전에는 this 참조 불가
// super는 subclass의 constructor에서만 호출 가능
class DerivedV2 extends Base {
  constructor(a, b, c) {
    super(a, b);
    this.c = c;
  }
}

// 기본 생성자만 있으면 a:1, b:2까지만 할당
const derivedV2 = new DerivedV2(1, 2, 3);
console.log(derivedV2);

// 2. super 참조 : superclass의 메서드를 호출
// super 키워드의 참조는 아래와 같은 표현임.
// [[HomeObject]] : 메서드 자신을 바인딩하는 객체 (일반적으로 prototype) - 축약표현 정의된 함수만 있음
// super = Object.getPrototypeOf([[HomeObject]])
class BaseV3 {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `hi, i'm ${this.name}`;
  }
}

class DerivedV3 extends BaseV3 {
  sayHi() {
    // super.sayHi : super class의 프로토타입 메서드
    return `${super.sayHi()}. how are you doing?`;
  }
  // super 참조는 이것과 같다.
  // sayHiTwo() {
  //   const __super = Object.getPrototypeOf(Derived.prototype);
  //   return `${__super.sayHiTwo.call(this)}, how are you doing?`;
  // }
}

// 인수 전달 안하면 undefined
// const derivedV3 = new DerivedV3();
const derivedV3 = new DerivedV3("lee");
console.log(derivedV3.sayHi());
// console.log(derivedV3.sayHiTwo());

// 객체 리터럴 방식
const baseLiteral = {
  name: "lee",
  sayHi() {
    return `Hi! ${this.name}`;
  },
};

const derivedLiteral = {
  __proto__: baseLiteral,
  sayHi() {
    return `${super.sayHi()}. how are you doing?`;
  },
};

console.log(derivedLiteral.sayHi());

// subclass 정적 메서드의 super 참조 : superclass 정적 메서드의 같은 메서드
// superclass의 같은 이름의 메서드가 static이 아니면 is not a function 오류
class BaseStaticMethod {
  static sayHi() {
    return "hi";
  }
}

class DerivedStaticMethod extends BaseStaticMethod {
  static sayHi() {
    return `${super.sayHi()}, how are you doing?`;
  }
}

console.log(DerivedStaticMethod.sayHi());
