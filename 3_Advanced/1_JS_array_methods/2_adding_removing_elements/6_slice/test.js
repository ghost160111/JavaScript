// 3 PRAGMATIC USES OF JS ARRAY slice() method

// slice(start, stop)

// clone array
{
    var numbers = [1,2,3,4,5];
    var newNumbers = numbers.slice();

    console.log(numbers);    // [ 1, 2, 3, 4, 5 ]
    console.log(newNumbers); // [ 1, 2, 3, 4, 5 ]
}

// copy porting of array
{
    var colors = ["red", "green", "blue", "yellow", "purple"];
    var rgb = colors.slice(0,3);

    console.log(rgb); // ["red", "green", "blue"]
}

// convert array-like objects into arrays
{
    function toArray() {
        return Array.prototype.slice.call(arguments);
    }

    var classification = toArray('A', 'B', 'C');

    console.log(classification); // ["A", "B", "C"]
}

// another example
{
    // another typical example that you often see is converting a NodeList into an array as follows:
    var p = document.querySelectorAll("p");
    var list = Array.prototype.slice.call(p);

    // sometimes you will see the following syntax:
    var list = [].slice.call(document.querySelectorAll("p"));
}

