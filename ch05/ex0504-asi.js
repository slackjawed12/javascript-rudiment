// automatic semicolon insertion
function foo(){
    return 
    {}
    // asi 결과 : return; {};
    // 예측 : return {};
}


console.log(foo()); 
// 결과 : undefined
// 예측대로였다면 {} 나와야 함

var bar = function(){}
(function(){})();
// asi 결과 : var bar = function () {}(function() {})();
// 예측 : var bar = function () {}; (function() {})();
// TypeError : (intermediate value)(...) is not a function
