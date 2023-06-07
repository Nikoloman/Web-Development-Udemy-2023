// More about objects

const product = {
    productName : "Break pads",
    price : 100,
    available : true
}

const nameProduct = product.productName; // Works like a getter
const priceProduct = product.price; 

console.log(`Name: ${nameProduct} \nPrice: ${priceProduct}`);

// Destructuring

const {price} = product; // A more simple way
const {productName, available} = product; // More than one at a time
console.log(price);
console.log(productName, available);