function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Error: Inputs must be numbers"; // Handle non-numeric inputs
  }
  return a + b;
}
console.log(foo(2, 3)); // Output: 5
console.log(foo(2, "3")); // Output: Error: Inputs must be numbers
console.log(foo("2", 3)); // Output: Error: Inputs must be numbers
console.log(foo("2", "3")); // Output: Error: Inputs must be numbers