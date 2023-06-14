var string='Hello World.';
var search = 'l';
var count =0;

// continue를 쓰지 않으면 if문 내에 코드를 작성해야 함
for(var i=0; i<string.length; i++){
    if(string[i]===search){
        count++;
        // code
        // code
        // code
    }
}

for(var i=0; i<string.length; i++){
    if(string[i]!==search){
        continue;
    }
    count++;
    // code
    // code
    // code
}

console.log(count);

const regexp = new RegExp(search, 'g');
console.log(string.match(regexp).length); // 3