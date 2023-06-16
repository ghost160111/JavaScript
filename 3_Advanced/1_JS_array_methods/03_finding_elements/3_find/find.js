let num = [1,2,3,4,5];
let evenNumCount = num.find(qty => qty % 2 === 0);
console.log(evenNumCount); // 2

let customers = [
    { name: "ABC Inc", credit: 100 },
    { name: "ACME Corp", credit: 200 },
    { name: "IoT AG", credit: 300 },
];

let check = customers.find(c => c.credit > 100);

console.log(check); // { name: 'ACME Corp', credit: 200 }
