javascript
const variable1 = 20;
const variable2 = '40';

const resultVariable = variable1 + variable2;

console.log(resultVariable);

The `resultVariable` will print "2040", and it is a string.
 

Imagine what would happen with this code:

javascript
const stringVariable = 'some value here';
const numberVariable = 20;

console.log(stringVariable + numberVariable);




Here's how we could have turned the original result into a number:

javascript
const variable1 = 20;
const variable2 = '40';

const resultVariable = variable1 + Number(variable2);

console.log(resultVariable);


By using JavaScript's built-in Number() function, we can convert a string to a number
