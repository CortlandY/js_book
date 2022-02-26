let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function checkValue(arr) {
  return arr.includes(3);
}

console.log(checkValue(numbers1));
console.log(checkValue(numbers2));
console.log(checkValue(numbers3));