let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null);
// Object.prototype을 상속받지 못함.
// console.log(obj.toString());
// 프로토타입 체인의 종점에 위치하므로 Object 빌트인 메서드 사용 불가
// console.log(obj.hasOwnProperty('a'));

// obj -> Object.prototype -> null
// 파라미터의 프로토타입을 상속하는 객체 생성
obj = Object.create(Object.prototype); // obj = {}; 와 동일
console.log(Object.getPrototypeOf(obj) === Object.prototype);

// obj = {x:1};
obj = Object.create(Object.prototype, {
    x: { value: 1, writable: true, enumerable: true, configurable: true }
});

console.log(obj.x);
console.log(Object.getPrototypeOf(obj) === Object.prototype);

const myProto = { x: 10 };
// 임의의 객체 직접 상속
// obj -> myProto -> Object.prototype -> null
obj = Object.create(myProto);
console.log(obj.x);
console.log(Object.getPrototypeOf(obj) === myProto);

// 생성자 함수
function Person(name) {
    this.name = name;
}

// 생성자 함수 prototype 바인딩 된 객체를 파라미터로 전달
obj = Object.create(Person.prototype);
obj.name = 'Lee';
console.log(obj.name);
console.log(Object.getPrototypeOf(obj) === Person.prototype);

