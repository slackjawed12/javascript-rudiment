// 객체 확장 금지 : 프로퍼티 추가 금지. 삭제는 가능
const person = { name:'Lee'};
console.log(Object.isExtensible(person));

Object.preventExtensions(person);

console.log(Object.isExtensible(person)); // false
console.log(Object.isSealed(person)); // false

// 무시. strict mode에서는 에러
person.age=20;
console.log(person);

delete person.name;
console.log(person);

// defineProperty에 의한 추가도 금지
// Object.defineProperty(person, 'age', '{value: 20}'); TypeError

// 객체 밀봉 : 추가, 삭제, 재정의 금지 - 읽기 쓰기만 가능
const person2 = {name: 'lee'};

console.log(Object.isSealed(person2));
Object.seal(person2);
console.log(Object.isSealed(person2));

// configurable false
console.log(Object.getOwnPropertyDescriptors(person2));

person.age =20;
console.log(person2);

delete person2.name;
console.log(person2);

// Object.defineProperty(person, 'name', {configurable:true}); // TypeError

// 객체 동결 : 추가, 삭제, 재정의, 갱신 금지 - read only
const person3 = {name:'Lee'}

console.log(Object.isFrozen(person3))
Object.freeze(person3);
console.log(Object.isFrozen(person3));
// writable, configurable false
console.log(Object.getOwnPropertyDescriptors(person3));

person3.age =20;
console.log(person3);

delete person3.name;
console.log(person3);

person3.name = 'Kim';
console.log(person3);

// Object.defineProperty(person3, 'name', {configurable: true});

// 불변 객체 : freeze도 중첩 객체까지 동결하지는 못함
const person4 = {
    name: 'Lee',
    address: {
        city:'Seoul'
    }
};

Object.freeze(person4);

console.log(Object.isFrozen(person4));
console.log(Object.isFrozen(person4.address)); // false

person4.address.city = 'Busan';
console.log(person4);

// 중첩객체까지 동결하는 방법 : 재귀적으로 freeze 메서드 호출

function deepFreeze(target){
    if(target && typeof target === 'object' && !Object.isFrozen(target)){
        Object.freeze(target);

        Object.keys(target).forEach(key => deepFreeze(target[key]))
    }
    return target;
}

const person5 = {
    name: 'Lee',
    address: {
        city:'Seoul'
    }
};

deepFreeze(person5);

console.log(Object.isFrozen(person5));
console.log(Object.isFrozen(person5.address));

person5.address.city='Busan'
console.log(person5);
