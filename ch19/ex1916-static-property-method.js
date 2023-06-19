// 자바스크립트에서 static 구현 : 생성자 함수 객체가 프로퍼티, 메서드를 소유하게 한다.
function Person(name){
    this.name=name;
}

Person.prototype.sayHello = function(){
    console.log(`Hi! my name is ${this.name}`);
};

// static property
Person.staticProp = 'static prop';

// static method
Person.staticMethod = function(){
    console.log('staticMethod');
};

const me = new Person('Lee');

Person.staticMethod();

// me.staticMethod();  // typeError

// 프로토타입 메서드와 정적 메서드의 차이 : 인스턴스의 필요여부
function Foo(){}

// 프로토타입 메서드 : this가 필요 없음 - 정적 메서드 변경 가능
Foo.prototype.x = function(){
    console.log('x');
};

const foo = new Foo();
foo.x();

// 정적 메서드
Foo.x = function(){
    console.log('static x');
};


Foo.x(); // 정적 메서드 호출
foo.x(); // 인스턴스 메서드 호출


