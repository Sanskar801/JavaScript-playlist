// ARRAYS IN JAVASCRIPT

// https://www.w3schools.com/js/js_array_reference.asp


// Basic Array Methods

// Array length
// Array toString()
// Array at()
// Array join()
// Array pop()
// Array push()
// Array shift()
// Array unshift()
// Array delete()
// Array concat()
// Array copyWithin()
// Array flat()
// Array slice()
// Array splice()
// Array toSpliced()

// Array Search Methods

// Array indexOf()
// Array lastIndexOf()
// Array includes()
// Array find()
// Array findIndex()
// Array findLast()
// Array findLastIndex()


// Alphabetic Sort
// Array sort()
// Array reverse()
// Array toSorted()
// Array toReversed()
// Sorting Objects


// Numeric Sort
// Numeric Sort
// Random Sort
// Math.min()
// Math.max()
// Home made Min()
// Home made Max()


// Array Iteration Methods


// Array forEach
// Array map()
// Array flatMap()
// Array filter()
// Array reduce()
// Array reduceRight()
// Array every()
// Array some()
// Array from()
// Array keys()
// Array entries()
// Array with()
// Array Spread (...)
// Array Rest (...)




// Typed Array


// https://www.w3schools.com/js/js_typed_reference.asp

// Typed Arrays are highly suitable for:

// WebGL and Canvas:
// Fast graphics rendering and image processing.

// File APIs:
// Fast reading and writing of local files.

// Media APIs:
// Fast handling of audio and video data.

// WebSockets:
// Efficient binary data transfer over network.


// List of UNAVAILABLE Arrays Methods:
// pop()
// push()
// shift()
// splice()
// unshift()
// flat()
// concat()
// flatMap()
// toSpliced()




// PRACTICE

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

// const numbers = [[1, 2], [3, 4], [5, 6]];
// console.log(numbers);

// const newNumbers = numbers.flat();
// console.log(newNumbers);

// const doubled = newNumbers.flatMap(num => [num * 2]);
// console.log(doubled);



// DESTRUCTURING 

// let [firstName, lastName] = person;

// Create an Array
// const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
// let {[0]:fruit1 ,[1]:fruit2} = fruits;

// let {[0]:fruit1 ,[2]:fruit2} = fruits;


// DEBUGGING

// const bikes = ["KTM", "Duke", "RC", "Kawasaki", "Ninja"];

// console.time('Loop timer');
// for (let i =0; i<bikes.length; i++) {
//     // console.log(bikes[i]);
//     console.timeLog('Loop timer');
// }

// console.timeEnd('Loop timer');

// console.time('Loop timer');
// const x = bikes.length;
// for (let i =0; i<x; i++) {
//     // console.log(bikes[i]);
//     console.timeLog('Loop timer');
// }

// console.timeEnd('Loop timer');



// const array = ['one', 'two', 'three', 'four', 'five'];

// const len = array.length;
// const str = array.toString();

// const firstElement = array.at(0);

// negative indexing is not possible in JS

// const joinedArr = array.join('\n');

// array.pop();

// array.push('six', 'seven');

// array.shift();

// array.unshift('eight');

// const array2 = ['nine', 'ten'];
// const array3 = ['eleven', 'twelve'];

// const newArray = array.concat(array2, array3);

// const array2d = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// const newFlatArray = array2d.flat();

// const doubledArray = newFlatArray.flatMap(x => [x * 2]);

// newArray.splice(10, 0, "thirteen");

// const splicedArray = newArray.toSpliced(11, 0, 'fourteen');

// const newSliceArray = newArray.slice(0, 3);

// let indexofElement = array.indexOf('three');

// let positionofElement = array.indexOf('three') +1;

// const present = array.includes('one');

// let first = newFlatArray.find((value, index, array) => value > 1);

// const users = [
//   { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active', role: 'admin' },
//   { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive', role: 'user' },
//   { id: 3, name: 'Bob Wilson', email: 'bob@example.com', status: 'active', role: 'user' },
//   { id: 4, name: 'Alice Johnson', email: 'alice@example.com', status: 'active', role: 'admin' }
// ];

// function getUserForEdit(userId) {

//     const user = users.find(u => u.id === userId);
//     user ? console.log(user.status) : console.error('User not found');
// }

// getUserForEdit(3);

// const cartItems = [
//   { id: 1, name: 'iPhone 15', price: 999, quantity: 1, category: 'electronics' },
//   { id: 2, name: 'AirPods Pro', price: 249, quantity: 2, category: 'electronics' },
//   { id: 3, name: 'Coffee Mug', price: 15, quantity: 1, category: 'home' },
//   { id: 4, name: 'Wireless Charger', price: 49, quantity: 1, category: 'electronics' }
// ];

// const orders = [
//   { id: 101, date: '2024-12-01', items: [1, 2], total: 1497, status: 'delivered' },
//   { id: 102, date: '2024-12-15', items: [3], total: 15, status: 'pending' },
//   { id: 103, date: '2024-12-20', items: [4], total: 49, status: 'shipped' },
//   { id: 104, date: '2024-12-25', items: [1, 3], total: 1014, status: 'delivered' }
// ];

// function updateItemQuantity(itemId, newQuantity) {
//     const item = cartItems.find(item => item.id === itemId);
//     console.log('Before updation ' + JSON.stringify(item));

//     if(item) {
//         item.quantity = newQuantity;
//         console.log('After updation ' + JSON.stringify(item));
//     }
// }

// updateItemQuantity(2, 100);







// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();
// The above alters the original array

// const sortedFruits = fruits.toSorted();
// const reversedFruits = fruits.toReversed();

// const points = [40, 100, 1, 5, 25, 10];
// const sortedPoints = points.toSorted((a, b) => a - b);

// const years = [1972, 2003, 1987, 1995, 2021, 1964, 2010, 1990, 1958, 2018];
// const sortedYears = years.toSorted();

// const cars = [
//   {type:"Volvo", year:2016},
//   {type:"Saab", year:2001},
//   {type:"BMW", year:2010}
// ];

// const sortedCars = cars.sort((a, b) => a.year - b.year);








// const numbers = [45, 4, 9, 16, 25, 100, 200];

// numbers.forEach(value => console.log(value * 2));

// const numbers2 = numbers.map(value => value * 2);

// const adult = numbers.filter(value => value > 18);

// const sumofArray = numbers.reduce((fistValue, secondValue) => fistValue + secondValue);

// const allOver18 = numbers.some(value => value < 100);

// const entNum = numbers.entries();
// const keyNum = numbers.keys();
// const valNum = numbers.values();


// for (let x of entNum) {
//     console.log(x);
// }

// const newNumb = numbers.with(2, 50);

// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "Des"];

// const year = [...q1, ...q2, ...q3, ...q4];

// const [firstMonth, ...rest] = year;

