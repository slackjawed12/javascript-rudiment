import { pi, power, Foo } from "./lib";

console.log(pi);
console.log(power(3, 8));

const f = new Foo();

console.log(f.foo());
console.log(f.getPrivate());

// polyfill 필요한 코드1
console.log(
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 100);
  })
);
// polyfill 필요한 코드2
console.log(Object.assign({}, { x: 1 }, { y: 2 }));

// polyfill 필요한 코드3
console.log(Array.from([1, 2, 3], (v) => v + v));
