"use strict"; // strict mode enabled

//for (let i = 1; i <= 3; i++) {
//    console.log(i);
//}

// 1
// 2
// 3

for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }
}

// 1 1
// 1 2
// 1 3
// 2 1
// 2 2
// 2 3
// 3 1
// 3 2
// 3 3
// 4 1
// 4 2
// 4 3
// for (let j = 1; j <= 2; j++) and this j <= 1 stands for the iteration of how many times should the first for (let i = 1; i <= 4; i++) iterate

console.log("\n\n");

for (let i = 1; i <= 4; i++) {
    for (let j = i; j <= 4; j++) {
        console.log(i,j);
    }
}

// after each iteration it decreases by 1 iteration
// overall there are 4 iterations
// and the first iterator values(i,j) match each other
// first part of iteration
// 1 1
// 1 2
// 1 3
// 1 4
// second part of iteration
// 2 2
// 2 3
// 2 4
// third part of iteration
// 3 3
// 3 4
// fourth part of iteration
// 4 4

console.log("\n\n");

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i, j);
    }
}

// 1 1
// 1 2
// 1 3
// 2 1
// 2 2
// 2 3
// 3 1
// 3 2
// 3 3

console.log("\n\n");

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        for (let z = 1; z <= 3; z++) {
            if (z == 3) {
                break;
            }
            console.log(i, j, z);
        }
    }
}

// 1 1 1
// 1 1 2
// 1 1 3
// 1 2 1
// 1 2 2
// 1 2 3
// 1 3 1
// 1 3 2
// 1 3 3
// 2 1 1
// and so on
// until
// 3 3 3


console.log("\n\n");

for (let i = 1; i <= 1; i++) {
    for (let j = i; j <= 3; j++) {
        console.log(j + " ");
    }
}

// 1
// 1 1
// 1 1 1