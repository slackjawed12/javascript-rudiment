// class field definition : node 12 이상
class Person {
  name = "lee";

  // javascript에서는 클래스 필드 참조 시 this가 반드시 필요
  // constructor() {
  //   console.log(name); // referenceError
  // }
  constructor(name) {
    // 클래스 필드 초기화
    this.name = name;
  }

  // 함수 객체를 클래스 필드로 사용해서, 메서드를 정의한다.
  // 프로토타입 메서드가 되지 않으므로 비권장
  getName = function () {
    return this.name;
  };
}

// 클래스 필드로 초기화해도 생성자 인수로 덮어씀
const me = new Person("kim");
console.log(me);
console.log(me.getName());
