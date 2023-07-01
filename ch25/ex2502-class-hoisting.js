// console.log(Person); - referenceError

class Person {}

console.log(typeof Person); // function

const Clazz = "";

{
  // 클래스가 호이스팅 되지 않으면 '' 출력. 그런데 referenceError 발생
  // class는 let, const처럼 TDZ가 있음
  console.log(Clazz);
  class Clazz {}
}
