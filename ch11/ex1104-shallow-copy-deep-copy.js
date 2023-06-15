const o = {x: {y:1}};

// shallow copy
const c1 = {...o};
console.log(c1===o);
console.log(c1.x===o.x);    // true. 얕은복사 결과

const _ = require('lodash');

// deep copy : 중첩된 객체까지 모두 복사
const c2 = _.cloneDeep(o);
console.log(c2===o);
console.log(c2.x===o.x);

// 다른 맥락
// 깊은 복사 : 원시값을 다른 변수에 할당할 때
const v = 1;
const c3 = v;
console.log(c3===v);

const o2 = {
    x:1
};

// 얕은 복사 : 객체 할당 변수를 다른 변수에 할당
const c4 = o2;
console.log(c4===o2);
