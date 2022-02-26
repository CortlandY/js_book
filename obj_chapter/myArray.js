let myArray = {
  0: 'Cortland',
  1: 435,
  2: 265,
  3: 365,
  length: 4
};

// for this object to mimmic an array, must use ordered integers for keys to represent the index locations
// also must add a lenght property for the conditional statement in for loop

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}