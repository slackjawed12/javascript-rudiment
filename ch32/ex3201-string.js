const strObj = new String();
console.log(strObj);

const strObj2 = new String("ldskfj");
console.log(strObj2);
// 이터러블 - 인덱스 접근
console.log(strObj2[0]);
// TypeError. 책의 설명과 다름
// strObj2[0] = "p";
console.log(strObj2);

const strNumber = new String(12345);
console.log(strNumber);

const strNull = new String(null);
// 'null'
console.log(strNull, strNull.length);

// new 연산자 없이 호출 : 문자열 반환 - 변환에 이용 가능
console.log(String(1));
console.log(String(NaN));
console.log(String(Infinity));
console.log(String(true));

// length property
console.log("hello".length);
console.log("안녕하세요".length);
