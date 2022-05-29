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
