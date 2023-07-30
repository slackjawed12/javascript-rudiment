/**
 * ES6, ES7, stage3, stage4 등에 있는 사양의 소스코드 작성
 */
export const pi = Math.PI;

// ES7 지수 연산자
export function power(x, y) {
  return x ** y;
}

// ES6 클래스
export class Foo {
  #private = 10;

  foo() {
    const { a, b, ...x } = { ...{ a: 1, b: 2 }, c: 3, d: 4 };
    return { a, b, x };
  }

  getPrivate() {
    return this.#private;
  }
}
