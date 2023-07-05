// literal
const arr = [1, 2, 3];
const arrEmpty = [];
const arrSparse = [1, , 3];

// Array constructor
// 전달된 인수 없음
const arrNoParam = new Array();
console.log(Object.getOwnPropertyDescriptors(arrNoParam)); // 사이즈 0

// 전달된 인수가 1개 : 0 이상, 2^32-1 이하 정수
const arrOneParam = new Array(10);
const arrLengthMax = new Array(4294967295);
console.log(Object.getOwnPropertyDescriptors(arrLengthMax));
// const arrLengthOver = new Array(4294967296); // invalid array length
console.log(Object.getOwnPropertyDescriptors(arrOneParam)); // 사이즈가 10인 희소배열 생성

// 전달된 인수가 2개이상인 숫자 : 해당 인수를 요소로 갖는 배열 생성
const arrTwoParam = new Array(10, 329, 23, 258);
console.log(Object.getOwnPropertyDescriptors(arrTwoParam));

// 전달된 인수가 숫자가 아님 : 해당 인수를 요소로 갖는 배열 생성
const arrNotNumber = new Array("apple");
console.log(Object.getOwnPropertyDescriptors(arrNotNumber));

// new 연산자 없이 생성 : new.target 확인하므로 ok
const arrNonew = Array(1, 2, 3);
console.log(Object.getOwnPropertyDescriptors(arrNonew));

// Array.of : 개수 상관없이 전달된 인수를 요소로 갖는 배열 생성
const arrof = Array.of(1);

// Array.from (ES6)
// 첫번째인수 : 유사배열객체, 이터러블
console.log(Array.from({ length: 2, 0: "a", 1: "b" }));
console.log(Array.from("Hello"));

console.log(Array.from({ length: 3 }));
// 두번째인수 : 콜백함수
// 콜백함수의 첫 번째 인수는 from의 첫번째 파라미터의 처리되고 있는 배열요소
// 콜백함수의 두 번째 인수는 인덱스
console.log(Array.from({ length: 3 }, (_, i) => i));

// 기존 배열에서 다른 배열을 만들때도 사용 가능
let base = [1, 2, 3, 4, 5];
let fromBase = Array.from(base, (x, i) => x * i);
let fromBaseTwo = Array.from(base, (x) => x * x);

console.log(fromBase);
console.log(fromBaseTwo);

// 인수를 무시할 때는 관용적으로 _를 사용.
console.log(
  Array.from(Array(10), (_, i) => {
    return i * 2;
  })
);

let onlyFirstTrue = Array.from(Array(4), (_, i) => i === 0);
console.log(onlyFirstTrue);
