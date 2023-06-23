function divide(x, y) {
  return new Promise((resolve, reject) => {
    if (y === 0) reject(new Error("divided by zero"));
    else resolve(x / y);
  });
}

divide(8, 4)
  .then((result) => console.log("성공:", result))
  .catch((error) => console.log("실패:", error))
  .finally(() => console.log("나눗셈 완료"));
