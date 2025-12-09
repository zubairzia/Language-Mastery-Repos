Arrow functions are a shorter, simpler way to write functions in JavaScript.
Regular function
function add(a, b) {
  return a + b;
}
Arrow function
const add = (a, b) => a + b;
Arrow function with one parameter
const square = x => x * x;
console.log(square(4)); // 16
Arrow Functions with Muliple lines
const greet = (name) => {
  const message = "Hello, " + name + "!";
  return message;
};
console.log(greet("Sam")); // Hello, Sam!
////////////////////////////////////////
// Arrow Function Returning An Object
const object = () => ({Name: "Zubair", Age: 30});
console.log(object());
