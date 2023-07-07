// 생성자함수에 인수 전달 안하면 내부슬롯 0인 객체 생성
const numObj = new Number();
console.dir(numObj);

const numObjV2 = new Number(10);
console.log(numObjV2);

const numObjV3 = new Number("10");
console.log(numObjV3);

const numObjV4 = new Number("hello");
console.log(numObjV4); // NaN

// new 연산자 없이 호출 : 숫자 반환 (타입변환에 이용 가능)
console.log(Number("0"));
console.log(Number("-1"));
console.log(Number("10.53"));

console.log(Number(true));
console.log(Number(false));
