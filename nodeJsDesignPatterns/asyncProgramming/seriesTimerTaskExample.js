var async = require("async");

async.series([function (callback) {
    setTimeout(function () {
        console.log("Task1");
        callback(null, 1);
    }, 300);
}, function (callback) {
    setTimeout(function(){
        console.log("Task2");
        callback(null, 2);
    }, 200);
}, function(callback){

}], function (error, results) {
    console.log(results);
});