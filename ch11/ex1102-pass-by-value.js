// 값에 의한 전달
var score = 80;
var copy = score;   // 다른 메모리공간에 저장된 별개의 80임
console.log(score);
console.log(copy);

score=100;
console.log(score);
console.log(copy);

var score2 = 80;
var copy = score2;
console.log(score2, copy);
console.log(score2===copy);
