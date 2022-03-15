// Summ all elements of the array:
// Can do it with for

function aVeryBigSum(ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}

// Note: could also do it with reduce() method or lodash library
/* Example: 
const arr = [1, 2, 3, 4];
const reducer = (accumulator, curr) => accumulator + curr;
console.log(arr.reduce(reducer));

var lodash = require('lodash');
var arr = [3, 6, 1, 5, 8];
var sum = lodash.sum(arr);
console.log(sum); 
*/