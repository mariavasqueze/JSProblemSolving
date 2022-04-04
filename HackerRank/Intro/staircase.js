// This exercise is to print a staircase with # symbols, depending on the size of the paramater (n) -->   
/* Ex if n = 4, it prints: 
      #
     ##
    ###
   ####
*/
function staircase(n) {
    // Write your code here
   for(let i = 0; i < n; i++){
       let string = "";
       for(let s = 0; s < n-i-1; s++){
           string += " ";
       }
       for(let h = 0; h < i + 1; h++){
           string += "#";
       }
       console.log(string);
   }
    
}

// The logic behind the loops --> 
// n = 4
// sss# = i=0 s=3 #=1
// ss## = i=1 s=2 #=2
// s### = i=2 s=1 #=3
// #### = 1=3 s=0 #=4

// s = n - i - 1
// # = i + 1
