# Summary

> Summary. Fundamentals section consist of 11 topics, which are mainly data types, operations with data types and lastly arrays. About data types, there are splitted into two parts, first part is primitive types which are number, string, symbol, boolean, undefined, null, bigint. Second part is complex types which is object. JS is dynamic and high-level language which means it is not statically typed language. JS defines data types for you during runtime. Syntax of declaring variables with primitive data types are simple, you start with keywords like let and const, and assign it to the certain data type by using its syntax, for instance for string you use "your string", for numbers you just assign a number you want like 102 or something else, for booleans you assign variable to true or false, for objects you assign {} curly braces, and inside of it define key-value pairs, and lastly for arrays, you assign values by using two possible syntax rules which are by using a constructor Array(), and [] brackets, where you pass the values. Arrays are sequence of elements or order list of values which means array has its data type, which also means all elements has the same data type. Also variables are going to be placed in two types of memory which are stack and heap. All primitive data types will be placed in stack memory, complex data types firstly declares in stack memory then its value places into the heap memory.


1. Variables and Data Types

> - So, the variables syntax is very easy, let or const keyword, if const keyword you should directly assign the value, if let you can assign them after the declaration.
> - Data types are splitted into 2 parts, where the first part consist data types such as string, number, boolean, null, undefined, bigint, symbol. Second part consist of complex data types which is object data type.
> - Primitive data types after declaration are placed in stack memory.
> - Complex data types declaration placed in stack and its values are placed in heap memory.
> - Complex data types values also called as reference values

2. String data type

> - String data type has the fixed size rather than other data types, also this type is immutable which means the characters can't be changed, you don't have an access to the certain index of string. String is basically is the sequence of characters and also which means it has indexes like arrays. For instance, the word 'Hello' index 0 is 'H' and you have an access to that index, but you can't change the characters by using [] notation. In other words, you can use [] notation to show the character on console for instance, but you cannot change it, that's why the strings are immutable. It has certain amount of operations and methods. Fundamental operations are: concatenation and interpolation. Also, using methods for strings, there are a lot of methods, list few are: ( .length ), ( .split() ) and so on...

3. Number data type

> - Number data type has its own size, it has the range like max and min. Number can be integer, decimal and floating point. When you use big numbers there is hint to simplify it by using number separator like 100_000_000, this simplification doesn't affect the runtime the output will be 100000000, this feature really simplifies the job, when you work with the big numbers.

4. Bigint data type

> - Bigint is number that really big, and that uses rarely in development, syntax is easy you assign very big number and place n to the end of that big number.

5. Boolean data type

> - Boolean is data type that has only two literal values which are true and false. You can cast variables with different types by using Boolean(your_data_type_to_be_converted_to_bool) constructor. So, the conversion depends on the rule table of true and false. For instance for empty strings the converted value will be false, whereas not-empty string variable is true.

6. Null data type

> - Null data type is a data type that means nothing which is null.

7. Undefined data type

> - Undefined is data type that is undefined, for instance, variable with identifier tax doesn't exist, and you want to log it in console and console will say undefined in non-strict mode, but in strict-mode, JS will throw an error.

8. Object data type

> - Object is a data type that is complex not a primitive one, which means after declaration its values or how it much accurately defines reference values are placed in heap memory, but the declared variable will be in stack memory.

9. Array

> - Array is the sequence of elements with the same data type, also it can be called as order list of values with the same data type. There are a lot of methods which does their certain job. But the main and most used methods are:
>     - .pop() method that

