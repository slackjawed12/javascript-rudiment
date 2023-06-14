// ES5 : 객체 리터럴 외부에서 대괄호 표기법 써서 프로퍼티 동적 생성
var prefix = 'prop';
var i =0;
var obj ={};

obj[prefix+'-'+ ++i] = i;
obj[prefix+'-'+ ++i] = i;
obj[prefix+'-'+ ++i] = i;

console.log(obj);

// ES6 : 객체 리터럴 내부에서 계산된 프로퍼티 이름으로 동적 생성 가능
const prefix2 = 'prop';
let j = 0;

const obj2 = {
    [`${prefix}-${++j}`]:j,
    [`${prefix}-${++j}`]:j,
    [`${prefix}-${++j}`]:j,
}

console.log(obj2);