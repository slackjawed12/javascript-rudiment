import fetch from "node-fetch";

const foo = async () => {
  try {
    const wrongUrl = "https://wrong.url";

    const response = await fetch(wrongUrl);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("error catch");
    console.error(err);
  }
};

foo();
