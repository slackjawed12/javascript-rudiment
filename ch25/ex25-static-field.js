class MyClass {
  static PI = 22 / 7;
  static #num = 10;
  static increment() {
    return ++MyClass.#num;
  }
}

console.log(MyClass.PI);
console.log(MyClass.increment());
