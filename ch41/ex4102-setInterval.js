let count = 0;
const timeoutId = setInterval(() => {
  console.log(count);
  if (++count === 5) clearInterval(timeoutId);
}, 1000);
