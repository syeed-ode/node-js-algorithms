// synchronous CPS function
function add(a, b, callback) {
    //  it will return a value
    // only when the callback
    // completes its execution
    callback(a+b);
}

console.log('before');
add(1, 2, result => console.log('Result: ' + result));
console.log('after');
