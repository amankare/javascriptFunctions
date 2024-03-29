'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
/*
 * Create the function factorial here
 */
function factorial(n) {
    var factorialResult = 1;
    if (n <= 10 && n >= 1) {
        while (n > 0) {
            factorialResult *= n;
            n--;            
        }
    }
    return factorialResult;
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}
