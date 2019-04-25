var results = [];

setTimeout(function(){
    console.log("Task1");
    results[0] = 1;
    setTimeout(function () {
        console.log("Task2");
        results[1] = 2;
        setTimeout(function () {
            console.log("Task3");
            results[2] = 3;
        }, 100);
    }, 20);
}, 300);