function Myfirst(X,Y) {
    return X + Y; 
}
const sum = Myfirst(17 , 50);
console.log("The sum is", sum);
const square = x => x * x;

console.log("5² =", square(5));

// Default Parameters
// Default parameter function
function Myfirst(name = "World") {
    console.log("Hello",name); 
}
Myfirst();

//Scope snapshot
//scope snapshot function - This function shows how to define same value inside and outside of function
let colour = "red";   // outer scope

function paint() {
  let colour = "blue";   // inner scope
  console.log("inside:", colour);
}

paint();
console.log("outside:", colour);
