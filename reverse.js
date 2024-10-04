// split(separator) method to separate the string with separator =>  seperator can be ', ',",;,' 

// reverse() method - to reverse the string

// join() method - to join the separated string

// ternary operator

// Problem: Palingdrom checker
const data = "data";
const ans = data === data.split('').reverse().join('') ? true: false;
console.log(ans);

function palingdromChecker(data) {
    return data === data.split("").reverse().join("");
}

const ans2 = palingdromChecker("helleh");
console.log(ans2);
