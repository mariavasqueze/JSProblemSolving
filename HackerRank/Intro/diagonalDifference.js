// Compare the difference of the sum of the two diagonals (like an x) of a square matrix
function diagonalDifference(arr) { 
    let leftSum = 0;
    let rightSum = 0;
    
    for(let i = 0; i < arr.length; i ++){
        for(let j = 0; j < arr.length; j++){
            if(i === j){
                leftSum += arr[i][j];
            }
            if(i + j === arr.length -1)
            rightSum += arr[i][j]; //be careful here you have to call the [i] and [j], not just one!
        }
    }
    return Math.abs(rightSum - leftSum);
  }

  // I wrote it the first time with if, else if and that wasn't letting me run it! Careful with when to use else if!