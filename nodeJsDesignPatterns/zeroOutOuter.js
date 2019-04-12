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
let x = 0, y = 0;
var stillMore = true;
for(let holder = 0; holder < length && stillMore; holder++) {
    for(let incrementer = 0; incrementer < bitmap.length; incrementer++) {
        if(holder === 0){
            x = incrementer;
            y = holder;
        } else if(holder === 1) {
            x = holder - 1;
            y = incrementer;
        } else if(holder === 2) {
            x = incrementer;
            y = length - 1;
        } else if (holder === 3) {
            x = length - 1;
            y = incrementer;
            stillMore = false;
        }
        bitmap[x][y] = 0;
    }
}

console.table(bitmap);
