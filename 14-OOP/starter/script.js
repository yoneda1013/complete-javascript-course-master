// 'use strict';
// //allow function not work with constructor because we need keyword and allow function doesn't have that.

// //constructor like blueprint of house
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //Never to this. don't use method inside constructor because if we create thousand of instance, for each instance this function will work and that's terrible for performance.
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// Person.hey = function () {
//   console.log('Hey There✋');
// };
// Person.hey();
// but we can't write jonas.hey(); Because hey is not prototype of jonas obj

// //new operator
// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// console.log(jonas instanceof Person);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// //Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// jonas.calcAge();
// //Each object created by this construction will now get access to all the method of this prototype method.

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));

// Person.prototype.species = 'Homo sapiens';
// console.log(jonas.species);
// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));
// //species is just be able to access from jonas. not property inside.

// //Object.prototype (top of prototype of chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);

// const arr = [3, 6, 4, 5, 6, 9, 3];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// //arr.__proto__ is object

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);
// console.log(bmw);

// Car.prototype.accelerate = function (speed) {
//   console.log((this.speed += 10));
// };

// Car.prototype.brake = function (speed) {
//   console.log((this.speed -= 5));
// };

// bmw.accelerate();
// bmw.brake();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h
GOOD LUCK 😀
*/
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate = function (speed) {
//     console.log((this.speed += 10));
//   };

//   brake = function (speed) {
//     console.log((this.speed -= 5));
//   };

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     return this.speed * 1.6;
//   }
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS);
//OOP Pack data and function in obj

///////////////////////////////////////
// class

// class expression
// const PersonCl = class{}

//class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   //Instance methods
//   //Method will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }
//   //Set a property that already exists
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     //if we write if (name.includes(' ')) this.fullName = name;
//     //then, it's same as this.fullName and that makes error.
//     // else alert(`${name} is not a full name`);
//   }
//   //All of these method that we write in the class, outside of the constructor, will be on the prototype of the obj not the obj themself.

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hey there✋');
//   }
// }
// PersonCl.hey();

// const jessica = new PersonCl('Jessica Davis', 1996);
// const manae = new PersonCl('Manae Yoneda', 1992);
// // When we use instance, constructor will be automatically called.
// console.log(jessica);
// jessica.calcAge();

// //getter
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };

// manae.greet();
// jessica.greet();

// IMPORTANT
// 1. Classes are not hoisted
// 2. We can pass them into function and also return them from function
// 3. Classes are executed in strict mode

///////////////////////////////////////
//Setters and Getters

// const walter = new PersonCl('Walter White', 1965);

// const account = {
//   owner: 'Jonas',
//   movements: [200, 530, 120, 300],
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   //setter needs parameter
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

//latest use simply as property
// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

///////////////////////////////////////
// Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);
// const sarah = Object.create(PersonProto);

// sarah.init('Sarah', 1979);
// sarah.calcAge();

///////////////////////////////////////
// Inheritance between "Classes": Constructor functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike instanceof Student);
console.log(mike instanceof Person);

console.log(mike.__proto__.__proto__);
