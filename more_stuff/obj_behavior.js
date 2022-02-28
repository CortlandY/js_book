let obj = { a: 1 };
obj = { b: 2 }; // this changes the data stored in the memory location that obj refers to

obj.c = 3;  // this line mutates the ccurrently referenced obj


console.log(obj);