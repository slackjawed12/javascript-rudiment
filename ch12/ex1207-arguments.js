// 부족한 인수
function add1(x, y) {
    return x + y;
}
console.log(add1(2)); // NaN

// 초과된 인수
function add(x, y) {
    console.log(arguments);
    return x + y;
}
console.log(add(2, 5, 10));

// 인수 확인
function add2(x, y) {
    return x + y;
}

console.log(add2(2));
console.log(add2('a', 'b'));

function add3(x, y) {
    if (arguments.length !== 2) {
        throw new TypeError('인수는 2개여야 합니다');
    } else if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('인수는 모두 숫자 값이어야 합니다.');
    }
    return x + y;
}

// console.log(add3(2));
// console.log(add3('a', 'b'));

// 기본값 할당
function add(a = 0, b = 0, c = 0) {
    return a + b + c;
}

console.log(add(1, 2, 3));
console.log(add(1, 2));
console.log(add(1));
console.log(add());
