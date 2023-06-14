console.log(5 ==4);
console.log(5 ==5);
console.log(5 =='5');   // true
console.log(5 =='4');

// 동등 비교는 예측하기 어려움
console.log('0' =='');
console.log(0 =='');
console.log(0 =='0');
console.log(false =='false'); // false
console.log(false =='0');   // true
console.log(false ==null);  // false
console.log(false == undefined);    // false

// 일치 비교 연산자 권장
console.log(5 === 5);
console.log(5 === '5');

// 주의 : NaN - 자신과 일치하지 앟는 유일한 값
console.log(NaN===NaN); // false

// NaN인지 조사하는 법 : Number.isNaN 사용
Number.isNaN(NaN); // true
Number.isNaN(10); // false
Number.isNaN(1+undefined); // true

// +0과 -0의 비교 : true
console.log(0===-0); // true
console.log(0==-0); // true

// Object.is 메서드
console.log(Object.is(-0, +0));     // false
console.log(Object.is(NaN, NaN));   // true

// 부동등, 불일치
console.log("5 != '5' : " + (5 != '5')); // false
console.log("5 !== '5' : " + (5 !== '5')); // true

/* 대소 관계 비교 */
5 > 0;
5 > 5;
5 >= 5;
5 <= 5;
