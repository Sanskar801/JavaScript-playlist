// Sets

const array = [1, 3, 4, 5, 66, 43, 43, 'this', 'that'];
const books = new Set(array);
// console.log(books);

// Set Properties
// size

// console.log(books.size);

// Basic Set Methods
// new Set()
// add()
// clear()
// delete()
// has()
// forEach()
// keys()
// values()
// entries()


// books.forEach((value) => console.log(value));


// for (const x of books.keys()) {
//     console.log(x);
// } // set does not have keys so it gives values

// for (const x of books.values()) {
//     console.log(x);
// }

// for (const x of books.entries()) {
//     console.log(x);
// } // set does not have keys so it gives [values, values]


// Logic Methods

// union()
// difference()
// intersection()
// isDisjointFrom()
// isSubsetOf()
// isSupersetOf()
// symmetricDifference()