/* break */
// if (true){
//     break;
// }

foo: console.log('foo');

foo: {
    console.log(1);
    break foo;
    console.log(2);
}

console.log('Done!');

outer: for(var i=0; i<3; i++){
    for(var j=0; j<3; j++){
        if(i+j===3) break outer;
        console.log(`inner [${i}, ${j}]`);
    }
}

console.log('Done!');

// 특정 문자 인덱스 찾기
var string = 'Hello World.';
var search='l';
var index;

for(var i=0; i<string.length; i++){
    if(string[i]===search){
        index= i;
        break;
    }
}
console.log(index);
// indexOf 사용
console.log(string.indexOf(search));