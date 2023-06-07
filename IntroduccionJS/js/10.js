// Objects

const product = {
    productName : "Break pads",
    price : 100,
    available : true
}

console.log(product); // Shows the whole product
console.log(product.productName); // Shows on ly a property, the name in this case

// Add new properties 
product.image = "image.jpg";
console.log(product);

// Delete properties
delete product.available;
console.log(product);