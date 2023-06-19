(function () {
    'use strict';
    function foo() {
        console.log('foo');
        // strict mode 이전 : global
        // strict mode 이후 : undefined
        console.log(this);
    }
    foo();

    function Foo() {
        console.log(this);
    }
    // 변화없음.
    new Foo();
}());

(function (a) {
    'use strict';
    a = 2;
    // strict mode 이전 : '0': 2 - 인수 재할당하면 arguments 객체에 반영된다.
    // 이후 : '0': 1
    console.log(arguments);
}(1));