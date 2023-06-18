// 생성자 함수
function Person(name) {
    this.name = name;
}

const me = new Person('Lee');
// me 객체에는 constructor 없지만 프로토타입에 있으므로 상속받아 사용 가능
console.log(me.constructor === Person);