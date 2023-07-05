const arr = [];

console.time("array performance test");

for (let i = 0; i < 100000000; i++) {
  arr[i] = i;
}

console.timeEnd("array performance test");
const obj = {};

console.time("Object performance test");

for (let i = 0; i < 100000000; i++) {
  obj[i] = i;
}

console.timeEnd("Object performance test");
