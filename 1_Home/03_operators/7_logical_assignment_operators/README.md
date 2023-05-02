# Logical assignment operators

```
> ES2021 introduces three logical assignment operators including:
> - Logical OR assignment operator (||=)
> - Logical AND assignment operator (&&=)
> - Nullish coalescing assignment operator (??=)
```

The following table shows the equivalent of the logical assignments operator:

| Logical Assignment Operators  | Logical Operators    |
| ```x ||= y```                 | ```x || (x = y)```   |
| ```x &&= y```                 | ```x && (x = y)```   |
| ```x ??= y```                 | ```x ?? (x = y)```   |

## The Logical OR assignment operator

> The logical OR assignment operator (```||=```) accepts two operands and assigns the right operand to the left operand if the left operand is falsy:

```js
x ||= y
```

> In this syntax, the ```||=``` operator only assigns ```y``` to ```x``` if ```x``` is falsy. For example:

```js

let title;
title ||= 'untitled'; // Equivalent to: title || (title = 'untitled')

console.log(title); // untitled

```

> In this example, the  ```title``` variable is ```undefined```, therefore, it's falsy. Since the ```title``` is falsy, the operator ```||=``` assigns the ```'untitled'``` to the ```title```. The output shows the ```untitled``` as expected.

See another example:

```js

let title = 'JavaScript is Awesome';
title ||= 'untitled';

console.log(title); // 'JavaScript is Awesome'

```

> In this example , the ```title``` is ```'JavaScript is Awesome'``` so it is truthy. Therefore, the logical OR assignment operator (```||=```) doesn't assign the string ```'untitled'``` to the ```title``` variable.

Logical OR assignment operator:

```js
x ||= y
```

is equivalent to the following that uses the logical OR operator;

```js
x || (x = y)
```

> Like the logical OR operator, the logical OR assignment also short-circuits. It means that the logical OR assignment operator only performs an assignment when the ```x``` is falsy.

```js
document.querySelector(".search-result").textContent ||= "Sorry! No result found";
```

## The Logical AND assignment operator

The logical AND assignment operator only assigns ```y``` to ```x``` if ```x``` is truthy:

```js
x &&= y;
```

The logical AND assignment operator also short-circuits. It means that

```js
x &&= y;
```

is equivalent to:

```js
x && (x = y);
```

The following example uses the logical AND assignment operator to change the last name of a ```person``` object if the last name is truthy:

```js

let person = {
    firstName: 'Jane',
    lastName: 'Doe',
};

person.firstName &&= 'Smith';

console.log(person); // {firstName: 'Jane', lastName: 'Smith'}

```

## The nullish coalescing assignment operator

> The nullish coalescing assignment operator only assigns ```y``` to ```x``` if ```x``` is ```null``` or ```undefined```:

```js
x ??= y;
```

> It's equivalent to the following statement that uses the nullish coalescing operator:

```js
x ?? (x = y);
```

> The following example uses the nullish coalescing assignment operator to add a missing property to an object:

```js

let user = {
    username: 'Ghost'
};

user.nickname ??= 'anonymous';

console.log(user); // {username: 'Ghost', nickname: 'anonymous'}

```

In the example above, the ```user.nickname``` is ```undefined```, therefore, it's nullish. The nullish coalescing assignment operator assigns the string ```'anonymous'``` to the ```user.nickname``` property.

# :memo: Summary

- The logical OR assignment (```x ||= y```) operator only assigns ```y``` to ```x``` if ```x``` is falsy.
- The logical AND assignment (```x &&= y```) operator only assigns ```y``` to ```x``` if ```x``` is truthy.
- The nullish coalescing assignment (```x ??= y```) operator only assigns ```y``` to ```x``` if ```x``` is nullish.
