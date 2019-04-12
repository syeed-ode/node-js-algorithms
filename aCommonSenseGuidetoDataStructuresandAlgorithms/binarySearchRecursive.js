const bitmap = [
    [1, 2, 3, 4, 5, 6]
    ,  [7, 8, 9,10,11,12]
    , [13,14,15,16,17,18]
    , [19,20,21,22,23,24]
    , [25,26,27,28,29,30]
    , [31,32,33,34,35,36]
];

console.table(bitmap);
var firstPass = true;
function binarySearchRecursive(array, value, lowerBound, upperBound) {
    if (array && {}.toString.call(array) === '[object Function]') {
      array = array();  // argument passed and not undefined
    }
    if(firstPass) {
        console.log(array);
        firstPass = false;
    }
    if(lowerBound > upperBound) {
        firstPass = true;
        return `${value} is not in the array ${array}`;
    }

    let midpoint = Math.floor((upperBound + lowerBound) / 2);
    let valueAtMidpoint = array[midpoint];

    if(value < valueAtMidpoint) {
        return binarySearchRecursive(array, value, lowerBound, upperBound - 1);
    } else if(value > valueAtMidpoint) {
        return binarySearchRecursive(array, value, midpoint + 1, upperBound);
    } else if(value === valueAtMidpoint) {
        firstPass = true;
        return `FOUND ONE!!!! >>> ${value} is in the array ${array}`;
    }
}

console.log();
console.log();
console.log("Ready to run binarySearchRecursive");
console.log(binarySearchRecursive(bitmap[0], 19, 0, bitmap[0].length -1));


console.log();
console.log();
console.log("Ready to run binarySearchRecursive");
console.log(binarySearchRecursive(function(){
        var arrayColumn = [];
        const columnConstant = 0;
        for(let row = 0; row < bitmap.length; row++) {
            arrayColumn.push(bitmap[row][columnConstant]);
        }
        return arrayColumn;
    }
    , 5
    , 0
    , bitmap[0].length -1
    )
);

console.log();
console.log();
console.log("Ready to run binarySearchRecursive");
console.log(binarySearchRecursive(function(){
        var arrayColumn = [];
        const columnConstant = 0;
        for(let row = 0; row < bitmap.length; row++) {
            arrayColumn.push(bitmap[row][columnConstant]);
        }
        return arrayColumn;
    }
    , 1
    , 0
    , bitmap[0].length -1
    )
);
