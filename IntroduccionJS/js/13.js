const product = {
    productName : "Break pads",
    price : 100,
    available : true
}

const measures = {
    weight : "1 Kg",
    height : "50 cm"
}

const newProduct = {...product, ...measures}
console.log(product);
console.log(measures);
console.log(newProduct);