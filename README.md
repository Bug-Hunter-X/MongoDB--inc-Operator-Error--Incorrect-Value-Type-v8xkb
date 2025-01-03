# MongoDB $inc Operator Error: Incorrect Value Type

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The `$inc` operator is designed to increment a numeric field by a specified value.  Attempting to use it with a string value leads to an error.  The example shows the error and the correct usage.

## Bug
The `bug.js` file contains the incorrect code that uses `$inc` with a string value, causing the update to fail.

## Solution
The `bugSolution.js` file provides the corrected code, showcasing the proper usage of `$inc` with a numeric value.
