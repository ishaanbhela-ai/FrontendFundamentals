// 10 Async / Await
// Concepts: async functions, error handling

// Assignments
// Convert the question 1 from assignment 9, to async/await with try , catch block.

async function dataType(data) {
    console.log("Data type of " + data + " is: " + typeof data);
}

try {
    await dataType(null);
    dataType(undefined);
    await dataType(123);
    dataType("Hello");
    await dataType(true);
    dataType({});
    dataType([]);
    dataType(function () { });
}
catch (error) {
    console.log(error);
}

