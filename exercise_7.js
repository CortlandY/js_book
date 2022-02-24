let rlSync = require('readline-sync');
let prompt = rlSync.question('Enter a prompt: ');
function capString(prompt) {
  if (prompt.length > 10) {
  prompt = prompt.toUpperCase();
  console.log(prompt);
  }
  else {
  console.log(prompt);
  }
}
capString(prompt);