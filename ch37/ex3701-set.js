const set = new Set();
console.log(set);

// 이터러블을 인수로 받아서 객체 생성 - 중복값은 제외
const set1 = new Set([1, 2, 3, 3]);
console.log(set1);

const set2 = new Set("hello");
console.log(set2);

const uniq = (array) => array.filter((v, i, self) => self.indexOf(v) === i);
console.log(uniq([2, 1, 2, 3, 4, 3, 4]));

const uniqV2 = (array) => [...new Set(array)];
console.log(uniqV2([2, 1, 2, 3, 4, 3, 4]));

// 요소 개수 확인 : size 프로퍼티 (getter 접근자 프로퍼티)
const { size } = new Set([1, 2, 3, 3]);
console.log(size);

const foo = new Set([1, 2, 3]);
console.log(Object.getOwnPropertyDescriptor(Set.prototype, "size"));
// set.size = 10; // typeerror
// 책에서 설명은 무시된다고 하는데, type 에러 발생함.
console.log(set.size);

// 요소 추가 : Set.prototype.add
const bar = new Set();
console.log(bar);

bar.add(1);
console.log(bar);
// 메서드 체이닝 가능
bar.add(2).add(3).add(3);
console.log(bar);

// 비교연산자는 NaN을 다르게 평가. +0, -0은 같다고 평가
bar.add(NaN).add(NaN).add(+0).add(-0);
// NaN은 한번만 추가된다.
console.log(bar);

// 모든 값을 요소로 저장할 수 있음.
const baz = new Set();

baz
  .add(1)
  .add("a")
  .add(true)
  .add(undefined)
  .add(null)
  .add([])
  .add({})
  .add(() => {})
  .add(Symbol("foo"));

console.log(baz);

// 요소 존재 확인 : has
const store = new Set([1, 2, 3]);
console.log(store.has(1));
console.log(store.has(5));

// 요소 삭제 : delete - chaining 불가능
console.log(store.delete(2));
console.log(store.delete(5)); // 무시
console.log(store);

// 일괄삭제 : clear
console.log(store.clear()); // undefined
console.log(store);

// 순회 : forEach - 첫번째 인수와 두번째인수는 값이 같다
const storeV2 = new Set([1, 2, 3, 4, 5]);
storeV2.forEach((v1, v2, storeV2) => console.log(v1, v2, storeV2));

// 이터러블이므로 for ... of, spread, 배열 디스트럭처링 가능
console.log(Symbol.iterator in storeV2); // true
for (const val of storeV2) {
  console.log(val);
}

console.log([...storeV2]);

const [a, ...rest] = storeV2;
console.log(a, rest);

// 순서는 추가 순서임.
