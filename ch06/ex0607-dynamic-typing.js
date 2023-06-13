var foo;
console.log(typeof foo);

foo = 3;
console.log(typeof foo);

foo = 'Hello';
console.log(typeof foo);

foo = true;
console.log(typeof foo);

foo = null;
console.log(typeof foo);    // object

foo = Symbol();
console.log(typeof foo);

// 객체 타입
foo = {};   // 객체
console.log(typeof foo);

foo = []; // 배열
console.log(typeof foo);

foo = function(){};
console.log(typeof foo); // function
