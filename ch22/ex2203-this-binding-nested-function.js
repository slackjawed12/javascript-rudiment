var value = 1;

const obj = {
  value: 100,
  foo() {
    console.log("foo's this: ", this);
    console.log("foo's this.value: ", this.value);

    // 메서드 내에서 정의한 중첩함수 : 일반함수로 호출
    function bar() {
      console.log("bar's this: ", this);
      console.log("bar's this.value: ", this.value); // undefined. 책에서는 1이라고 함.
    }

    bar();
  },
};

obj.foo();
