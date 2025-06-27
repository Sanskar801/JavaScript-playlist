// FUNCTIONS IN JAVASCRIPT

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(4, 5));

// let result = sum(4, 5);
// console.log(result);


// OBJECTS IN JAVASCRIPT

// const person = {
//     firstName: "Sanskar",
//     lastName: "J",
//     age: 24,
//     eyeColor: "brown",
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// };

// console.log(person);

// Accessing object properties

// console.log(person.firstName);
// console.log(person["age"]);

// Mutating object properties

// person.age = 25;
// console.log(person.age);

// const newPerson = person;
// newPerson.age = 24;
// console.log(newPerson);
// console.log(person);

// console.log(person.fullName());


// ARRAYS IN JAVASCRIPT

// const bikes = ["KTM", "Duke", "RC", "Kawasaki", "Ninja"];

// console.log(bikes);
// console.log(bikes[0]);
// console.log(bikes[1]);

// bikes.push("Honda");
// bikes.push("Yamaha");
// console.log(bikes);
// bikes.pop();

// bikes.sort();
// console.log(bikes + "");

// for (let i =0; i<bikes.length; i++) {
//     console.log(bikes[i]);
// }

// Array.isArray(bikes) ? console.log("bikes is an array") : console.log("bikes is not an array");

// (bikes instanceof Array) ? console.log(" Yes"): console.log(" No");

// bikes.forEach(function(bike) {
//     console.log(bike);
// });

// bikes.forEach((bike) => {
//     console.log("Bike name is: " + bike);
// });


// console.log(bikes);
// bikes.splice(2, 1, "Ducati");
// console.log(bikes.shift());
// console.log(bikes);

// flatMap()

const numbers = [[1, 2], [3, 4], [5, 6]];
console.log(numbers);

const newNumbers = numbers.flat();
console.log(newNumbers);

const doubled = newNumbers.flatMap(num => [num * 2]);
console.log(doubled);