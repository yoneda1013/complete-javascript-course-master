'use strict';
//allow function not work with constructor because we need keyword and allow function doesn't have that.

//constructor like blueprint of house
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never to this. don't use method inside constructor because if we create thousand of instance, for each instance this function will work and that's terrible for performance.
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

//new operator
const jonas = new Person('Jonas', 1991);
console.log(jonas);

console.log(jonas instanceof Person);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

//Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
jonas.calcAge();
//Each object created by this construction will now get access to all the method of this prototype method.

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));

Person.prototype.species = 'Homo sapiens';
console.log(jonas.species);
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
//species is just be able to access from jonas. not property inside.

//Object.prototype (top of prototype of chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
//arr.__proto__ is object

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
