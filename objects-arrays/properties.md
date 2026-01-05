1. What are Properties in JavaScript?

In JavaScript, almost every value is an object, and objects have properties.

A property is like a variable that belongs to a value.

Example:
let myString = "Hello";
console.log(myString.length); // 5
Here, length is a property of the string "hello".
Important exception ⚠️

Only two values do NOT have properties:

null

undefined

Trying to access a property on them causes an error:

null.length;
