// 배열 디스트럭처링 할당 활용 : 필요 요소만 추출해서 변수에 할당하기
function parseURL(url = "") {
  const parsedURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
  console.log(parsedURL);

  if (!parsedURL) {
    return {};
  }

  const [, protocol, host, path] = parsedURL;
  return { protocol, host, path };
}

const target = "https://developer.mozilla.org/ko/docs/Web/JavaScript";
const parsedURL = parseURL(target);
console.log(parsedURL);
