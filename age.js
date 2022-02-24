let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you?\n'));

console.log(`You are ${age} years old.\n`);

for (index = 1; index <= 4; index += 1){
  console.log(`in ${index*10} years, you will be ${age + (index*10)} years old.\n`)
}