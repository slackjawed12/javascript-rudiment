console.log('Cat' || 'Dog');
console.log(false || 'Dog');
console.log('Cat' || false);
console.log('Cat' && 'Dog');
console.log(false && 'Dog');
console.log('Cat' && false);

// truthy 일 때 무언가를 해야 하는 경우
// && 연산자 표현식으로 if문 대체 가능
var done = true;
var message = '';

if (done) message='완료';

message= done && '완료';
console.log(message);

// Falsy 일 때 할당해야 하는 경우
// || 연산자 표현식으로 대체
var done = false;
var message = '';

if (!done) message='미완료';

message= done || '미완료';
console.log(message);

// 단축평가 패턴 1 : 객체를 가리키길 기대하는 변수가 null, undefined 아닌지 확인하고 프로퍼티 참조할 때
var elem = null;
var value = elem && elem.value;
console.log(value);

// 함수 매개변수에 기본값 설정
function getStringLength(str){
    str = str || '';    // OR 단축평가 이용 : undefined이면 빈문자열 할당
    return str.length;
}

console.log(getStringLength());  // 0
console.log(getStringLength('hi'));

// ES6
function getStringLength2(str = ''){
    return str.length
}

console.log(getStringLength2());
console.log(getStringLength2('Hi'));