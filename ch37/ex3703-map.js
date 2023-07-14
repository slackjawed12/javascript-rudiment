const map = new Map();
console.log(map);

// 키 밸류 쌍으로 이루어진 이터러블 요소로 구성된 이터러블을 인수로 받아 생성 가능
const map1 = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
  ["key1", "value3"],
]);

// 중복값은 덮어쓴다.
console.log(map1);

// 요소 개수 : size
const { size } = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
  ["key1", "value3"],
]);

console.log(size);

// Set의 것과 마찬가지로 접근자 프로퍼티임. 숫자 할당해서 요소 개수 변경하는 행동 불가
console.log(Object.getOwnPropertyDescriptor(Map.prototype, "size"));
// map1.size = 10;
// TypeError
console.log(map1.size);

// 요소 추가 : set 메서드
map1.set("key3", "value4");
console.log(map1);

// 요소 추가는 메서드 체이닝 가능
map1.set("key4", "value5").set("key5", "value6").set("key5", "value7");

console.log(map1);

// NaN과 +0, -0은 같은 값으로 취급
map1.set(NaN, "12").set(NaN, "32452");
console.log(map1);

map1.set(0, "3").set(-0, "after");
console.log(map1);

// 객체의 프로퍼티 키 : 문자열, 심벌
// Map 객체는 키 타입에 제한이 없음 - 모든 값을 키로 쓸 수 있다.
const personOne = { name: "lee" };
const personTwo = { name: "kim" };

map1.set(personOne, "developer").set(personTwo, "desinger");

console.log(map1);

// 요소 얻기 : get
console.log(map1.get(personOne));
console.log(map1.get(NaN));

// 존재 여부 확인 : has
console.log(map1.has(personTwo));
console.log(map1.has(0));

// 요소 삭제 : delete - 체이닝 불가능
console.log(map1.delete(personOne));
console.log(map1.delete("key6"));
console.log(map1);

// 요소 일괄 삭제 - clear
map1.clear();
console.log(map1);
