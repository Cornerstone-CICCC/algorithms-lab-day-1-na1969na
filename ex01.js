// Exercise 1: Write a function named 'sumPrices' that takes an array of product objects (each with a 'price' property) and returns the total sum of all prices.

function sumPrices(products) {
  return products.reduce((acc, product) => acc + product.price, 0);
}

console.log(sumPrices([{ price: 10 }, { price: 20 }, { price: 30 }])) // 60
