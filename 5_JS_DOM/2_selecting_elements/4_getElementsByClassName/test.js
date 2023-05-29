// 1. Calling JS getElementsByClassName() on an element example

let menu = document.getElementById("menu");
let items = menu.getElementsByClassName("item");

let data = [].map.call(items, items => items.textContent);

console.log(data); // log it on browser console

// 2. Calling JS getElementsByClassName() on the document example

let elements = document.getElementsByClassName("secondary");
let anotherData = [].map.call(elements, elem => elem.textContent);

console.log(anotherData);
