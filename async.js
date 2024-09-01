// Call back function

function greeting(name) {
    console.log('Hello ' + name);
}

function processUserInput(callback) {
    const name = prompt('Please enter your name.');
    callback(name);
}

processUserInput(greeting);

function sayHello() {
    console.log('Hello after 2 seconds');
}



// call back function with setTimeout

setTimeout(sayHello, 2000); // Executes after 2 seconds

function square(x) {
    console.log(`square of ${x}: ${x*x}`);
    
}

function higherOrderFunction(num,callback) {
    callback(num);

}

 higherOrderFunction(13,square);

