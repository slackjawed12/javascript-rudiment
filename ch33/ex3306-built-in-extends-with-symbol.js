Array.prototype.sum = function () {
  return this.reduce((acc, cur) => acc + cur, 0);
};
console.log([1, 2].sum());
// 비권장 : 미래에 표준사양으로 sum이 추가되면 메서드 이름이 중복됨

// 표준 빌트인 객체를 사용자가 확장하는 방법 : 심벌값으로 프로퍼티 키를 생성
Array.prototype[Symbol.for("sum")] = function () {
  return this.reduce((acc, cur) => acc + cur, 0);
};

console.log([1, 2][Symbol.for("sum")]());
