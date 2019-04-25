

function bubbleSort(array) {
    let unsortedUntilIndex = array.length - 1;
    let sorted = false;

    while(!sorted) {
        sorted = true;

        for(let i = 0; i < unsortedUntilIndex; i++) {
            if(array[i] > array[i+1]) {
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                sorted = false;
            }
        }
        unsortedUntilIndex--;
    }
}

const list = [65, 55, 45, 35, 25, 15 , 10];
bubbleSort(list);
console.log(list);