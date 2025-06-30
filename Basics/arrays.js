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

// const numbers = [[1, 2], [3, 4], [5, 6]];
// console.log(numbers);

// const newNumbers = numbers.flat();
// console.log(newNumbers);

// const doubled = newNumbers.flatMap(num => [num * 2]);
// console.log(doubled);


// Typed Array
// Typed Arrays are highly suitable for:

// WebGL and Canvas:
// Fast graphics rendering and image processing.

// File APIs:
// Fast reading and writing of local files.

// Media APIs:
// Fast handling of audio and video data.

// WebSockets:
// Efficient binary data transfer over network.



// Typed Arrays share many methods with Standard Arrays:

// Iteration: forEach(), map(), filter(), reduce(), reduceRight(), every(), some(), find(), findIndex(), findLast(), findLastIndex().

// Searching: includes(), indexOf(), lastIndexOf().

// Manipulation: at(), copyWithin(), fill(), reverse(), set(), slice(), sort(), subarray().

// Conversion: join(), toLocaleString(), toString().

// Non-mutating methods: toReversed(), toSorted(), with().


// Standard Arrays methods not available in Typed arrays
// 1. push(), pop(), shift(), unshift(), splice(), sort(), reverse(), fill
// 2. concat(), join(), toString(), toLocaleString(), valueOf(), entries(), keys
// 3. every(), some(), find(), findIndex(), findLast(), findLastIndex(),
// 4. reduce(), reduceRight(), map(), filter(), flatMap(), flat(), flatMap
// 5. at(), copyWithin(), set(), slice(), subarray(), sort(), reverse(),
// 6. join(), toLocaleString(), toString(), valueOf(), entries(), keys()
// 7. includes(), indexOf(), lastIndexOf(), find(), findIndex(), findLast(), find
// LastIndex()
// 8. flat(), flatMap(), flatMap(), flatMap(), flatMap(), flatMap




// DESTRUCTURING 

// let [firstName, lastName] = person;

// Create an Array
// const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// Destructuring
// let {[0]:fruit1 ,[1]:fruit2} = fruits;

// let {[0]:fruit1 ,[2]:fruit2} = fruits;