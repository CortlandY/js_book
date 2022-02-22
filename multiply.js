function multiply(a,b) {
  return a*b;
}
function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}
let a = getNumber('Enter the first number: ');
let b = getNumber('Enter the second number: ');
console.log(`${a} * ${b} = ${multiply(a,b)}`);
