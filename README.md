# Unexpected Type Coercion in JavaScript Arithmetic

This repository demonstrates a common, yet subtle bug in JavaScript related to type coercion in arithmetic operations.  Due to JavaScript's dynamic typing, implicit type conversions can lead to unexpected results when operating with numbers and strings. 

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a corrected version with explicit type checking.

## Bug Description
The function `foo` is designed to add two numbers. However, when one or both inputs are strings, JavaScript performs string concatenation instead of numerical addition. This leads to incorrect output.

## Solution
The solution involves explicit type checking using `typeof` or `isNaN` to ensure that both inputs are numbers before performing the addition.  If not, an error message or alternative handling is implemented.