/* 삼항연산자의 특징 정리 */
var x = 2;

var result = x % 2 ? '홀수' : '짝수';
console.log(result);

// if else
var y = 2, res;
if (x%2) res = '홀수';   // 2 % 2 = 0 == false로 타입변환
else res = '짝수';
console.log(res);

// if else와 삼항연산자 차이 : 삼항연산자는 값으로 평가 가능