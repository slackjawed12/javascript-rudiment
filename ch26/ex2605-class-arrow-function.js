class Person {
  name = "lee";
  // 클래스필드에 화살표함수 할당
  // this가 가리키는 것 : 클래스가 생성할 인스턴스
  // 인스턴스 메서드가 된다.
  sayHi = () => console.log(`Hi ${this.name}`);

  // 위 표현은 아래와 같다.
  // constructor(){
  //   this.name='lee';
  //   this.sayHi=()=>console.log(`Hi ${this.name}`);
  // }
}

const person = new Person();
person.sayHi();

class PersonV2 {
  name = "kim";
  sayHi() {
    console.log(`hi, ${this.name}`);
  }
}
const personV2 = new PersonV2();
personV2.sayHi();
