// 즉시 실행 함수
(function(){
    var a = 3;
    var b = 5;
    console.log(a*b);
    return a*b;
}());

(function foo(){
    var a =3;
    var b = 5;
    console.log(a+b);
    return a+b;
}());
// foo();

// 가능한 방법
(function(){

}());

(function(){

})();

!function(){

}();

+function(){

}();