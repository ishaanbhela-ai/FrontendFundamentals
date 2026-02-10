// 8 Callbacks
// Concepts: callback functions

// Assignments
// Create a function that accepts a callback and executes it after 10 seconds.

function executeCallback(callback) {
    setTimeout(() => {
        callback();
    }, 10000);
}

executeCallback(() => {
    console.log("Callback executed after 10 seconds");
});

function callback() {
    console.log("Callback executed");
}