// EPSILON : 1과 1보다 큰 숫자 중 가장 작은 수의 차이. 반올림에 많이 사용
console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2 - 0.3 < Number.EPSILON); // true

function isEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqual(0.1 + 0.2, 0.3));

// MAX_VALUE
console.log(Number.MAX_VALUE);
console.log(Infinity > Number.MAX_VALUE);

// MIN_VALUE : 가장 작은 양수값
console.log(Number.MIN_VALUE);
console.log(0 < Number.MAX_VALUE);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Infinity === Number.POSITIVE_INFINITY);
console.log(-Infinity === Number.NEGATIVE_INFINITY);
console.log(NaN === Number.NaN); // false
