// Example data: Array of arrays of objects
const data = [
    [
        { id: 1, name: "John" },
        { id: 2, name: "Jane" }
    ],
    [
        { id: 3, name: "Bob" }
    ]
];

// Function to extract names from the nested array
function extractNames(nestedArray) {
    return nestedArray.flatMap(innerArray => innerArray.map(item => item.name));
}

// Example usage
const names = extractNames(data);
console.log(names); // Output: ['John', 'Jane', 'Bob']