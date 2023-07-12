const obj = { a: 1, b: 2 };

// 일반 객체는 Symbol.iterator 메서드를 상속받지 않음
console.log(Symbol.iterator in obj);

// for (const item of obj) {
//   console.log(item);
// }

// 배열 디스트럭처링 할당 불가능
// const [a, b] = obj;

// 스프레드 프로퍼티 : 객체 리터럴 내부에서 스프레드 문법 사용
console.log({ ...obj });
