let rlSync = require('readline-sync');
let number = rlSync.question('Enter a number: ');
function evenOrOdd(number){
  if (number%2 === 0)
  console.log(`${number} is an even number.`);
  else
  console.log(`${number} is odd.`);
}
evenOrOdd(number);