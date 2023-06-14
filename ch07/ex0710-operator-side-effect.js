/* 연산자의 부수효과 */
var x;

// 할당
x =1;
console.log(x);

// 증감
x++;
console.log(x);

// delete
var o = {a:1};
delete o.a;
console.log(o);
