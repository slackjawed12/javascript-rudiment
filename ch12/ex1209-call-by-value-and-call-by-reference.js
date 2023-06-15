function changeValue(primitive, obj){
    primitive += 100;   // 새 원시값에 100을 더하는 것
    obj.name = 'Kim';   // 참조값이 같으므로 원본을 변경한다 
}

var num = 100;
var person = {name:'Lee'};

console.log(num);
console.log(person);

changeValue(num, person);

console.log(num);
console.log(person);    // 객체는 원본이 훼손됨