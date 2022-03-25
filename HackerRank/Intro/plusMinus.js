// Take an array of intigers and calculate the ratios of the elements that are positive, negative, and zero
// Each fraction printed in a new line with 6 decimal places

function plusMinus(arr) {
    // Write your code here
    let length = arr.length;
    let positiveValues = 0;
    let negativeValues = 0;
    let zeros = 0;
    
    arr.forEach(el => {
        if(el > 0)
           positiveValues++; 
        else if(el < 0)
            negativeValues++;
        else 
            zeros++;
        });
        
        console.log((positiveValues/length).toFixed(6));
        console.log((negativeValues/length).toFixed(6));
        console.log((zeros/length).toFixed(6));
}


/*
Ex input:
6
-4 3 -9 0 4 1

Output:
0.500000
0.333333
0.166667
*/