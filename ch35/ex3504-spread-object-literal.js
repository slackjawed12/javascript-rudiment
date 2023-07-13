const obj = { x: 1, y: 2 };
// 스프레드 프로퍼티로 객체 얕은 복사
const copy = { ...obj };

console.log(copy);
console.log(obj === copy);

// 객체 병합
const merged = { x: 1, y: 2, ...{ a: 3, b: 4 } };
console.log(merged);

// ES6 이전
const mergedV1 = Object.assign({}, { x: 1, y: 2 }, { y: 10, z: 3 });
console.log(mergedV1);

const changedV1 = Object.assign({}, { x: 1, y: 2 }, { y: 100 });
console.log(changedV1);

const addedV1 = Object.assign({}, { x: 1, y: 2 }, { z: 0 });
console.log(addedV1);

// 스프레드 프로퍼티로 Object assign 대체
const mergedV2 = { ...{ x: 1, y: 2 }, ...{ y: 10, z: 3 } };
console.log(mergedV2);

// 특정 프로퍼티 변경
const changedV2 = { ...{ x: 1, y: 2 }, y: 100 };
const changedV3 = { ...{ x: 1, y: 2 } };
console.log(changedV2);

// 프로퍼티 추가
const addedV2 = { ...{ x: 1, y: 2 }, z: 0 };
console.log(addedV2);
