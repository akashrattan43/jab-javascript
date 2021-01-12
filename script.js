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

// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = new Date(dob);
//   this.calculateAge = function () {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   };
// }

//calculate age
// Person.prototype.calculateAge = function () {
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// };

// //get full name

// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// gets married
// Person.prototype.getsMarried = function(newLastName){
//   this.lastName = newLastName
// }

// const john = new Person("john", "doe", "8-12-90");
// const mary = new Person("mary", "jane", "9-8-2000");

// console.log(mary.calculateAge());
// console.log(mary.getFullName());

// mary.getsMarried('smith')
// console.log(mary.getFullName());

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// //GREETING
// Person.prototype.greeting = function () {
//   return `Hello There ${this.firstName} ${this.lastName}`;
// };

// const person1 = new Person("John", "Doe");

// // console.log(person1.greeting())

// //customer

// function Customer(firstName, lastName, phone, membership) {
//   Person.call(this, firstName, lastName);

//   this.phone = phone;
//   this.membership = membership;
// }

// //inherit the person prototype method
// Customer.prototype = Object.create(Person.prototype);

// //make customer.prototype return customer
// Customer.prototype.constructor = Customer;

// //create a customer
// const customer1 = new Customer("Tom", "Smith", "555-555-5555", "Gold");

// console.log(customer1);

// //customer greeting
// Customer.prototype.greeting = function () {
//   return `Hello There ${this.firstName} ${this.lastName} welcome to our company`;
// };

// console.log(customer1.greeting());

// const personPrototype = {
//   greeting: function () {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   },
//   getsMarried: function (newLastName) {
//     this.lastName = newLastName;
//   },
// };

// const mary = Object.create(personPrototype);
// mary.firstName = "Mary";
// mary.lastName = "Williams";
// mary.age = 30;

// mary.getsMarried("Thompson");

// console.log(mary.greeting());

// const brad = Object.create(personPrototype, {

//     firstName: { value: "Brad" },
//     lastName: { value: "Traversery" },
//     age: { value: "30" },
// });

// console.log(brad)

// console.log(brad.greeting())

// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob)
//   }

//   greeting() {
//     return `Hello there ${this.firstName} ${this.lastName}`
//   }

//   calculateAge() {
//     const diff = Date.now() - this.birthday.getTime()
//     const ageData = new Date(diff)
//     return Math.abs(ageData.getUTCFullYear() - 1970)
//   }

//   getsMarried(newLastName) {
//     this.lastName = newLastName
//   }

//   static addNumbers(x, y) {
//     return x + y
//   }
// }

// const mary = new Person("Mary", "Joe", '12-12-1980');

// mary.getsMarried('hola')
// console.log(mary);

// console.log(Person.addNumbers(1, 2))

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMemberShipCost() {
    return 500;
  }
}

const john = new Customer("john", "smith", "555-555-5555", "gold");

console.log(john.greeting());
console.log(Customer.getMemberShipCost())
