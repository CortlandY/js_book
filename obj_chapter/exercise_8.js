let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(sourceObject, keys) {
  let newObject = {}; //declare new object

  // if key array argument is passed, then assign desired keys to new object
  if (keys) {
    keys.forEach(function(key) {
      newObject[key] = sourceObject[key];
    });

    return newObject;
  } 
  
  // if no key argument, simply create new object with source as prototype
  else {
    return Object.assign(newObject, sourceObject);
  }
}

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }