// console.log('Hello World')

const car = null;
//
//symbol
const sym = Symbol();

//reference
// array
const hobbies = ["movies", "music"];
//object
const address = {
  city: "Boston",
  state: "MA",
};
let val;

val = Math.PI;
val = Math.E;
val = Math.round(2.5);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2, 33, 4, 1, 55, 6, 3);
val = Math.max(1, 2, 234, 345, 645);
val = Math.random();

val = Math.floor(Math.random() * 100 + 0);

//concat (it will give a space between first and last name)

//charAt
const firstName = "William";
const str = "Hello there my name is William";
// console.log(firstName.charAt(firstName.length -1))

//substring
val = firstName.substring(0, 4);
val = firstName.slice(-3);

//split
val = str.split(" ");

//replace
val = str.replace("William", "Jack");

//includes
val = str.includes("Hello");

//template literals
//array
const numbers = [43, 132, 34, 45, 45, 34];
const numbers2 = new Array(2, 32, 43, 54);
const fruit = ["Apple", "Banana", "Dates"];
const mixed = [22, "hello", true, undefined, { a: 1, b: 2 }, new Date()];

val = numbers.length;
val = Array.isArray(numbers);
// val = numbers[3];
val = numbers[0];

//insert into arrays
numbers[2] = 100
//find index of value
val = numbers.indexOf(132)
//mutating arrays
numbers.push(250)
//add to front
numbers.unshift(120)
//takeoff from the end
numbers.pop()
//takeoff from the front
numbers.shift()
//splice
numbers.splice(1, 2)
//reverse
numbers.reverse()

//concat array
val = numbers.concat(numbers2)

//sort
val = fruit.sort()
// console.log(numbers)
console.log(val);
