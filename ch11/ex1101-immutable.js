// const : 재할당 금지된 변수
const o = {};
// 변수에 할당한 객체는 변경 가능하다
o.a=1;
console.log(o);

// string
var str1='';
var str2='hello';

// immutable
var str3 = 'Hello';
str3= 'world';

// string index 접근
var str4 = 'string four';
console.log(str4[0]);
console.log(str4.length);
console.log(str4.toUpperCase());

// immutable 확인 : 인덱스로 각 문자 접근해도 변경 X
var str5 = 'string five';
str5[0] = 'S';
console.log(str5);
