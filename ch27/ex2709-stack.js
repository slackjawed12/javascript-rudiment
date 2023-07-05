// 생성자 함수로 구현한 스택
const Stack = (function () {
  function Stack(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array} is not an array.`);
    }
    this.array = array;
  }
  // 생성자 함수에 의한 프로토타입 교체
  Stack.prototype = {
    constructor: Stack,
    push(value) {
      return this.array.push(value);
    },
    pop() {
      return this.array.pop();
    },
    // 스택의 복사본 배열 반환
    entries() {
      return [...this.array];
    },
  };
  return Stack;
})();

const stackInstance = new Stack([1, 2]);
console.log(stackInstance.entries());
stackInstance.push(3);
console.log(stackInstance.entries());
stackInstance.pop();
console.log(stackInstance.entries());
