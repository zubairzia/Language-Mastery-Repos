// 1. CREATE (declaration style)
function greet(name) {
  console.log("Hello " + name + "!");
}

// 2. CALL (use it)
greet("Ada");
greet("Grace");
//You should see Hello Ada! Hello Grace!
//STEP 2 – return a value, store the result
function add(a, b) {
  return a + b;
}

const sum = add(3, 7);
console.log("The sum is", sum);
//You should see
//The sum is 10
// STEP 3 – arrow-function flavour
const square = x => x * x;

console.log("5² =", square(5));
