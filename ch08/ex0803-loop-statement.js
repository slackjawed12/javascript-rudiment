for(var i=0; i<2; i++){
    console.log(i);
}

for(var i=1; i>=0; i--){
    console.log(i);
}

// 무한루프
// for(;;){
    
// }

for (var i = 1; i <= 6; i++){
    for (var j = 1; j <= 6; j++) {
        if(i+j === 6) {
            console.log(`[${i}, ${j}]`);
        }
    }
}

// while
var count =0;

while(count<3){
    console.log(count);
    count++;
}


// while(true){

// }

var count = 0;

// 무한루프를 break로 탈출
while(true){
    console.log(count);
    count++;

    if(count===3){
        break;
    }
}

/* do while */
var count =0;
do {
    console.log(count);
    count++;
} while(count < 3);
