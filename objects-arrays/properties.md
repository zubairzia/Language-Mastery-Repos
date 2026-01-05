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
Two ways to access properties

JavaScript gives you two ways to read properties:

1️⃣ Dot notation
value.propertyName


Example:

Math.max(2, 5);   // → 5
myString.length; // → number of characters


🔹 Use this when:

You know the property name in advance

The name looks like a valid variable name (no spaces, no numbers at the start)

2️⃣ Bracket notation
value["propertyName"]
value[expression]


Example:

let prop = "length";
myString[prop]; // → 5


🔹 Use this when:

The property name is stored in a variable

The property name is not a valid identifier

Examples that require brackets:

value["John Doe"];
value["2"];


Dot notation won’t work here:

value.John Doe; // ❌ error
value.2;        // ❌ error
