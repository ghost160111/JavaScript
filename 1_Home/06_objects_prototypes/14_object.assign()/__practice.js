let widget = {
    color: "red",
};

console.log(widget); // { color: 'red' }

let clonedWidget = Object.assign({}, widget);
console.log(clonedWidget); // { color: 'red' }

{
    // Another example
let box = {
    height: 10,
    width: 20,
};

let style = {
    color: "Red",
    borderStyle: "solid",
};

let styleBox = Object.assign({}, box, style);

console.log(box);
console.log(style);
console.log(styleBox);
// { height: 10, width: 20 }
// { color: 'Red', borderStyle: 'solid' }
// { height: 10, width: 20, color: 'Red', borderStyle: 'solid' }
}

{
    let box = {
        height: 10,
        width: 20,
        color: 'Red'
    };
    
    let style = {
        color: 'Blue',
        borderStyle: 'solid'
    };
    
    let styleBox = Object.assign({}, box, style);
    
    console.log(styleBox);
}
