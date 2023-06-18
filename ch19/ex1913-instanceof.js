function Person(name){
    this.name =name;
}
const me = new Person('lee');

console.log(me instanceof Person);
console.log(me instanceof Object);

// 프로토타입 교체
function PersonV2(name){
    this.name =name;
}

const meV2 = new PersonV2('kim');
const parent = {};

PersonV2.prototype = parent;
Object.setPrototypeOf(meV2, parent);

console.log(PersonV2.prototype == parent);
console.log(parent.constructor !== PersonV2);
console.log(meV2 instanceof PersonV2); // prototype 바인딩 안하면 false!
console.log(meV2 instanceof Object); // true

// instanceof를 직접 함수로 표현하기
function isInstanceof(instance, constructor){
    const prototype = Object.getPrototypeOf(instance);
    // 재귀 기저조건
    if(prototype==null) {
        return false;
    }

    // 단락평가로 반환 : instanceof 연산자의 논리 구현
    return prototype === constructor.prototype || isInstanceof(prototype, constructor);
}

console.log(isInstanceof(me, Person));
console.log(isInstanceof(me, Object));
console.log(isInstanceof(me, Array));



