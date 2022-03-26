// Givem an array of integeres, calculate the min and max possible sums of the values (by summing 4 of the values)

function miniMaxSum(arr) {
    
    let min = arr[0]; // min an max are set to be the first number in the array
    let max = arr[0];
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        if(min > arr[i]){
            min = arr[i]; //compare if the other values are less than the first element in the array
        }
        if(max < arr[i]){
            max = arr[i]; //same for max
        }
    }
    // To find min possible sum, substract the max value, the opposite for max possible sum.
    console.log(`${sum - max} ${sum - min}`);    
}
