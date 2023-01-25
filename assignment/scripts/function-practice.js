console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Why hello there, ${name}!`;
}
// Remember to call the function to test
console.log( helloName( 'Jeff' ));
console.log( helloName( 'John' ));


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}
console.log( addNumbers( 5, 4 ) );
console.log( addNumbers( 130, 70 ) );


// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber ){
  return firstNumber * secondNumber * thirdNumber;
}
console.log( multiplyThree( 2, 4, 6 ));
console.log( multiplyThree( 3, 2, 5 ));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else
    return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let videogames = [ 'Path of Exile', 'Mass Effect', 'Bioshock' ];
let nothing = [];
function getLast( array ) {
  if ( array.length > 0 ) {
    return array[ array.length - 1 ]
  } else {
    return 'undefined'
  }
}
console.log( getLast( videogames ));
console.log( getLast( nothing ));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  let i = 0;
  while ( i < array.length ){
    i += 1;
    if ( array[i] === value ){
      return true;
    } else {
      return false;
    }

  }
} 
   
console.log( find( 'Mass Effect', videogames ));
console.log( find( 'Elden Ring', videogames ));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter( letter, string ) {
  if ( letter === string.charAt(0) ) {
    return true;
  } else {
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let numberArray = [ 3, 7, 15, 40, 100 ];
let numberArray2 = [ 1, 1, 1, 1, 1 ];
function sumAll( array ) {
  let sum = 0
  for ( let number of array ) {
    sum += number
    number += 1;
  }
  return sum;
} 
console.log( sumAll( numberArray ) );
console.log( sumAll( numberArray2 ) );

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let numArray = [ -20, -7, 6, 14, 25 ];
let numArray2 = [ -10, -5, -2 ];
function allPositive( array ) {
  let posArray = [];
  for ( let number of array ) {
    if ( number > 0 ) {
      posArray.push( number );
    } number += 1;
  } return posArray;
}
console.log( allPositive( numArray ) );
console.log( allPositive( numArray2 ) );



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it
/* 
* Write a function which calculates the average of the numbers in a given list.
* Note: Empty arrays should return 0.
*/
let numArray3 = [ 15, 21, 35, 80, 149 ];
let numArray4 = [];
function averageAll( array ) {
  let average = 0;
  for ( let number of array ) {
    average += number;
    number += 1;
  } average = ( average / array.length );
  if ( array.length > 0 ) {
    return average;
  } else {
    return 0;
  }
}
console.log( averageAll( numArray3 ) );
console.log( averageAll( numArray4 ) );