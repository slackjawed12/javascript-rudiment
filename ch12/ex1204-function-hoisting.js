// 선언문은 호이스팅 된다. 표현식은 표현식 이전에 호출할 수 없다.
console.dir(add); // [Function: add]. 함수 호이스팅
console.dir(sub); // undefined. 변수 호이스팅

console.log(add(2, 5));
// console.log(sub(2,5));   TypeError : sub is not a function - undefined를 호출한 것과 같다

function add(x, y) {
    return x + y;
}

var sub = function (x, y) {
    return x - y;
}
console.log(sub(2, 5));