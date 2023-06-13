// 심벌 값 생성
var key = Symbol('key');
console.log(typeof key);    // 심벌

var obj = {};

obj[key] = 'value';
console.log(obj[key]);