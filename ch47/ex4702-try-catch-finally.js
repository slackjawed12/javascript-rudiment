console.log("start");

try {
  foo();
} catch (err) {
  console.error(err);
} finally {
  console.log("finallj");
}

console.log("end");
