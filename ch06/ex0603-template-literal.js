// 템플릿 리터럴 예시
var template = `Template literal`;
console.log(template);

// var str = 'Hello
// world';

// 일반 문자열에서 공백 표시 : 이스케이프 시퀀스 필요
// ex) 줄바꿈, 들여쓰기 된 HTML
var template2 = '<ul>\n\t<li><a href="#">Home</a></li>\n</ul>';
console.log(template2);

// 멀티라인 문자열 
var template3 = `<ul>
    <li><a href="#">Home</a></li>
</ul>`;
console.log(template3);

// 표현식 삽입
var first = 'Gil-dong';
var last = 'Hong';

console.log(`My name is ${first} ${last}`);

console.log(`1+2=${1 + 2}`);
