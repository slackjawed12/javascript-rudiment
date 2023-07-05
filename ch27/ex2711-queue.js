// unshift : 원본 배열의 선두에 요소로 추가함.
const arr = [1, 2];

let result = arr.unshift(3, 4);
console.log(result);

console.log(arr);

// 추천 : unshift보다는 스프레드문법
const arrV2 = [1, 2];
const newArr = [3, 4, ...arrV2];
console.log(newArr);

// shift : 첫 번째 요소 제거
const arrV3 = [1, 2];
let resultV3 = arrV3.shift();
console.log(resultV3);
console.log(arrV3);

// 생성자함수로 큐 구현
const Queue = (function () {
  function Queue(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array} is not an array.`);
    }
    this.array = array;
  }
  Queue.prototype = {
    constructor: Queue,
    enqueue(value) {
      return this.array.push(value);
    },
    dequeue() {
      return this.array.shift();
    },
    entries() {
      return [...this.array];
    },
  };

  return Queue;
})();

const queue = new Queue([1, 2]);
console.log(queue.entries());

queue.enqueue(3);
console.log(queue.entries());

queue.dequeue();
console.log(queue.entries());
