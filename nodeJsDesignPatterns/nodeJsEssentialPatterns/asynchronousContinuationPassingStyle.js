// Asynchronous continuation-passing style
function additionAsync(a, b, callback) {
    // setTimeout() triggers an asynchronous operation
    // it returns immediately, giving the control back to
    // additionAsync(), and then back to its caller.
    setTimeout(() => callback(a + b), 100);
    // This property in Node.js is crucial, as it gives
    // control back to the event loop as soon as an
    // asynchronous request is sent, thus allowing a
    // new event from the queue to be processed.
}

console.log('before');
additionAsync(1, 2, result => console.log('Result from additionAsync: ' + result));
console.log('after');
// ORDER OF OPERATIONS
// ----- Function invocation
// ===== Transfer of control

// EVENT LOOP  -----1-----> console.log('before');
// console.log('before') =====2=====> addAsync(...)
// addAsync(...) -----3-----> setTimeout(...)
// setTimeout(...) =====4=====> addAsync(...)
// addAsync(...) =====5=====> console.log('after')
// console.log('after') =====6=====> EVENT LOOP
// EVENT LOOP -----7(when the async op [setTimeout] completes)7----->  callback(a + b)
// callback(a + b) -----8-----> console.log('Result: ' + result)
// console.log('Result: ' + result) =====9=====> callback(a + b)
// callback(a + b) =====10=====> EVENT LOOP





//# FOR COMPARISON
console.log();
console.log();
console.log();
