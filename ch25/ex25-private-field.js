class Person {
  #name = "";
  constructor(name) {
    this.#name = name;
  }
  get name() {
    return this.#name;
  }
}

const me = new Person("lee");
console.log(me.#name); // syntaxError : Private field #name must be declared in an enclosing class
