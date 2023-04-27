## Data Types

- Primitive
    - null
    - undefined
    - boolean
    - number
    - bigint
    - string
    - symbol

- Complex
    - object

> Basically, symbol is available from ES15, and bigint is available from ES20

```js
let counter = 120;  // counter is a number
counter = false;    // counter is now a boolean
counter = "foo";    // counter is now a string
```

> In order to get the current type of a variable, use __typeof__ keyword

### Undefined type

```js
let counter = 120;
console.log(typeof(counter)); // number

counter = false;
console.log(typeof(counter)); // boolean

counter = "Hi";
console.log(typeof(counter)); // string
```

> Following example shows undefined variable

```js
let counter;
console.log(counter);        // undefined
console.log(typeof counter); // undefined

console.log(typeof undeclaredVar); // undefined
```

### The null type

```js
let obj = null;
console.log(typeof obj); // object
```

> The typyof null returns object is a known bug in JS. A proposal to fix this was proposed but rejected. The reason was the that fix would break a lot of existing sites

> JavaScript defines that null is equal to undefined as follows:

```js
console.log(null == undefined); // true
```

### The Number Type

> JavaScript uses number data type to represent an integer and floating-point numbers.

```js
let num = 100;
let price = 12.5;
let discount = 0.05;
let price = 200.00;  // intepreted as an integer 200
```

> To get the range of the number type, you can use Number.MIN_VALUE and Number.MAX_VALUE.

```js
console.log(Number.MIN_VALUE); // 1.7976931348623157e+308
console.log(Number.MAX_VALUE); // 5e-324

console.log(Number.MAX_VALUE + Number.MAX_VALUE); // Infinity
console.log(-Number.MAX_VALUE - Number.MAX_VALUE); // -Infinity

```

### NaN

> NaN stands for not a number

```js
console.log('a'/2); // NaN

console.log(NaN/2); // NaN
console.log(NaN == NaN); // false
```


### String type

> String is a sequence of characters -> that the best explanation of this type

```js

let message = "Hello, I'm \"string type\".";

console.log(message); // Hello, I'm "string type".

```

### Boolean type

> The boolean type has two possible values which are true and false.

```js

let text = "message";

let changeText = true;

if (changeText) {
    text = "changed";
}

```

> To convert a value of another data type into a boolean value, you use the Boolean() function. The following table shows the conversion rules:


Type	        true	                        false
string	        non-empty string	            empty string
number	        non-zero number and Infinity	0, NaN
object	        non-null object	                null
undefined	 	                                undefined

> For example:

```js
console.log(Boolean('Hi'));// true
console.log(Boolean(''));  // false

console.log(Boolean(20));  // true
console.log(Boolean(Infinity));  // true
console.log(Boolean(0));  // false

console.log(Boolean({foo: 100}));  // true on non-empty object
console.log(Boolean(null));// false
```

### The symbol type

> JS added a primitive type in ES6: symbol. Different from other primitive types, the symbol type does not have a literal form.

> To create symbol, you call the Symbol function as follows

```js

let s1 = Symbol();

console.log(Symbol() == Symbol()); // false

```

> Symbol creates a new unique value every time you call it.

### The bigint type

> The bigint type represents the whole numbers that are larger than 253 – 1. To form a bigint literal number, you append the letter n at the end of the number:

```js

let pageView = 9007199254740991n;
console.log(typeof pageView); // 'bigint'

```

### The object type

> In JS, an object is a collection of properties, where each property is defined as a key-value pair.

```js

let emptyObject = {};

```

> Following example defines the person object with two properties: firstName and lastName.

```js

let person = {
    firstName: "John",
    lastName: "Doe"
}

```

> A property of an object can hold another object. For example:

```js

let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}

```

> To access object's properties you can use either . or []. See the following example:

```js

console.log(contact.firstName);

// You can also change object's property values
contact.firstName = "Johny";

console.log(contact.firstName); // Johny

// Second way to access and change object's property values
contact["firstName"] = "William";

console.log(contact["firstName"]);

```

### :memo: Summary

- JS has the primitive types: number, string, boolean, null, undefined, symbol, and bigint.
- JS has also complex type: object.




