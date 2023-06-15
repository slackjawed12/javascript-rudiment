var x = 1;
if(true){
    var x = 10;
}

console.log(x); // 10 : var는 함수 레벨 스코프

var i = 10;

for(var i =0; i<5; i++){
    console.log(i);
}

console.log(i); // 5
