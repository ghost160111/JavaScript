// SPREAD OPERATOR

{
    const odd = [1,3,5];
    const combined = [2,4,6, ...odd];
    
    console.log(odd); // [1,3,5]
    console.log(combined); // [2,4,6,1,3,5]
}

{
    function f(a, b, ...args) {
        console.log(args);
    }
    
    f(1,2,3,4,5,6); // [3,4,5,6]
}

{
    const odd = [1,3,5];
    const combined = [2, ...odd, 4, 6];

    console.log(combined);
    // [2,1,3,5,4,6]
}

{
    // JS spread operator and apply() method
    function compare(a, b) {
        return a - b;
    }

    let result = compare.apply(null, [1, 2]);
    console.log(result); // -1

    result = compare(...[1, 2]);
    console.log(result); // -1

    let rivers = ["Nile", "Ganges", "Yangte"];
    let moreRivers = ["Danube", "Amamzon"];

    rivers.push(...moreRivers);

    console.log(rivers); // [ 'Nile', 'Ganges', 'Yangte', 'Danube', 'Amamzon' ]

    // JS spread operator and array manipulation
    {
        // 1. Constructing array literal
        let initialChars = ['A', 'B'];
        let chars = [...initialChars, 'C', 'D'];
    
        console.log(chars); // ['A', 'B', 'C', 'D']

        // 2. Concatenating arrays
        let numbers = [1, 2];
        let moreNumbers = [3, 4];
        let allNumbers = [...numbers, ...moreNumbers];

        console.log(allNumbers); // [1, 2, 3, 4]

        // 3. Copying an array
        let scores = [80, 70, 90];
        let copiedScores = [...scores];

        console.log(copiedScores); // [ 80, 70, 90 ]
    }

    // JS spread operator and strings
    {
        let chars = ['A', ...'BC', 'D'];
        console.log(chars); // ["A", "B", "C", "D"]
    }
    
}


