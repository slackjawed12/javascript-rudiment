var x = 'global x';
var y = 'global y';

function outer(){
    var z = "outer's local z";

    console.log(x);
    console.log(y);
    console.log(z);

    function inner(){
        var x = "inner's local x";

        console.log(x); // 4 : inner 지역 스코프 검색 - x 존재 - 참조 후 검색 종료
        console.log(y); // 5 : inner 지역 스코프 검색 - y 없음 - outer 검색 - y 없음 ..
        console.log(z); // 6
    }

    inner();
}

outer();

console.log(x);
// console.log(z);  error