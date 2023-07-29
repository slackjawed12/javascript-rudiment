const obj = {
  name: "lee",
  age: 20,
  alive: true,
  hobby: ["traveling", "tennis"],
};

const json = JSON.stringify(obj);

// JSON to object : deserializing
const parsed = JSON.parse(json);
console.log(typeof parsed, parsed);

const todos = [
  { id: 1, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 3, content: "JavaScript", completed: false },
];

const arrayJson = JSON.stringify(todos);

const parsedArray = JSON.parse(arrayJson);
console.log(typeof parsedArray, parsedArray);
