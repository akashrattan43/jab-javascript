// let happy = true

// console.log(!happy)

// let a = 1
// let b = 2

// console.log(a == b)

// const ak = {
//     name: 'Ak',
//     age: 30
// }

// console.log(this.name)

//person constructor

// function Person(name, dob) {
//   this.name = name;
//   this.birthday = new Date(dob);
//   this.calculateAge = function () {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   };
// }

// //if trigger in global it will refer to global object

// // const brad = new Person('holla')
// // const hamy = new Person('hamy')

// // console.log(brad)

// const ak = new Person("Ak", "12-27-1996");

// console.log(ak.calculateAge());

// object prototype
//person.prototype

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  //   this.calculateAge = function () {
  //     const diff = Date.now() - this.birthday.getTime();
  //     const ageDate = new Date(diff);
  //     return Math.abs(ageDate.getUTCFullYear() - 1970);
  //   };
}

//calculate age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

//get full name

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// gets married 
Person.prototype.getsMarried = function(newLastName){
  this.lastName = newLastName
}

const john = new Person("john", "doe", "8-12-90");
const mary = new Person("mary", "jane", "9-8-2000");

console.log(mary.calculateAge());
console.log(mary.getFullName());

mary.getsMarried('smith')
console.log(mary.getFullName());