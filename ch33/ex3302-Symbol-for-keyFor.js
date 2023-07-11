// Symbol.for : 전역 symbol 레지스트리로 값을 관리
const s1 = Symbol.for("mySymbol");
const s2 = Symbol.for("mySymbol");

console.log(s1 === s2);

// keyFor : 전역 심벌 레지스트리에 저장된 심벌값 키 추출
const s3 = Symbol.for("foo");
console.log(Symbol.keyFor(s3));

const s4 = Symbol("foo");
console.log(Symbol.keyFor(s4));
