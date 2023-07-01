class Person {}

const me = new Person();
// const you = Person(); TypeError
console.log(me);

// 표현식으로 정의된 클래스
const Car = class MyCar {};
// 기명 클래스 표현식인 경우 식별자를 사용해서 생성해야 함
const one = new Car();
// 기명 클래스 표현식의 클래스 이름을 쓰면 에러 발생
// console.log(MyCar);

// const two = new MyCar();
