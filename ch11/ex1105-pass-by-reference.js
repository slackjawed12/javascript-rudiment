var person={
    name:'Hong'
};

// 같은 참조값이 복사되어 전달된다 : 두 식별자가 하나의 객체를 공유하게 됨
var copy = person;
copy.age = 20;
person.address='서울'

console.log(person);
console.log(copy===person); // true. 참조값 비교
