// Strings

const product = '20" monitor'; // Initialize a string, most used one
const product2 = String('30" monitor'); // Indicates that what is in the function is a string
const product3 = new String('50" monitor'); // Initializes as an object String

console.log(product);
console.log(product2);
console.log(product3);

// String functions

const product4 = ('These are some of the item in our store');

console.log(product4.length); // Gets the length of the string
console.log(product4.indexOf('e')); // Gets the first index of a given character, if not found returns -1
console.log(product4.includes("are")); // Returns if includes a given string or character, returns a boolean value
