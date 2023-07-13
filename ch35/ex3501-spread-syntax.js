console.log(...[1, 2, 3]);
console.log(..."hello");
console.log(
  ...new Map([
    ["a", "1"],
    ["b", "2"],
  ])
);
console.log(...new Set([1, 2, 3, 2, 3, 3, 4]));

// console.log(...{ a: 1, b: 2 });

// 값 아님
// const list = ...[1,2,3];
