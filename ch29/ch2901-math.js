console.log(Math.PI);

console.log(Math.abs(""));
console.log(Math.abs([]));
console.log(Math.abs(null));

// Math.round : 소수점 반올림한 정수
console.log(Math.round(1.4));
console.log(Math.round(1.65));

// Math.ceil : 소수점 올림한 정수
console.log(Math.ceil(1.3));
console.log(Math.ceil(1.65));

// Math.floor : 소수점 버림한 정수. 많이쓰임.
console.log(Math.floor(1.9));
console.log(Math.floor(9.1));
console.log(Math.floor(-1.9));
console.log(Math.floor(-9.1));
console.log(Math.floor(1));
console.log(Math.floor());

// Math.sqrt
console.log("Math.sqrt");
console.log(Math.sqrt(9));
console.log(Math.sqrt(-9)); // NaN
console.log(Math.sqrt(2));
console.log(Math.sqrt(1));
console.log(Math.sqrt(0));
console.log(Math.sqrt());

// Math.random : 0포함 1미만 임의의 실수 반환
console.log("Math.random");
console.log(Math.random());
// 1부터 10까지 랜덤 정수
console.log(Math.floor(Math.random() * 10 + 1));

// Math.pow : 거듭제곱
console.log("Math.pow");
console.log(Math.pow(2, 8));
console.log(Math.pow(2, -1)); // 2^(-1) : 1/2
console.log(Math.pow(-2, -3));
console.log(Math.pow(2));

// ES7 : 지수 연산자 ** 사용가능, 밑으로 음수 불가능
console.log(2 ** (2 ** 2)); // 16
console.log(2 ** -2); // 0.25

// Math.max
console.log("Math.max");
console.log(Math.max(1));
console.log(Math.max(1, 2));
console.log(Math.max(1, 2, 3));
console.log(Math.max()); // -Infinity
// 배열 인수로 받아서 배열 요소의 최댓값 구하기 : apply 혹은 스프레드 문법 사용
console.log(Math.max.apply(null, [1, 2, 3]));
console.log(Math.max(...[1, 2, 3]));

// Math.min
console.log("Math.min");
console.log(Math.min(1));
console.log(Math.min(1, 2));
console.log(Math.min(1, 2, 3));
console.log(Math.min()); // Infinity
console.log(Math.min.apply(null, [1, 2, 3]));
console.log(Math.min(...[1, 2, 3]));
