console.log("Im Working. Im JS. Im Beautiful. Im worth it");
let a = 221;
let b = a - 5;
a = 4;
console.log(b, a);
/*
//String
const what = "momo";

console.log(what);

//Boolean binary true1 false0
const wat = true;

//Number
const wat2 = 666;

//float
const wat3 = 55.5;
*/

const something = "something";
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", something];
console.log(daysOfWeek);
// console.log(monday, tue, wed, thu, fri);

const momoInfo = ["momo", "27", true, "Seoul"];

console.log(momoInfo);

const momoInfo2 = {
  name: "momo",
  age: "27",
  male: true,
  city: "Seoul",
  favMovies: ["Along the gods", "LOTR", "Oldboy"],
  favFood: [
    { name: "Kimch", fatty: false },
    { name: "Cheese burger", fatty: true }
  ]
};
console.log(momoInfo2.city);
momoInfo2.city = "Busan";

console.log(momoInfo2.city);
console.log(momoInfo2.favFood[0].fatty);

console.log("greetings momo");
console.log("Hello suna");
console.log("Hello pabro");
console.log("Hello aero");

function sayHello(potato, age) {
  console.log("Hello!", potato, " you have ", age, "years of age.");
}
sayHello("momo!", 27);

console.log("Hi!");

function sayHello2(name, age) {
  console.log(`Hello ${name} you are ${age} years old`);
}

sayHello2("momo!", 27);

function sayHello3(name, age) {
  return `Hello ${name} you are ${age} years old`;
}
// greetMomo is return values
const greetMomo = sayHello3("momo!", 27);

console.log(greetMomo);

const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  divide: function(a, b) {
    return a / b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  squareroot: function(a, b) {
    return a ** b;
  }
};
const plus = calculator.plus(5, 5);
console.log(plus);
const minus = calculator.minus(5, 5);
console.log(minus);
const divide = calculator.divide(20, 4);
const multiply = calculator.multiply(4, 5);
const squareroot = calculator.squareroot(2, 5);
// lazy developer..

console.log(calculator.squareroot(2, 4));
console.log(calculator.divide(12, 3));

console.log(
  `plus:${plus}\nminus:${minus}\ndivide:${divide}\nmultiply:${multiply}\nsquareroot:${squareroot}`
);
