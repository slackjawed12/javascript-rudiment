const repeat = (n, f) => {
  if (typeof f !== "function") throw new TypeError("f must be a function");
  for (var i = 0; i < n; i++) {
    f(i);
  }
};

try {
  // throw new Error("my error");
  repeat(2, 1);
} catch (error) {
  console.log(error);
}
