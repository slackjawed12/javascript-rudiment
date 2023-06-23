Promise.all([
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Error 1")), 3000)
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Error 2")), 2000)
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Error 3")), 1000)
  ),
])
  .then(console.log)
  .catch(console.log);
