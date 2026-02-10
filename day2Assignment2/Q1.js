// Concepts: var, let, const, primitive types

// Assignments
// Write a function that accepts different data types and prints their type using typeof.


// Explain the difference between null and undefined with code.

function dataType(data) {
    console.log("Data type of " + data + " is: " + typeof data);
}
dataType(null);
dataType(undefined);
dataType(123);
dataType("Hello");
dataType(true);
dataType({});
dataType([]);
dataType(function () { });
