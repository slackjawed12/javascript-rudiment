// 기명함수 표현식
var namedFunc = function foo (){};
console.log(namedFunc.name);

// 익명함수 표현식
// ES5 : 빈 문자열
var anonymousFunc = function(){};
console.log(anonymousFunc.name);

function bar(){}
console.log(bar.name);