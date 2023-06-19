// in operator
const person = {
    name: 'Lee',
    address: 'Seoul'
};

console.log('name' in person);
console.log('address' in person);
console.log('age' in person);
console.log('toString' in person); // true. 프로토타입 체인 전체에 대해 판단

// Reflect.has
console.log(Reflect.has(person, 'name'));
console.log(Reflect.has(person, 'toString')); // true

// Object.prototype.hasOwnProperty : 객체 고유 프로퍼티일 때만 true
console.log(person.hasOwnProperty('name'));
console.log(person.hasOwnProperty('address'));  // true
console.log(person.hasOwnProperty('age'));
console.log(person.hasOwnProperty('toString')); // false
