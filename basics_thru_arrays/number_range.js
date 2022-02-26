let rlSync = require('readline-sync');
let number = rlSync.question('Enter a number: ');
function numberRange(number) {
  if (number<0){
    console.log(`${number} is less than 0.\n`)
  }
  else if (number <= 50){
    console.log(`${number} is between 0 and 50.\n`)
  }
  else if (number <= 100) {
    console.log(`${number} is between 50 and 100.\n`)
  }
  else if (number > 100) {
    console.log(`${number} is greater than 100.\n`)
  }
}
numberRange(number);