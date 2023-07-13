// ES6 이전
const arr = [1, 2, 3];
const one = arr[0];
const two = arr[1];
const three = arr[2];
console.log(one, two, three);

// ES6
const [oneV2, twoV2, threeV2] = arr;
console.log(oneV2, twoV2, threeV2);
console.log(...arr);

// 배열 디스트럭처링 할당 : 변수는 배열 리터럴 형태로 선언
const [x, y] = [1, 2];
console.log("x,y:", x, y);
// 우변에 이터러블이 아니면 오류
// const [q,w];
// const [p, r] = {}; - {} is not iterable

// 변수 선언문과 할당을 분리
let p, q;
[p, q] = [1, 2];
console.log(p, q);

// 개수 상관없이 순서대로 할당
const [a, b] = [1, 2];
const [c, d] = [1];
const [e, f] = [1, 2, 3];

const [g, , h] = [1, 2, 3]; // 1, 3

console.log(a, b);
console.log(c, d);
console.log(e, f);
console.log(g, h);

// 변수 기본값 설정
const [i, j, k = 3] = [1, 2];
console.log(i, j, k);

// 기본값보다 할당값이 우선
const [l, m = 40, n = 50] = [10, 20, 30];
console.log(l, m, n);

// Rest 요소
const [r, ...s] = [1, 2, 3];
console.log("r:", r, "s:", s);
