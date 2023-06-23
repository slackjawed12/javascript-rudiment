async function foo(n) {
  return n;
}
foo(1).then((v) => console.log(v));

const bar = async function (n) {
  return n;
};
bar(2).then((v) => console.log(v));

const baz = async (n) => n;
baz(3).then((v) => console.log(v));

const obj = {
  async foo(n) {
    return n;
  },
};
obj.foo(4).then((v) => console.log(v));

class MyClass {
  async bar(n) {
    return n;
  }
  // constructor 메서드는 async일 수 없다.
  // async constructor(){}
}

const myClass = new MyClass();
myClass.bar(5).then((v) => console.log(v));
