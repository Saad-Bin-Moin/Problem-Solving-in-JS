function findMaxNumber(numbers) {
    return Math.max(...numbers); // Spread Operator ,  Math.max() Method
}

let numbers = [30,53,32,21,91,20];

//Function calling and Assigning to another Variable

let maxNum = findMaxNumber(numbers);
console.log(maxNum);
