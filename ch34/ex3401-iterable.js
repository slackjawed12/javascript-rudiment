// 순회 가능한 데이터 컬렉션은 이터레이션 프로토콜을 준수하는 이터러블로 통일
// 이터러블 프로토콜
// 이터레이터 프로토콜
const isIterable = (v) =>
  v !== null && typeof v[Symbol.iterator] === "function";

console.log(isIterable([]));
console.log(isIterable(""));
console.log(isIterable(new Map()));
console.log(isIterable(new Set()));
console.log(isIterable({}));

const array = [1, 2, 3];

// 배열은 Array.prototype의 Symbol.iterator 메서드 상속받음
console.log(Symbol.iterator in array);

// 이터러블은 for ... of 순회 가능
for (const item of array) {
  console.log(item);
}

// 스프레드 문법 사용 가능
console.log([...array]);

// 배열 디스트럭처링 할당 사용
const [a, ...rest] = array;
console.log(a, rest);
