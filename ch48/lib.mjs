export const pi = Math.PI;

export function square(x) {
  return x * x;
}

export class Person {
  constructor(name) {
    this.name = name;
  }
}

// 하나의 객체로 구성해서 공개
// export { pi, square, Person };
// consumer는 {}없이 임의의 이름으로 import할 수 있음
export default (x) => x * x;
