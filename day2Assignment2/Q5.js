// 5 Array Methods (Important)
// Concepts: map, filter, reduce

//  [20, 4, 23, 56, 1, 23, 65, 78, 45, 3, 9, 6, 23, 1, 50]

// Assignments
// Use map to multiply each array element by 2.


// Use filter to find numbers greater than 10.


// Use reduce to find the sum of array elements.


// Reverse an array.

const arr = [20, 4, 23, 56, 1, 23, 65, 78, 45, 3, 9, 6, 23, 1, 50];
console.log(arr.map((num) => num * 2));
console.log(arr.filter((num) => num > 10));
console.log(arr.reduce((acc, num) => acc + num));
console.log(arr.reverse());

