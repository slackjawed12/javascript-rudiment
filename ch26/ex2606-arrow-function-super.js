class Base {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi, ${this.name}`;
  }
}

class Derived extends Base {
  // constructor 암묵적으로 생성
  sayHi = () => `${super.sayHi()}, how are you doing?`;
}

const derived = new Derived("lee");
console.log(derived.sayHi());
