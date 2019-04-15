// pg 50 [37]

const things = ['apples', 'baboons', 'cribs', 'dulcimers'];
// O(N)
for(let i = 0; i < things.length; i++) {
    console.log("Here's a thing; " + things[i]);
}
// O(N)
function isPrime(number) {
    if (number < 2) {
        number = 2;
    }
    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}
