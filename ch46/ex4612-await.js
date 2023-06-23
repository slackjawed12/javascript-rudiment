import fetch from "node-fetch";

const todo = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const a = await res.json();
  console.log(a);
};

todo(1);
