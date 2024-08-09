//Problem 1
// Write a JavaScript program that checks if a number is even or odd.

// let num = 4;
// if (num % 2 == 0) {
//   console.log("It's an even Number");
// } else {
//   console.log("Not an even Number");
// }

//Problem 2
//Write a JavaScript program that checks if a person is eligible to vote (age >= 18).

// let age = 18;

// if (age >= 18) {
//   console.log("Eligible to vote");
// } else {
//   console.log("Not Eligible");
// }

//Problem 3
//  Write a JavaScript program that prints the grade based on a score

// let grades = 99;

// if (grades > 90) {
//   console.log("A+ grade");
// } else if (grades >= 85) {
//   console.log("A grade");
// } else if (grades >= 80) {
//   console.log("B+ grade");
// } else if (grades >= 75) {
//   console.log("B+ grade");
// } else if (grades >= 70) {
//   console.log("B grade");
// } else if (grades >= 65) {
//   console.log("C+ grade");
// } else if (grades >= 60) {
//   console.log("C grade");
// } else if (grades >= 55) {
//   console.log("D+ grade");
// } else if (grades >= 50) {
//   console.log("D grade");
// } else if (grades < 50) {
//   console.log("F grade");
// } else {
//   console.log("Invalid Input");
// }

//Write a program to calculate the prize of a movie in the theater based on days and age of that person.

// let ticket_Prize = 2;
// let weekend_ticket = 5;
// let age = 34;
// let days = 6;
// let weekend_days = days === 6 || days === 7 ? true : false;
// console.log(typeof weekend_days);
// if (age > 0) {
//   if (age >= 0 && age < 16) {
//     console.log(`The prize of the ticket is ${ticket_Prize}$.`);
//   } else if (age >= 16 && age <= 30 && weekend_days) {
//     console.log(
//       `The ticket prize for the age b/w 16 and 30 is ${(ticket_Prize +=
//         3 + weekend_ticket)}$ on weekend days.`
//     );
//   } else if (age >= 16 && age <= 30) {
//     console.log(
//       `The ticket prize for the age b/w 16 and 30 is ${(ticket_Prize += 5)}$.`
//     );
//   } else if (age > 30 && age <= 45 && weekend_days) {
//     console.log("hi");
//   } else if (age > 30 && age <= 45) {
//     console.log(
//       `The ticket prize for the age b/w 31 and 45 is ${ticket_prize}`
//     );
//   } else if (age > 45 && age <= 60 && weekend_days) {
//     console.log(
//       `The ticket prize for the age b/w 31 and 45 is ${(ticket_prize +=
//         7 + weekend_ticket)}`
//     );
//   } else if (age > 45 && age <= 60) {
//     console.log(
//       `The ticket prize for the age b/w 31 and 45 is ${(ticket_prize += 7)}`
//     );
//   } else {
//     console.log(`people above 60 can't watch movie in this theater`);
//   }
// } else {
//   console.log(`Age invalid`);
// }

//Create an object representing a book with properties like title, author, and year. Add a method to return a formatted string with the book’s details

// let Book = {
//   title: "Think and Grow Rich",
//   author: "Nepolean Hill",
//   year: 1960,
//   BookFn: function () {
//     return `The book title is ${this.title}, the autor's name is ${this.author} and the book was published in early ${this.year}.`;
//   },
// };

// console.log(Book.BookFn());

// Write a function that calculates the area of a rectangle given its width and height. Use default parameters if no arguments are provided

// let calcRectange_Fn = function (height = 5, width = 8) {
//   return height * width;
// };

// console.log(calcRectange_Fn(10, 7));

// Question 1:
// Write a function createCounter that returns an object with increment, decrement, reset, and getCount methods, each maintaining an independent state using closures.

// let createCounter = function () {
//   let value = 10;
//   let ObjMethod = {
//     incrementMethod: function () {
//       console.log(`Incremental Method called : ${++value}`);
//     },
//     decrementMethod: function () {
//       console.log(`Decrement Method called : ${--value}`);
//     },
//     resetMethod: function () {
//       value = 0;
//       console.log(`Reset Method called : ${value}`);
//     },
//     getCount: function () {
//       console.log(`The final value after all manipulations is ${value}.`);
//     },
//   };
//   console.log(`The default value is ${value}.`);
//   ObjMethod.incrementMethod(value);
//   ObjMethod.decrementMethod(value);
//   ObjMethod.resetMethod(value);
//   ObjMethod.getCount(value);
// };

