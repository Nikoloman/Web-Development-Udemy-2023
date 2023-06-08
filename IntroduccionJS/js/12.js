// MORE about objects

const product = {
    productName : "Break pads",
    price : 100,
    available : true
}

product.image = "image.jpg";
console.log(product);

Object.seal(product); // Can modify attributes but cant add
product.price = 200;
product.model = "ABC123";
console.log(product);

Object.freeze(product); // Prevents an attribute from being changed and added
product.model = "ABC123";
console.log(product);

