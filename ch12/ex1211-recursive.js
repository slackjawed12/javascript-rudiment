function countdown(n) {
    for (var i = n; i >= 0; i--) {
        console.log(i);
    }
}
countdown(10);

// 재귀
function countdownRecursive(n) {
    if (n < 0) return;
    console.log(n);
    countdownRecursive(n - 1);
}
countdownRecursive(10);

// 팩토리얼
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

// 함수 표현식 재귀
var factorial = function foo(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));