// let CounterMethod = createCounter;
// CounterMethod();
// console.log(`---------------------------------------------`);
// CounterMethod();
// console.log(CounterMethod());

// Question 2:
// Create a Person constructor function that defines a greet method inside the constructor and changeName and birthday methods on the prototype. Modify the greet method on the prototype and observe its effect on instances.

// const Person = function (firstName = "Name", birthday = 0) {
//   this.firstName = firstName;
//   this.birthday = birthday;
// };

// Person.prototype.greet = function () {
//   console.log(`Greetings Mr, ${this.firstName}`);
//   console.log(`Your DOB is : ${this.birthday}`);
// };

// Person.prototype.changeName = function (changedName) {
//   console.log(`------------------------------------------`);

//   console.log(
//     `User Name changed successfully to : ${(this.firstName = changedName)}`
//   );
//   console.log(`------------------------------------------`);
// };

// Person.prototype.birthdayFn = function (birthdayCh) {
//   console.log(
//     `Birthday changed successfully : ${(this.birthday = birthdayCh)}`
//   );
//   console.log(`------------------------------------------`);

//   this.greet();
// };

// let person1 = new Person("Usman", "22");

// person1.greet();
// person1.changeName("Ali");
// person1.birthdayFn("12");

////////////////////////////////////////////////////
///////////////////////////////////////////////
////////////////////////////////////////////////////////////
//////////////////////////////////////////////////
const numArray = [
  2, 15, 44, 21, -39, 55, 101, 110000, 23, 1, 29, 76, 90, 87, 68, 55,
];

// //map method
// console.log(numArray.map((arr) => arr * 2));

// // filter method
// const result = numArray.filter((arr) => arr < 100);
// console.log(result);

// //join
// console.log(numArray.join(", \n"));

// //sort
// console.log(numArray.sort());

// //push
// numArray.push(999);
// console.log(numArray);

// //splice
// console.log(numArray.splice(2, 4));

// //slice
// console.log(numArray.slice(2, 4));

// //split
// const str = "this is a js program";
// const arr1 = str.split("");
// console.log(arr1[10]);

// //fill
// console.log(numArray.fill(962, 2, 7));

// console.log(numArray);

// //shift
// console.log(numArray.shift());
// console.log(numArray);
// //unshift
// console.log(numArray.unshift());
// console.log(numArray);

// //pop
// console.log(numArray.pop());
// console.log(numArray);
// console.log(numArray.push(12));
// console.log(numArray);

// Q#1
// const students = [
//   { name: "Alice", scores: [90, 85, 92] },
//   { name: "Bob", scores: [75, 80, 85] },
//   { name: "Charlie", scores: [90, 95, 85] },
//   { name: "Jack", scores: [100, 100, 100] }
// ];
// Here is the array of students return an object of the student who have average of scores above 90.

// const students = [
//   { name: "Alice", scores: [90, 85, 92] },
//   { name: "Bob", scores: [75, 80, 85] },
//   { name: "Charlie", scores: [90, 95, 85] },
//   { name: "Jack", scores: [100, 100, 100] },
// ];
// const stdScore = students.filter(( students.name == students.name ) => {
//   return students;
// });
// console.log(stdScore);
// console.log(`---------------------------------`);
// const sum = stdScore.reduce((sum, stdScore) => {
//   return sum + stdScore;
// }, 0);
// console.log(sum);
// /////////////////////////////////
// ////////////////////////////////////////
// /////////////////////////////////////////
// ////////////////////////////////

// // Q#2
const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];
// Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

// const students = [
//   { name: "Alice", scores: [90, 85, 92] },
//   { name: "Bob", scores: [75, 80, 85] },
//   { name: "Charlie", scores: [90, 95, 85] },
//   { name: "Jack", scores: [100, 100, 100] },
// ];

// const stdScore = students
//   .map((student) => {
//     const value = student.scores.reduce((accumulator, currentvalue) => {
//       return accumulator + currentvalue;
//     }, 0);
//     const avg = value / student.scores.length;
//     return avg;
//   })
//   .filter((std) => std > 90);

