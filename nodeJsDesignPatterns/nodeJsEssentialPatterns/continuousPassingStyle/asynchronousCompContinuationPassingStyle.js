function additionalAsyncComparison(a, b, callback) {
    console.log("In additionalAsyncComparison before setTimeout (before log transferred Control to me) ");
    setTimeout(() => {
        console.log("In setTimeout eventHandler prior to callback (addSync called me...calling callback)");
        callback(a + b);
        console.log("In setTimeout eventHandler after to callback<<>>NOTE this is run AFTER CONSOLE.LOG(RESULT...transfering to event loop)");
    }, 100);
    console.log("In additionalAsyncComparison rightAfter setTimeout (setTimeoutTransfers Control to me) ");
}
console.log('before comparison (Event loop calls me directly...I\'m transfering control to addAsync)');
additionalAsyncComparison(1, 2, result => console.log('In console.log(result) (Callback calls me) result: ' + result));
console.log('after comparison (additionalAsyncComparison transfers control to me)');
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



