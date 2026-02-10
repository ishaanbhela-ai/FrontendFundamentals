// 7 Closures
// Concepts: closures, lexical scope

// Assignments
// Create a counter function using closure.


// Explain how inner functions access outer variables.

function counter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}

const counterobj = counter();
counterobj();
counterobj();
counterobj();

// The inner functions are inside the scope of outer function, same as the function variable, so it can access the outer function variables.
