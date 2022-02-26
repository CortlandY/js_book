let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(strings) {
  return strings.reduce((filteredArray, letters) => {
    let length = letters.length;  // check length of each element
    if (letters.length % 2 !== 0) {
      filteredArray.push(length)  // if element length is odd, push to new array
    }
    return filteredArray; // return new array
  }, []);
}

console.log(oddLengths(arr)); // => [1, 5, 3]