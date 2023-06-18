console.log((function(){}).hasOwnProperty('prototype')); // true

// 일반 객체
console.log(({a:'1'}).hasOwnProperty('prototype')); // false