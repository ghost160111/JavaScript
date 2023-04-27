## String

> String is really important data type in programming, string itself can be defined as sequence of characters.

> There are few imporant operations with strings, and also there are string methods which will be documented in 3rd chapter 3_string_methods.js file.

> Important note: string is primitive type and immutable.

> Here is the example of string declaration, concatenation and interpolation:

```js

let message = "This is sequence of characters";

let anotherMessage = "This is another message";

let combinedMessage1 = message + ". " + anotherMessage + ".";
console.log(combinedMessage1);
// This is sequence of characters. This is another message.

let combinedMessage2 = `${message}. ${anotherMessage}.`;
console.log(combinedMessage2);
// This is sequence of characters. This is another message.

```

### :memo: Summary!

- JS string is primitive type and immutable
- Literal strings can be declared using '' and "", but by logic it is preferable to use "" rather that ''. Because in many programming languages especially in statically typed languages like C, C++, C#, RUST and so on.
- The length property returns the length of a string.
- Use the comparison operators ('<,>,>=,<=') to compare strings. They will be compared by the order of alphabet.




