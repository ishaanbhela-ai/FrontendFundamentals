// 6 ES6+ Features
// Concepts: destructuring, spread, rest

// Assignments
// Destructure an object and console name and age from it.
const user = {

    name: "Akshay",

    age: 25,

    city: "Pune"

};

const { name, age, city } = user;
console.log(name);
console.log(age);
console.log(city);




// Merge two arrays using spread operator.
const arr1 = [1, 2, 3];

const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);



// Output: 

// console.log(mergedArray);

// // [1, 2, 3, 4, 5, 6]


//  Create a function accepting 5 numbers using rest parameters and display sum of all numbers from function.
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num);
}

console.log(sum(1, 2, 3, 4, 5));


