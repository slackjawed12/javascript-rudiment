// sparse 배열 : length가 배열요소 개수보다 크다.
const sparse = [, 2, , 4];

console.log(Object.getOwnPropertyDescriptors(sparse));
console.log(sparse);
console.log(sparse[0]); // undefined
sparse.push(5);
console.log(sparse);
console.log(Object.getOwnPropertyDescriptors(sparse));
