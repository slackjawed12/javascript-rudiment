function Person(name){
    this.name=name;
}

Person.prototype.sayHello = function(){
    console.log(`Hi! My name is ${this.name}`);
}

const me = new Person('Lee');

// Person 생성자 함수로 생성된 me 객체가 Object.prototype의 메서드인 hasOwnProperty를 호출
// Object.prototype을 상속받았기 때문
console.log(me.hasOwnProperty('name')); // true

