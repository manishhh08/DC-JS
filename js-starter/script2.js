let meters = 100;

let kilometers = meters * 1000;

console.log(kilometers);

let meters1 = 101;
let kilometers1 = meters1 * 10000;

function meterToKiloMeter(meterUnit) {
  //console.log(meterUnit * 1000);

  return meterUnit * 1000;
}

let a = meterToKiloMeter(90);

//console.log("VALIE OF A: ", a);
meterToKiloMeter(200);
meterToKiloMeter(300);

function areaOfRectangle(length, breadth, width = 10) {
  //console.log(width);
  return length * breadth * width;
}

//console.log(areaOfRectangle(10, 20));

const areaOfCircle = function (radius) {
  return Math.PI * radius * radius;
};

//console.log(areaOfCircle(100));

const volumeOfPyramid = (length, height) => {
  return (1 / 3) * length * length * height;
};

//console.log(volumeOfPyramid(10, 100));

// temperature converter function
// convert celcius to fahrenheit

(function () {
  //console.log("IMMEDIAT FUNCTION");
})();

const vofpyramid = (length = 10, height = 10) => {
  return (1 / 3) * length * length * height;
};

//console.log(vofpyramid(1000));

const person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 45,
  gender: "Female",
  address: {
    streetNumbere: 10,
    suburb: "Townhall",
    state: "NSW",
    postcode: 2000,
  },
  email: "jan@gmail.com",
  isMarried: false,
  children: [
    {
      name: "Child1",
      age: 10,
    },
    {
      name: "Child2",
      age: 12,
    },
  ],

  greet: function () {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
  },

  showMetheChildren: function () {
    for (let child of this.children) {
      console.log(child.name, child.age);
    }
  },
};
console.log("OBJECT");

console.log(person.age);
console.log(person["isMarried"]);
console.log(person.greet());

console.log(person.children);

// for (let child of person.children) {
//   console.log(child.name, child.age);
// }

person.showMetheChildren();

console.log(person.address.postcode);

// object destructuring
const animal = {
  name: "tommy",
  breed: "dog",
  age: 100,
};

// let name = animal.name;
// let breed = animal.breed;
// let age = animail.age;

let { name, age, breed } = animal;

//console.log(name, breed, age);

// DATE OBJECT

// let currentDate = new Date();
// console.log(currentDate);

// console.log(currentDate.getFullYear());

// let newDate = new Date("2024-01-6");
// console.log(newDate);
// console.log(newDate.getMonth());

// let userInput = prompt("Please enter your name:");
// console.log("Hello, " + userInput);
