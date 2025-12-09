///////////////////////////////////////
// Arrow functions

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));
////////////////////////////////////////
const hellosay = () => console.log("Hello World");
hellosay();
//
// Arrow function with one parameter
const multiply = x => x * x;
console.log(multiply(4));

//
// Arrow function with Two parameter
const add = (a,b) => a + b;
console.log(add(6,9));

/////////////////////
// Arrow Function Returning An Object
const object = () => ({Name: "Zubair", Age: 30});
console.log(object());

////////////////////////////
// Arrow Function in Array Method
const Numbers = [1,2,3,4];
const double = Numbers.map(num => num * 2);
console.log(double);
