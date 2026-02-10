// 9 Promises
// Concepts: Promise, then, catch

// Assignments
// Create a function called getUserData that:

// Returns a Promise


// Resolves with user details object contains name, age, city if userId is 1


// Rejects with an error message if userId is  0


// Handles the response using .then() and .catch()

function getUserData(userId) {
    return new Promise((resolve, reject) => {
        if (userId === 1) {
            resolve({ name: "John", age: 30, city: "New York" });
        } else {
            reject("User not found");
        }
    });
}

getUserData(1)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });


// Guess the execution sequence of below code

console.log("1: Start");



setTimeout(() => {

    console.log("2: setTimeout");

}, 0);



Promise.resolve().then(() => {

    console.log("3: Promise");

});



console.log("4: End");

// Output
// 1: Start
// 4: End
// 3: Promise
// 2: setTimeout

