function isNotANumber(value) {
  return value !== value;
}

console.log(isNotANumber(56))
console.log(isNotANumber('hello'))
console.log(isNotANumber('56'))
console.log(isNotANumber(Nan))