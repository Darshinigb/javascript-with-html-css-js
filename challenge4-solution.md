// Challenge

What does `result` evaluate to?  You might want to review the previous lesson for this one.

javascript
const myObj = {
  prop1: 'first value',
  prop2: 20
};

// Index         0   1   2
const myArray = [40, 50, 2];

const result = myObj.prop2 === (myArray[0] / myArray[2]);

// Solution



* `myObj.prop2` equals `20`
* `myArray[0]` equals `40`
* `myArray[2]` equals `2`

So now, we can look at our expression like this:

javascript
const result = 20 === (40 / 2); // true


`40 / 2` evaluates to `20`, and `20 === 20` evaluates to `true`.