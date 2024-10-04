//Example of a recursive function

function factorial(n) {

    if(n === 1 || n === 0) // base case //always have a base case to stop recursive function
        {
            return 1;
        }
        
   return n*factorial(n-1);
}

factorial(5);