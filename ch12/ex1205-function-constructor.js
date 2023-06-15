/* Function 생성자 함수 사용 */
var add = new Function('x', 'y', 'return x+y');
console.log(add(2, 5));

// 선언문이나 표현식으로 생성한 함수와 다르게 동작한다.
var add1 = (function () {
    var a = 10;
    return function (x, y) {
        return x + y + a;
    };
}());

console.log(add1(1, 2));

var add2 = (function () {
    var a = 10;
    return new Function('x', 'y', 'return x + y + a');
}());

// console.log(add2(1, 2)); // a is not defined

