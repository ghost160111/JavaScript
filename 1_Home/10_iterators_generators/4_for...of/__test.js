// FOR...OF LOOP

// EXAMPLE 1:
{
    let scores = [80, 90, 70];

    for (let score of scores) {
        score += 5;
        console.log(score);
    }
    // Outputs:
    // 85
    // 95
    // 75
}

// EXAMPLE 2:
{
    let scores = [80, 90, 70];

    for (const score of scores) {
        console.log(score);
    }
    // Outputs:
    // 80
    // 90
    // 70
}

// EXAMPLE 3:
{
    let colors = ["Red", "Green", "Blue"];

    for (const [index, color] of colors.entries()) {
        console.log(`${color} is at index ${index}`);
    }
    // Outputs:
    // Red is at index 0
    // Green is at index 1
    // Blue is at index 2
}

// EXAMPLE 4: IN-PLACE OBJECT DESTRUCTURING WITH FOR...OF
{
    const ratings = [
        { user: "John", score: 3 },
        { user: "Jane", score: 4 },
        { user: "David", score: 5 },
        { user: "Peter", score: 2 },
    ];

    let sum = 0;
    for (const {score} of ratings) {
        sum += score;
    }

    console.log(`Total scores: ${sum}`);
    // Outputs:
    // Total scores: 14
}

// EXAMPLE 5: ITERATING OVER STRINGS
{
    let str = "abc";
    for (const c of str) {
        console.log(c);
    }
    // Outputs:
    // a
    // b
    // c
}

// EXAMPLE 6: ITERATING OVER MAP OBJECTS
{
    let colors = new Map();

    colors.set("red", "#ff0000");
    colors.set("green", "#00ff00");
    colors.set("blue", "#0000ff");

    for (const color of colors) {
        console.log(color);
    }
    // Outputs:
    // [ 'red', '#ff0000' ]
    // [ 'green', '#00ff00' ]
    // [ 'blue', '#0000ff' ]
}

// EXAMPLE 7: ITERATING OVER SET OBJECTS
{
    let nums = new Set([1, 2, 3]);

    for (const num of nums) {
        console.log(num);
    }
    // Outputs:
    // 1
    // 2
    // 3
}

// for...of vs. for...in
{
    let scores = [10, 20, 30];
    scores.message = "Hi";

    console.log("for...in:");
    for (let score in scores) {
        console.log(score);
    }

    console.log("for...of:");
    for (let score of scores) {
        console.log(score);
    }
    // Output:
    // for...in
    // 0
    // 1
    // 2
    // message
    // for...of
    // 10
    // 20
    // 30
}
