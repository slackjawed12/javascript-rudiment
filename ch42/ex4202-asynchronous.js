function foo() {
  console.log("foo");
}

function bar() {
  for (let index = 0; index < 1000000000; index++) {}
  console.log("bar");
}

setTimeout(foo, 3);
bar();
