// 객체의 프로퍼티키를 심벌 값으로 만들기
// 다른 프로퍼티 키와 충돌하지 않음
const obj = {
  [Symbol.for("mySymbol")]: 1,
};

console.log(obj[Symbol.for("mySymbol")]);

// 외부에 노출할 필요 없는 프로퍼티를 은닉함
for (const key in obj) {
  console.log(key);
}

console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));

// 심벌값을 프로퍼티키로 쓴 프로퍼티를 찾음
console.log(Object.getOwnPropertySymbols(obj));

const symbolKey = Object.getOwnPropertySymbols(obj)[0];
console.log(obj[symbolKey]);
