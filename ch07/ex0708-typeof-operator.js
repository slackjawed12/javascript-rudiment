
console.log(typeof(''));
console.log(typeof(1));
console.log(typeof(NaN));
console.log(typeof(true));
console.log(typeof(undefined));
console.log(typeof(Symbol()));


console.log(typeof(null)); // object. null 비교 시 === 사용해야 함
var foo = null;
console.log(typeof foo === null); // false
console.log(foo === null); // true

console.log(typeof([]));
console.log(typeof({}));
console.log(typeof(new Date()));
console.log(typeof(/test/gi));
console.log(typeof(function(){}));  // function

// 선언하지 않은 식별자는 undefined
console.log(typeof undeclared);
