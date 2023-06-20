const uri = "http://www.example.com?name=홍길동&job=programmer&teacher";
const enc = encodeURI(uri);
console.log(enc);
const dec = decodeURI(enc);
console.log(dec);
console.log(decodeURI(uri)); // 결과 동일

// encodeURIComponent 함수 : 쿼리스트링의 일부로 간주해서, =, ?, &까지 인코딩함
const uriComp = "name=홍길동&job=programmer&teacher";
let encoded = encodeURIComponent(uriComp);
console.log(encoded);

let decoded = decodeURIComponent(encoded);
console.log(decoded);
