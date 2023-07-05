// flat : 인수로 전달한 깊이만큼 재귀적으로 배열 평탄화. 기본 깊이 1
console.log([1, [2, 3, 4, 5]].flat());

console.log([1, [2, [3, [4]]]].flat());
console.log([1, [2, [3, [4]]]].flat(1));
console.log([1, [2, [3, [4]]]].flat(2));
console.log([1, [2, [3, [4]]]].flat().flat());
// 중첩배열 모두 평탄화
console.log([1, [2, [3, [4]]]].flat(Infinity));
