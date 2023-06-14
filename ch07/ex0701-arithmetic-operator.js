5 + 2;
5 - 2;
5 * 2;
5 / 2;
5 % 2;

var x = 1;
x++;
console.log(x);
x--;
console.log(x);

var y = 5, result;
result = y++;
console.log(result, y);

result = ++y;
console.log(result, y);

result = y--;
console.log(result, y);

result = --y;
console.log(result, y);

+10;
+(-10);

var z = '1';
console.log(+z);    // 1
console.log (typeof(z));    // string. + 단일 연산자는 부수효과 없음

z= true;
console.log(+z);
console.log(typeof(z));

z=false;
console.log(+z);
console.log(typeof(z));

z='Hello';
console.log(+z);    // NaN
console.log(z);

-(-10);
-true;
-'Hello'; // NaN

// 문자열 연결 연산자, 타입 강제 변환
console.log(1+2);   // 3
console.log('1'+2); // 12
console.log(1+'2'); // 12

console.log(1+true);
console.log(1+false);
console.log(1+null);
+undefined;
1+undefined;
