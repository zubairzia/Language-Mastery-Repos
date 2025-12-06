In JavaScript, a template string (also known as a template literal) is a special type of string literal that allows for embedded expressions and multi-line strings. Introduced in ECMAScript 2015 (ES6), they offer a more flexible and readable way to work with strings compared to traditional string concatenation.
Here are the key features of template strings:
Syntax: Template strings are enclosed in backticks (`` ` ``) instead of single or double quotes.
Variable and Expression Interpolation: You can embed variables or JavaScript expressions directly within a template string using the syntax ${expression}. The expression inside the curly braces will be evaluated and its result will be inserted into the string.
    let name = "Alice";
    let age = 30;
    let greeting = `Hello, ${name}! You are ${age} years old.`;
    console.log(greeting); // Output: Hello, Alice! You are 30 years old.

    let sum = `The sum of 5 and 10 is ${5 + 10}.`;
    console.log(sum); // Output: The sum of 5 and 10 is 15.
Multi-line Strings: Template strings can span multiple lines without needing special escape characters or concatenation. The line breaks and indentation within the backticks will be preserved in the resulting string.
    let poem = `
    Roses are red,
    Violets are blue,
    Sugar is sweet,
    And so are you.
    `;
    console.log(poem);
