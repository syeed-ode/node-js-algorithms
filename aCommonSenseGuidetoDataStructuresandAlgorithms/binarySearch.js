const bitmap = [
    [1, 2, 3, 4, 5, 6]
    ,  [7, 8, 9,10,11,12]
    , [13,14,15,16,17,18]
    , [19,20,21,22,23,24]
    , [25,26,27,28,29,30]
    , [31,32,33,34,35,36]
];

console.table(bitmap);
console.log();
console.log();

function binarySearch(array, value) {
    let lowerBound = 0;
    let upperBound = array.length - 1;

    console.table(array);
    let text = `\n\nThis is lowerBound: ${lowerBound}, upperBound ${upperBound}`;
    console.log(text);
    while(lowerBound <= upperBound)  {
        let midPoint = Math.floor((upperBound + lowerBound) / 2 );
        let valueAtMidpoint = array[midPoint];

        if(value < valueAtMidpoint) {
            upperBound = midPoint - 1;
        } else if (value > valueAtMidpoint) {
            lowerBound = midPoint + 1;
        } else if (value === valueAtMidpoint) {
            return midPoint;
        }
    }
    return "Data no found";
}

console.log();
console.log();
console.log(binarySearch(bitmap[0], 19));