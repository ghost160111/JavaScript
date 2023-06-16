// FIRST EXAMPLE:
{
    let ranks = [1,5,7,8,10,7];

    // this example uses the findIndex() method to get the index of the first occurence of the number 7 after the index 2 in the ranks array
    let index = ranks.findIndex((value, index, object) => value === 7 && index > 2);
    
    console.log(index); // 5
}

// ANOTHER EXAMPLE:
{
    const products = [
        { name: "Phone", price: 999 },
        { name: "Computer", price: 1999 },
        { name: "PC", price: 1499 },
        { name: "Tablet", price: 995 },
    ];
    
    const index = products.findIndex((product, index, object) => {
        return product.price > 1000 && index > 1;
    });

    let result = `Your product which price is greater than 1000 and index location greater than 1 is equal: ${index}`;
    
    console.log(result); // 2
}


