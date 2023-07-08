// 특정 단어로 시작 : /^word/
const url = "https://myurl.com";
console.log(/^https?:\/\//.test(url));
console.log(/^(http|https):\/\//.test(url));

// 특정 단어로 끝남 : /word$/
const fileName = "index.html";
console.log(/html$/.test(fileName));

// 숫자로만 이루어진 문자열 검사
const numberTarget = "12345";
console.log(/^\d+$/.test(numberTarget));

// 하나 이상의 공백 : \s - [\t\r\n\v\f]
const spaceTarget = " Hi!";
console.log(/^[\s]+/.test(spaceTarget));

// 아이디 사용 가능 여부 : 조건 - 4~10자리, 알파벳 대소문자 또는 숫자
const idTarget = "eowiqfjowe";
const idRegExp = /^[A-Za-z0-9]{4,10}$/g;
console.log(idRegExp.test(idTarget));

// 메일 주소 형식 검사
const email = "wfeoiejwf@gmail.com";
const emailRegExp =
  /^[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
console.log(emailRegExp.test(email));

const cellPhone = "010-1234-5678";
const cellPhoneRegExp = /^\d{3}-\d{3,4}-\d{4}$/;
console.log(cellPhoneRegExp.test(cellPhone));

// 특수문자 포함 여부 검사
const target = "abc$123";
const targetRegExp = /[^A-Za-z0-9]/gi;
const targetRegExpV2 = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%^\\\=\(\'\"]/gi;
console.log(targetRegExp.test(target));
console.log(targetRegExpV2.test(target));

// 특수문자 제거 : replace와 정규표현식 활용
console.log(target.replace(targetRegExpV2, ""));
