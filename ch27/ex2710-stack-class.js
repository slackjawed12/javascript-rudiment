// 클래스로 구현한 스택
class Stack {
  #array; // private class member

  constructor(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array} is not an array`);
    }
    this.array = array;
  }

  push(value) {
    return this.#array.push(value);
  }
  pop() {
    return this.#array.pop();
  }
  entries() {
    return [...this.#array];
  }
}

const stackInstance = new Stack([1, 2]);
console.log(stackInstance.entries());
stackInstance.push(3);
console.log(stackInstance.entries());
stackInstance.pop();
console.log(stackInstance.entries());
