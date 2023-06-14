var foo = null ?? 'default string';
console.log(foo);   // default string

// falsy 값인 0, ''을 기본값으로 유효한 것을 의도했다면 예상치 못한 동작이 된다.
var foo2 = '' || 'default string';
console.log(foo2);  // default string 

var foo3 = '' ?? 'default string';
console.log(foo3);
