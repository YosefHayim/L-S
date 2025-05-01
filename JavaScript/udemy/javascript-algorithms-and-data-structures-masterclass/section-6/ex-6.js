"use strict";

// Frequency Counter - findAllDuplicates
// Given an array of positive integers,
// some elements appear twice and others appear once.
// Find all the elements that appear twice in this array.
// Note that you can return the elements in any order.

// Time Complexity - O(n)

// score 61/100
// const findAllDuplicates = (arr) => {
//   let freqDuplicates = {};

//   for (let i = 0; i < arr.length; i++) {
//     const n = arr[i];
//     if (!freqDuplicates[n]) {
//       freqDuplicates[n] = 1;
//     } else {
//       freqDuplicates[n]++;
//     }
//   }

//   for (const [key, value] of Object.entries(freqDuplicates)) {
//     if (freqDuplicates[value] < 2) {
//       delete freqDuplicates[key];
//     }
//   }
//   console.log(freqDuplicates);
// };

// correct
// const findAllDuplicates = (arr) => {
//   let freqDuplicates = {};
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     const n = arr[i];
//     freqDuplicates[n] = (freqDuplicates[n] || 0) + 1;
//   }

//   for (const [key, value] of Object.entries(freqDuplicates)) {
//     if (value === 2) {
//       result.push(Number(key));
//     }
//   }

//   return result;
// };

// findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]); // array with 2 and 3
// findAllDuplicates([4, 3, 2, 1, 0]); // []
// findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]); // array with 3, 2, and 1
