const target = "Is this all there is?";

console.log(target.match(/is/i));
console.log(target.match(/is/gi));
// 임의의 3자리 문자열 대소문자 구분
console.log(target.match(/.../g));

// 반복검색 {m,n}: 앞선 패턴이 최소 m번, 최대 n번 반복되는 문자열
const targetTwo = "A AA B BB Aa Bb AAA";
console.log(targetTwo.match(/A{1,2}/g));
// 2번만 반복
console.log(targetTwo.match(/A{2}/g));
// 2번 이상
console.log(targetTwo.match(/A{2,}/g));
// 1번 이상 : + = {1,}과 같은 결과
console.log(targetTwo.match(/A+/g));
// 앞선 패턴이 0번이상, 1번 이하 : ? = {0,1}과 같은 결과

const colorstr = "color colour";
// colo 다음 u가 0번이상 1번이하 반복되고 r이 이어지는 문자열
console.log(colorstr.match(/colou?r/g));

// or 검색 : |
console.log(targetTwo.match(/A|B/g));

// A 또는 B가 한번 이상
console.log(targetTwo.match(/A+|B+/g));

// []로 or표현
console.log(targetTwo.match(/[AB]+/g));

const targetThree = "A AA BB ZZ Aa Bb";
console.log(targetThree.match(/[A-Z]+/gi));
console.log(targetThree.match(/[A-Za-z]+/g));

const numberTarget = "AA BB 12,345";
console.log(numberTarget.match(/[0-9]+/g));
console.log(numberTarget.match(/[0-9,]+/g));

// \d로 숫자 표현 - \D : 숫자가 아닌 문자
console.log(numberTarget.match(/[\d,]+/g));
console.log(numberTarget.match(/[\D,]+/g));

// \w : [A-Za-z0-9_], \W : \가 아닌 문자
const wordTarget = "Aa Bb 12,345 _$%&";
console.log(wordTarget.match(/[\w,]+/g));
console.log(wordTarget.match(/[\W,]+/g));

// NOT검색
const notTarget = "AA BB 12 Aa Bb";
console.log(notTarget.match(/[^0-9]+/g));

// 시작위치 검색
const url = "https://myurl.com";
console.log(/^https/.test(url));
// 마지막 위치 검색
console.log(/com$/.test(url));
