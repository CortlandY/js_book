let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

arr = arr.map(function(value){
  return value.length;
})
function oddLengths(array){
  array = array.filter(num => num % 2 !== 0);
  return array;
};

console.log(oddLengths(arr));