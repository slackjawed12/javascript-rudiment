var person = {
    name: 'Hong',
    sayHello: function(){
        console.log(`Hello! My name is ${this.name}.`);
    }
};

console.log(typeof person);
console.log(person);

// 빈 객체 생성
var empty={}
console.log(empty);
