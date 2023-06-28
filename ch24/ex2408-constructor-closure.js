const Counter = (function () {
  let num = 0;

  function Counter() {
    // this.num =0; 으로 해버리면 프로퍼티가 되고, public이므로 은닉이 안 됨
  }
  Counter.prototype.increase = function () {
    return ++num;
  };
  Counter.prototype.decrease = function () {
    return num > 0 ? --num : 0;
  };

  return Counter;
})();

const counter = new Counter();

console.log(counter.increase());
console.log(counter.increase());
console.log(counter.decrease());
console.log(counter.decrease());
