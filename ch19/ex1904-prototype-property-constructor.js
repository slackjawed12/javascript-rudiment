const Person = name => {
    this.name = name;
};

console.log(Person.hasOwnProperty('prototype'));

console.log(Person.prototype); // undefined

// 메서드 축약표현 정의한 메서드
const obj = {
    foo() {
        console.log("this is foo func");
    }
};

console.log(obj.foo.hasOwnProperty('prototype')); // false

console.log(obj.foo.prototype); // undefined