// console.log(...stdScore);

// const students = [
//   { name: "Alice", scores: [90, 85, 92] },
//   { name: "Bob", scores: [75, 80, 85] },
//   { name: "Charlie", scores: [90, 95, 85] },
//   { name: "Jack", scores: [100, 100, 100] },
// ];
// const stdScore = students.map((stu) => {
//   const value = stu.scores.reduce((sum, stdScore) => {
//     return sum + stdScore;
//   }, 0);
//   return value;
//   console.log(value);
// });
// console.log(stdScore);
// console.log(`---------------------------------`);
// const sum = stdScore;
// console.log(sum);

// const input1 = [
//   {
//     name: "John",
//     age: 13,
//   },
//   {
//     name: "Mark",
//     age: 56,
//   },
//   {
//     name: "Rachel",
//     age: 45,
//   },
//   {
//     name: "Nate",
//     age: 67,
//   },
//   {
//     name: "Jennifer",
//     age: 65,
//   },
// ];

// const var1 = input1.map((input) => input.age);
// // .reduce((var1, input) => var1 + input);
// console.log(var1);
// console.log(
//   `Max value : ${Math.max(...var1)} \nMin value : ${Math.min(...var1)}
//   \nAge difference : ${Math.max(...var1) - Math.min(...var1)}`
// );

// const value = input1.map((i) => i.age);

// console.log(value);
// console.log(
//   "Max Age : ",
//   Math.max(...value),
//   "Diff Age : ",
//   Math.max(...value) - Math.min(...value)
// );

// const students = [
//   { name: "Alice", scores: [90, 85, 92] },
//   { name: "Bob", scores: [175, 80, 85] },
//   { name: "Charlie", scores: [90, 95, 85] },
//   { name: "Jack", scores: [100, 100, 100] },
// ];

// const std = students.map((student) => {
//   const sum = student.scores.reduce((sum1, std) => sum1 + std);
//   const stdAvg = sum / 3;
//   if (stdAvg > 80) {
//     return stdAvg;
//   }
// }, 0);
// console.log(std);
// console.log(std.reduce((sum, acc) => sum + acc));

// JavaScript Object Manipulation, JavaScript Destructuring, JavaScript: Dates and Time, JavaScript: Working with JSON

// const resturant = {
//   name1: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHourse: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // 24-Hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//     console.log(obj);
//   },
// };

// resturant.orderDelivery({
//   time: "22:30",
//   address: "via del sole,21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const { name1, openingHourse, categories } = resturant;

// console.log(name1, openingHourse, categories);

// const {
//   name1: resturantName,
//   openingHourse: hours,
//   categories: tags,
// } = resturant;

// console.log(resturantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = resturant;

// console.log(menu, starters);

// //mutating variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// const {
//   fri: { open: o, close: c },
// } = openingHourse;
// console.log(o, c);

// let user = new Object();
// let user = {};

// console.log(user);
// console.log(typeof user);

// function User(name, age, mobile) {
//   this.name = name;
//   this.age = age;
//   this.mobile = mobile;
// }

// // var user1 = new User();

// const user1 = {
//   birtYear: 1993,
//   name: "Talha",
// };
// const user1NewVal = {
//   age: 26,
// };

// // Object.freeze(user1);
// // user1.name = "abc";

// Object.seal(user1);
// user1.name = "asad";
// // console.log(user1.age);
// Object.isSealed(user1);
// Question 1: Complex Object Manipulation and Nested Destructuring
// Problem Statement:
// You are given a JSON object representing a collection of books in a library. Each book has a title, author, publication year, genres, and availability status. Some books also have an optional "reservedBy" field, which contains the name of the person who has reserved the book if it's reserved. Your task is to write a function that processes this JSON object to:

///////////////////////////////
//////////////////////////////////////
///////////////////////////////
////////////////////////////////////////////////////

// The JSON object has the following structure:

