var x;
x = 10;

x += 5;
console.log(x);
x -= 5;
console.log(x);
x *= 10;
console.log(x);
x /= 5;
console.log(x);
x %= 5;
console.log(x);

// 문자열 연결에도 할당 연산자 사용 가능
var str = 'My name is ';

str += 'Hong';
console.log(str);

// 할당문은 표현식이면서 statement임
var y;
console.log(y = 10); // 10

// 연쇄 할당
var a, b, c;
a = b = c = 0;
console.log(a, b, c);