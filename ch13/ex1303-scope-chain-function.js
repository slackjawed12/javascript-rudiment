function foo(){
    console.log('global foo');
}

function bar(){
    function foo(){
        console.log('local foo');
    }
    foo();
}

bar();