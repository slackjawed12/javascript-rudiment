// Symbol 함수 호출해서 생성. new 연산자 없음
const mySymbol = Symbol();
console.log(typeof mySymbol);

console.log(mySymbol);

// new Symbol(); // TypeError

const mySymbol1 = Symbol("mySymbol");
const mySymbol2 = Symbol("mySymbol");
console.log(mySymbol1 === mySymbol2);

// 객체처럼 접근하면 래퍼객체 생성
console.log(mySymbol1.description);
console.log(mySymbol1.toString());

// string, number로는 타입변환 불가
// console.log(mySymbol + "");
// console.log(+mySymbol);
// boolean으로는 타입 변환 가능
console.log(!!mySymbol);
if (mySymbol) {
  console.log("mysymbol is not empty");
}
