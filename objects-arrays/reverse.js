function reverseArray(arr) {
    let reversed = [];
  
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
  
    return reversed;
  }
  let original = [1, 2, 3];
let result = reverseArray(original);

console.log(result);   // [3, 2, 1]
console.log(original); // [1, 2, 3] (unchanged)

  
