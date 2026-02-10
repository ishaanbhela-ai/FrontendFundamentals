// 4 Objects
// Concepts: object creation, access, iteration

// Assignments
// Create a user object with properties name, age, and city.


// Print all keys and values using methods Object.keys, Object.values and forEach loop


// Add new property mobileNumber and delete city properties dynamically.


// Convert below array of object group by role

// const users = [

//   { name: "Pratik", role: "admin" },

//   { name: "Amit", role: "user" },

//   { name: "Neha", role: "admin" },

//   { name: "Ravi", role: "user" },

// ];


// Output: 

// {

//   admin: [

//     { name: "Pratik", role: "admin" },

//     { name: "Neha", role: "admin" }

//   ],

//   user: [

//     { name: "Amit", role: "user" },

//     { name: "Ravi", role: "user" }

//   ]

// }

const users = [

    { name: "Pratik", role: "admin" },

    { name: "Amit", role: "user" },

    { name: "Neha", role: "admin" },

    { name: "Ravi", role: "user" },

];

users.forEach(users => {
    console.log("Name: " + users.name + " Role: " + users.role);
});

// Convert below array of object group by role

const groupByRole = users.reduce((acc, user) => {
    if (!acc[user.role]) {
        acc[user.role] = [];
    }
    acc[user.role].push(user.name);
    return acc;
}, {});

console.log(groupByRole);
