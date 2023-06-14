var person = {
    firstName: 'gildong',
    'last-name': 'Hong'
};

console.log(person);

// 문자열로 평가할 수 있는 표현식을 써서 프로퍼티 키 동적 생성
var obj = {};
var key = 'hello';

obj[key]= 'world';

console.log(obj);

// 빈 문자열
var foo = {
    '':''
};

console.log(foo);

// 숫자 리터럴 : 내부적으로 문자열로 변환됨
var foo = {
    0: 1,
    1: 2,
    2: 3
};

console.log(foo);

// 예약어도 가능 : 권장 X
var foo={
    var: '',
    function: ''
};

console.log(foo);

// 중복 가능 : 나중 선언 프로퍼티가 덮어씀
var foo = {
    name: 'Lee',
    name:'Kim'
};

console.log(foo);

// 프로퍼티 접근
var person = {
    name: 'lee'
};
// 마침표
console.log(person.name);
// 대괄호
console.log(person['name']);
// 대괄호 없으면 에러
// console.log(person[name]);
// 존재하지 않는 프로퍼티 : undefined
console.log(person.age);

// 네이밍 규칙 지키지 않으면 대괄호만 가능
var person = {
    'last-name': 'hong',
    1: 10
};

// person.'last-name'; 에러
// person.last-name; // 브라우저에선 NaN, Node.js에서는 ReferenceError
// person[last-name]
console.log(person['last-name']);

// person.1;
// person.'1';
person[1];
person['1'];

// 프로퍼티 갱신
var person = {
    name: 'hong'
}

person.name = 'Kim';
console.log(person);

// 프로퍼티 동적 생성
var person={}
person['name']='lee'
person.age = 20;
console.log(person);

// 프로퍼티 삭제
var person = {
    name: 'hong'
}
person.age = 20;
delete person.age;
delete person.address;
console.log(person);