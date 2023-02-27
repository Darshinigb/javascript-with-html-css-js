// Challenge

What does `expression5` evaluate to?  How could you write this in a single line of code (for exercise purposes only; you would never want to combine all this in one line)?

javascript
const expression1 = 100 % 50;
const expression2 = 100 / 50;
const expression3 = expression1 < expression2;
const expression4 = expression3 && 300 + 5 === 305;
const expression5 = !expression4;

console.log(expression5);


//Answer

// Expression 1

javascript
const expression1 = 100 % 50; // 0


// Expression 2

javascript
const expression2 = 100 / 50; // 2


This one is easier.  100 / 50 is 2.

// Expression 3

javascript
const expression3 = expression1 < expression2; // true



// Expression 4

javascript
const expression4 = expression3 && 300 + 5 === 305;



// Expression 5

javascript
const expression5 = !expression4; // false



// Combining it in one expression


javascript
const result = !(((100 % 50) < (100 / 50)) && 300 + 5 === 305);

console.log(result);
