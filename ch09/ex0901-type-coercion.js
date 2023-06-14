var x = 10;

// 명시적 타입변환
var str = x.toString();
console.log(typeof str, str);

console.log(typeof x, x);

// 암묵적 타입변환
var y = 10;
var str = y +'';
console.log(typeof str, str);

console.log(typeof x, x);

// 문자열 타입 암묵적 변환
console.log(`1 + 1 = ${1+1}`);
console.log(-1+'');
console.log(Array+'');

// 숫자 타입으로 변환
console.log(1-'1'); // 0
console.log(1*'10');    // 10
console.log(1/'one');   // NaN

console.log('1'>0);

// boolean 타입으로 변환
console.log(!!false);
console.log(!!undefined);
console.log(!!null);
console.log(!!0);
console.log(!!NaN);
console.log(!!'');
console.log(!!true);
console.log(!!'0');
console.log(!!{});
console.log(!![]);
