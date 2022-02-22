let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you?\n'));
console.log(`You are ${age} years old.\n`);
console.log(`In 10 years, you will be ${age+10} years old.\n`);
console.log(`In 20 years, you will be ${age+20} years old.\n`);
console.log(`In 30 years, you will be ${age+30} years old.\n`);
console.log(`In 40 years, you will be ${age+40} years old.\n`);