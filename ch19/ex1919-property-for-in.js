// for in은 상속 객체의 프로퍼티 중 [[Enumerable]]이 true인 프로퍼티까지 열거한다.
const person = {
    name: 'Lee',
    address: 'Seoul',
    __proto__: { age: 20 }
};

// for(const key in person){
//     console.log(key + ': '+person[key]);
// }

// 심벌은 열거하지 않는다
const sym = Symbol();
const obj = {
    a: 1,
    [sym]: 10
};

for (const key in obj) {
    console.log(key + ': ' + obj[key]);
}

// 객체 자신의 프로퍼티만 확인하고 싶을 때
for (const key in person) {
    if (!person.hasOwnProperty(key)) continue;
    console.log(key + ': ' + person[key]);
}

// 순서 보장 안하는 것이 디폴트
const objTwo = {
    2: 2,
    3: 3,
    1: 1,
    b: 'b',
    a: 'a'
};

for (const key in objTwo) {
    if (!objTwo.hasOwnProperty(key)) continue;
    console.log(key + ': ' + objTwo[key]);
}

// 배열을 for ... in으로 열거하기 : 권장하지 않음
const arr = [1, 2, 3];
arr.x = 10;

// 1,2,3,10
for (const i in arr) {
    console.log(arr[i]);
}

// 1,2,3
for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

// 1,2,3
arr.forEach(v => console.log(v));

// 1,2,3
for(const value of arr){
    console.log(value);
}


