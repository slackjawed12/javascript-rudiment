import fetch from "node-fetch";
import co from "co";

// co library 이용해서 제너레이터 실행기 대체
co(function* fetchTodo() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const response = yield fetch(url);
  const todo = yield response.json();
  console.log(todo);
});