// const jsonObj = {
//   library: [
//     {
//       title: "The Great Gatsby",
//       author: "F. Scott Fitzgerald",
//       publicationYear: 1925,
//       genres: ["Fiction", "Classic"],
//       available: true,
//     },
//     {
//       title: "To Kill a Mockingbird",
//       author: "Harper Lee",
//       publicationYear: 1960,
//       genres: ["Fiction", "Drama"],
//       available: false,
//       reservedBy: "John Doe",
//     },
//     {
//       title: "The Road",
//       author: "Cormac McCarthy",
//       publicationYear: 2006,
//       genres: ["Fiction", "Dystopian"],
//       available: true,
//     },
//     {
//       title: "Educated",
//       author: "Tara Westover",
//       publicationYear: 2018,
//       genres: ["Non-fiction", "Memoir"],
//       available: true,
//     },
//   ],
// };

// // Extract all the genres of books available in the library.
// const { library } = jsonObj;
// const avail = [];
// const bookAvail = library.filter((book) => book.available === true);

// console.log(...bookAvail);

// // Identify all books published in the last 10 years and group them by their genres.
// const bookPublish = library.filter((book) => book.publicationYear > 2014);

// console.log(...bookPublish);

// // Return an object where keys are genres and values are arrays of book titles published in the last 10 years.

// const genres = library.filter((book) => book.genres > 2014);
// console.log(...genres);

///////////////////////////////////////////
////////////////////////////////
////////////////////////////////////////
//////////////////////////////////////////////////
////////////////////////////////////////
//////////////////////////

// Question 2: Date Manipulation, JSON Handling, and Nested Object Operations
// Problem Statement:

// You are given a JSON array of user activities on a website. Each activity includes a userId, activityType, and timestamp. You need to filter activities that occurred within the last month, group them by userId, and for each user, count the number of distinct activity types performed within this period.

// The JSON data looks like this:
// const users = [
//   {
//     userId: 1,
//     activityType: "login",
//     timestamp: "2023-06-15T12:34:56.789Z",
//   },
//   {
//     userId: 2,
//     activityType: "view",
//     timestamp: "2023-06-16T08:24:56.789Z",
//   },
//   {
//     userId: 1,
//     activityType: "purchase",
//     timestamp: "2023-07-01T09:14:56.789Z",
//   },
//   {
//     userId: 2,
//     activityType: "login",
//     timestamp: "2023-07-05T10:44:56.789Z",
//   },
// ];

// You need to filter activities that occurred within the last month, group them by userId, and for each user, count the number of distinct activity types performed within this period.

// const usersActivity = users.filter((user) => {
//   const userdate = new Date(user.timestamp);
//   const compDate = new Date("2023-07-01T09:14:56.789Z");
//   if (userdate >= compDate) {
//     console.log(`userId: ${user.userId}, ${userdate}`);
//   }
// });
// console.log(...usersActivity);

//JS Arrow functions, JS this keyword, JS classes, JS scope

///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////
////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//////////////////////////////////////////

//Porblem statement......
// You are developing a simple inventory management system using JavaScript ES6 classes. The system consists of two classes: Product and Inventory.

////////////////////////////////
////////////////////////////////////////

// The Product class should have the following properties:

// - name: The name of the product.
// - price: The price of the product.
// - quantity: The quantity of the product in stock.
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}
const product1 = new Product("laptop", 20500, 10);
const product2 = new Product("mbl", 100, 15);
// console.log(product1);
//////////////////////////////////////
////////////////////////////
////////////////////////////////

// The Inventory class should have the following:

// - A property products, which is an array to store multiple Product instances.
class Inventory {
  constructor() {
    this.productsList = [];
  }

  addProduct(product) {
    this.productsList.push(product);
    console.log(this.productsList);
  }

  // - A method calculateTotalValue that calculates the total value of the inventory by summing up the product of price and quantity for each Product.
  calculateTotalValue() {
    let sum = 0;
    this.productsList.map((pro) => {
      sum += pro.price * pro.quantity;
    });
    return sum;
  }
  // - A method logInventoryAfterDelay that logs the total value of the inventory after a 3-second delay using an arrow function to ensure proper context for this.
  logInventoryAfterDelay() {
    setTimeout(() => {
      console.log(`The Total : ${this.calculateTotalValue()}`);
    }, 300);
  }
}

const inventory1 = new Inventory();
inventory1.addProduct(product1);
inventory1.addProduct(product2);
console.log(inventory1.logInventoryAfterDelay());

console.log(`done`);
