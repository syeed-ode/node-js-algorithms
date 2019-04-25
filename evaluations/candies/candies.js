function tafees(input1, input2) {
    let candies = input1;
    let children = input2;
    const childrenList = [];
    let numberOfCandieAllotted = 1;
    for(let i = 1; (i < candies + 1) || (candies > 0); i++) {
        let base = (i - 1) * children;
        numberOfCandieAllotted = base + numberOfCandieAllotted;
        for(let child = 0; (child < children) && (candies > 0); child++) {
            if(childrenList[child] === undefined) {
                childrenList[child] = 0;
            }
            if(numberOfCandieAllotted > candies) {
                numberOfCandieAllotted = candies;
            }
            childrenList[child] = numberOfCandieAllotted + childrenList[child];
            candies = candies - numberOfCandieAllotted;
            if(numberOfCandieAllotted <= candies) {
                numberOfCandieAllotted = numberOfCandieAllotted + i;
            }
        }
        numberOfCandieAllotted = 1;
    }

    A = childrenList;
    return A;
}

console.log(tafees(16, 2));

console.log(tafees(5, 1));

console.log(tafees(10, 3));

console.log(tafees(7, 4));

//input1: 7
//input2: 4

//input1: 10
//input2: 3


