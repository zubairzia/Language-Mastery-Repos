## Big Idea of Chapter 3: **Functions**

### What is a function?

A **function** is a reusable piece of code that:

* Does one job
* Can be given inputs (parameters)
* Can return an output (or just do something)

Think of a function like a **machine**:

> Input → Function → Output

---

## Why functions matter

Functions help you:

* **Avoid repetition** (write code once, use it many times)
* **Organize programs** into meaningful pieces
* **Give names to actions** (like `square`, `power`, `makeNoise`)

In human language, we avoid inventing new words.
In programming, we *must* invent new “words” (functions) because built-in ones are limited.

---

## Defining a function

### Example:

```js
const square = function(x) {
  return x * x;
};
```

### What’s happening here?

* `square` → the name of the function
* `x` → parameter (input)
* `x * x` → what the function does
* `return` → sends the result back

When you call it:

```js
square(12);
```

It returns:

```js
144
```

### Mental model:

> “When I give `square` a number, it gives me that number multiplied by itself.”

---

## Function syntax breakdown

```js
const name = function(parameters) {
  // body
};
```

* `function` keyword → creates a function
* Parameters are like **variables**
* The **body** runs when the function is called
* Braces `{}` are **always required**

---

## Functions with no parameters

```js
const makeNoise = function() {
  console.log("Pling!");
};
```

* No input
* Just performs an action (a **side effect**)
* Returns `undefined`

Calling it:

```js
makeNoise();
```

---

## Functions with multiple parameters

```js
const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
```

Calling:

```js
power(2, 10);
```

Returns:

```js
1024
```

### What this function means:

> “Multiply `base` by itself `exponent` times.”

---

## `return` explained (very important)

* `return value;` → sends `value` back and **stops the function**
* `return;` → returns `undefined`
* No `return` at all → also returns `undefined`

Example:

```js
function test() {}
test(); // undefined
```

---

## Parameters & Scope (important concept)

### Parameters

Parameters are **local variables** whose values come from the function call.

```js
function greet(name) {
  console.log(name);
}
greet("Alice");
```

Here:

* `name` exists **only inside** `greet`

---

## Scope: where variables are visible

### Global scope

```js
let x = 10;
```

* Can be used **anywhere** in the program

### Local scope

```js
function test() {
  let y = 5;
}
```

* `y` exists **only inside** the function

Trying to use `y` outside causes an error.

### Key rule:

> Variables inside a function stay inside that function.

This helps prevent bugs and keeps code clean.

---

## Simple analogy

Think of a function like a **kitchen**:

* Ingredients (parameters) come in
* Cooking happens inside
* Food (return value) goes out
* You can’t grab things from inside the kitchen unless they’re returned

---

## What you should focus on learning right now

1. What a function is
2. How to define and call a function
3. What parameters do
4. What `return` means
5. Difference between **global** and **local** variables

---

## Tiny practice (recommended)

Try this yourself:

```js
const add = function(a, b) {
  return a + b;
};

console.log(add(3, 4)); // ?
