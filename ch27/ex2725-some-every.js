// some : 한 번이라도 참이면 true
console.log([5, 10, 15].some((item) => item > 10));
console.log([5, 10, 15].some((item) => item < 10));

console.log(["apple", "banana", "mango"].some((item) => item === "banana"));
console.log([].some((item) => true)); // false. 빈 배열이면 콜백에 관계없이 false

// every : 모든 것이 참이면 true
console.log([5, 10, 15].every((item) => item > 3));
console.log([5, 10, 15].every((item) => item < 10));
console.log([].every((item) => false)); // true.
