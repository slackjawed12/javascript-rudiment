const array = [1, 2, 3];
// Symbol.iterator 메서드 호출 : 이터레이터 반환
const iterator = array[Symbol.iterator]();

console.log("next" in iterator);

// next 호출하면 이터러블 순화
// 순회 결과를 나타내는 이터레이터 리절트 객체 반환
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
