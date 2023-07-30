console.log("[start]");

try {
  foo();
} catch (error) {
  console.log("[error]", error);
}
// 강제종료 되지 않음
console.log("[end]");
