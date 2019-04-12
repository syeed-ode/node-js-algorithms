const bitmap = [
   [1, 2, 3, 4, 5, 6]
,  [7, 8, 9,10,11,12]
, [13,14,15,16,17,18]
, [19,20,21,22,23,24]
, [25,26,27,28,29,30]
, [31,32,33,34,35,36]
];

console.table(bitmap);
const length = bitmap.length;
let row = 0, column = 0;
var stillMore = true;
for(let holder = 0; holder < length && stillMore; holder++) {
    for(let incrementer = 0; incrementer < bitmap.length; incrementer++) {
        if(holder === 0){
            row = incrementer;
            column = holder;
        } else if(holder === 1) {
            row = holder - 1;
            column = incrementer;
        } else if(holder === 2) {
            row = incrementer;
            column = length - 1;
        } else if (holder === 3) {
            row = length - 1;
            column = incrementer;
            stillMore = false;
        }
        bitmap[row][column] = 0;
    }
}

console.table(bitmap);
