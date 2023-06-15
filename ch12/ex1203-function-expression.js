/* 함수 표현식 */
// 표현식의 함수 이름은 생략가능하다 : 익명함수.
// 표현식의 리터럴은 
var sum = function(x,y){
    return x + y;
}

console.log(sum(2,5));

var add = function foo(x,y){
    return x+y;
}

console.log(add(2,5));

// console.log(foo(2,5)); : ReferenceError foo is not defined
