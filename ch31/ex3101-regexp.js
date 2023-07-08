const tel = "010-1234-5678";
const regExp = /^\d{3}-\d{4}-\d{4}$/;
console.log(regExp.test(tel));

const target = "Is this all there is?";

const regexp = /is/i;
console.log(regexp.test(target));

// 생성자 함수
const regexpV2 = new RegExp(/is/i);
console.log(regexpV2.test(target));

const count = (str, char) => (str.match(new RegExp(char, "gi")) ?? []).length;

console.log(count("Is this all there is?", "is"));
console.log(count("Is this all there is?", "xx"));
