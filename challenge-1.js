 1.const myBoolean = true;

2.const myString = 'hello world';

3.const firstNumber = 20;

4. let secondNumber = 40;

5.secondNumber = 80;

6.const myArray = [myBoolean, myString];

7.const myObject = {
  firstProperty: myArray,
  sumProperty: firstNumber + secondNumber
};

8.console.log(myObject);

9.const sumProp = myObject.sumProperty;
  console.log(sumProp);
          
                OR       
          
  console.log(myObject.sumProperty);

10.const firstProp = myObject.firstProperty;
    const arrayValue = firstProp[1];
    console.log(arrayValue);

              OR       

  console.log(myObject.firstProperty[1]);
