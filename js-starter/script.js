// // for loop
// console.log("FOR LOOP");
// for (let i = 1; i < 10; i = i + 2) {
//   console.log(i);
// }

// // While loop
// console.log("WHILE");
// let x = 10;
// while (x < 10) {
//   //  run this block
//   console.log(x);
//   x = x + 2;
// }

// // do while
// console.log("DO WHILE");
// let y = 10;
// do {
//   console.log(y);
//   y = y + 2;
// } while (y < 10);

// // for in
// let person = {
//   name: "Ram",
//   age: 30,
// };

// console.log("FOR IN");
// for (let key in person) {
//   console.log(key);
//   if (key == "name") {
//     console.log("NAME:", person[key]);
//   }
// }

// // for of
// console.log("FOR OF");
// let arrayList = [1, "APPLE", { name: "Test" }, 4, 5, [1, 2, 3, 4]];
// for (let item of arrayList) {
//   console.log(item);
// }

// console.log("NORMAL FOR");
// for (let i = 0; i < arrayList.length; i = i + 1) {
//   console.log(arrayList[i]);
// }

// let randomArray = [];
// for (x = 0; x < 100; x++) {
//   let randomNumber = Math.floor(Math.random() * 100) + 1;
//   while (randomArray.includes(randomNumber)) {
//     randomNumber = Math.floor(Math.random() * 100) + 1;
//   }
//   // console.log(randomNumber);
//   randomArray.push(randomNumber);
// }
// console.log(randomArray);

// function oddNumbe(item) {
//   return item % 2 != 0;
// }
// let oddNumbe = randomArray.filter(oddNumbe);
// console.log(oddNumbe);

// const tempConverter = (celcius) => {
//   return celcius * (9 / 5) + 32;
// };
// console.log(tempConverter(15));

const animal1 = {
  species: "lion",
  legs: 4,
  color: "Orange",
  greet: function () {
    return "This is lion";
  },
};

const animal2 = {
  color: "yellow",
  species: "monkey",
  leg: 2,
  greet: function () {
    return "this is monkey";
  },
};

const animalList = [animal1, animal2];

// console.log(animal2.greet());

for (let a of animalList) {
  a.species;
}
console.log(animalList.animal1);
