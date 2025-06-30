// Iterables


// Iterating Over a String using for..of

// const name = "Sanskar";

// for (const x of name){
//     console.log(x);
// }



// Iterating Over an Array using for..of

// const num = [1,2,3,4,5];

// for (const x of num) {
//     console.log(x);
// }



// Iterating Over a Set using for..of

// const letters = new Set(["r","t","6","g"]);

// for (const x of letters){
//     console.log(x);
// }



// Iterating Over a Map using for..of

// const fruits = new Map([
//     ["grape", 12],
//     ["apple", 49],
//     ["banana", 59]
// ]);

// for (const x of fruits) {
//     console.log(x);
// }




// next() method

// const iter = {
//     counter: 0,
//     next() {
//         return {
//             value: 0,
//             done: false,
//         };
//     }
// }

// console.log(iter.next().value);





// Symbol.iterator

// function numbs() {

//     let counter =0;
//     return {
//         next: function() {
//             counter += 1;
//             return {
//                 value: counter,
//                 done: false
//             }
//         }
//     };
// }

// const num = numbs();
// console.log(num.next().value);
// console.log(num.next().value);
// console.log(num.next().value);

// for (const x of numbs){
//     console.log(x);
// }  

// // TypeError: numbs is not iterable

// const iter = {
//     counter: 0,
//     next() {
//         return {
//             value: this.counter++,
//             done: false,
//         };
//     }
// }

// for (const x of iter) {
//     console.log(x);
// } 

// // TypeError: iter is not iterable


// const iter = {
//     counter: -1,
//     next(){
//         return {
//             value: ++this.counter,
//             done: this.counter >=11,
//         };
//     },
//     [Symbol.iterator]() {
//         return this;
//     }
// }

// for (const i of iter) {
//     console.log(i);
// }

// Iterable protocol

// Levels 
// 1. Iterator
// 2. Iterable
// 3. Generator

// Generator

// function* fibGenerator(max =200){
//     let a =0, b = 1;

//     while(true) {
//         const c = a+b;

//         if (c>=max){
//             break;
//         }

//         yield c;
//         a = b;
//         b = c;
//     }
// }


// const iter = fibGenerator();

// for (const x of iter) {
//     console.log(x);
// }