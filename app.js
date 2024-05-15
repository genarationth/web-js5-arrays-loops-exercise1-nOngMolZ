// 1.1 let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

function myAlphabetLength() {
  console.log(myAlphabet.length);
}
myAlphabetLength();

//1.2 Declare and initialize an array called 'Planets' with 5 string values with names of planets.
const Planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];

for (let i = 0; i < Planets.length; i++) {
  console.log(`Index: ${i}, Planet: ${Planets[i]}`);
}

// 1.3 Console.log each item in this array: let myArr = [ 1, 2, 'One', true];
const myArr = [1, 2, 'One', true];

for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}