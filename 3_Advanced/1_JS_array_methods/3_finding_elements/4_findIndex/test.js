// JS array findIndex() method

// Syntax:
// findIndex(testFn(element[, index[, array]])[, thisArg])

let ranks = [1, 5, 7, 8, 10, 7];
let index = ranks.findIndex(rank => rank === 7);

console.log(index); // 2

index = ranks.findIndex(
    (rank, index) => rank === 7 && index > 2
);

console.log(index); // 5

const products = [
    { name: "Phone", price: 999 },
    { name: "Computer", price: 1999 },
    { name: "Tablet", price: 995 },
];

const indexProducts = products.findIndex(product => product.price > 1000);

console.log(indexProducts); // 1