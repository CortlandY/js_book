let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

/*let allMatches = (arr, match) => {
  let matches =[];
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index].match(match)){
      matches.push(arr[index]);
    }
  }
  return matches;
}*/ 

// this solution is not as concises as it could be. More concise code below:

function allMatches(arr,pattern) {
  return arr.filter((word) => pattern.test(word));
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
