// isFinite
console.log(Number.isFinite(0));
console.log(Number.isFinite(Number.MAX_VALUE));
console.log(Number.isFinite(Number.MIN_VALUE));
console.log(Number.isFinite(Number.POSITIVE_INFINITY)); // false
console.log(Number.isFinite(Number.NEGATIVE_INFINITY)); // false
console.log(Number.isFinite(NaN)); // false

// isInteger
console.log(Number.isInteger(0));
console.log(Number.isInteger(123));
console.log(Number.isInteger(-123));
console.log(Number.isInteger(0.5));
// 숫자, 문자열 타입변환 하지 않음
console.log(Number.isInteger("123"));
console.log(Number.isInteger(false));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(-Infinity));

// Number.isNaN : 타입변환 하지 않음
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(undefined));
// 전역함수의 isNaN은 전달받은 인수를 숫자로 타입변환
console.log(isNaN(undefined));

// isSafeInteger : -(2^53-1), 2^53-1사이 정수. 정수가 아니면 false. 타입변환 하지 않음
console.log(Number.isSafeInteger(0));
console.log(Number.isSafeInteger(-100000000000000000));
console.log(Number.isSafeInteger(100000000000000000));
console.log(Number.isSafeInteger(0.5));
console.log(Number.isSafeInteger("123"));
console.log(Number.isSafeInteger(false));
console.log(Number.isSafeInteger(Infinity));

// toExponential : 반환값 문자열
console.log((77.12345).toExponential());
// 반올림해서 나타냄
console.log((77.12345).toExponential(5));
console.log((77.12345).toExponential(2));
console.log((77).toExponential(2));

// 음수는 에러
// console.log((77.12345).toExponential(-1));
// console.log(77.toExponential(2));
// 공백 포함하면 프로퍼티 접근 연산자로 해석
// console.log(77 .toExponential(2));

// toFixed : 소수자리수 나타내고, 반올림한 결과 반환
console.log((12345.6789).toFixed());
console.log((12345.6789).toFixed(1));
console.log((12345.6789).toFixed(2));
console.log((12345.6789).toFixed(3));

// toPrecision : 유효숫자 인수로 받아서 결과 반환. 인수값 넘으면 지수 표기법 사용
console.log((12345.6789).toPrecision()); // 전체자리수 유효
console.log((12345.6789).toPrecision(1));
console.log((12345.6789).toPrecision(2));
console.log((12345.6789).toPrecision(6));

// toString() : 2, 8 , 16 : 진법.
console.log((10).toString());
console.log((16).toString(2));
console.log((16).toString(8));
console.log((16).toString(16));
