/************************************* 
Sixth Exercise: Functions
**************************************/
console.log('Sixth Exercise: Functions');
/************************************* 
 ITEM A
**************************************/
console.log('Item 6A');
function verifiedAddition (number1, number2){
    return number1 + number2;
};
var n1, n2, result;
n1 = 25;
n2 = 97;
result = addition (n1, n2);
console.log('Number 1: ' + n1);
console.log('Number 2: ' + n2);
console.log('Result: ' + result);
/************************************* 
 ITEM B
**************************************/
console.log('Item 6B');
function addition (number1,number2) {
    if (isNaN(number1) || isNaN(number2)) {
      return 'NaN';
    } 
    else {
        return number1 + number2;
    }
}
var n1, n2, result;
n1 = 25;
n2 = 'Peter';
result = addition (n1, n2);
console.log('Number 1: ' + n1);
console.log('Number 2: ' + n2); 
if (isNaN(n1) || isNaN(n2)) {
   window.alert('At least one parameter in wrong')
   console.log('Result: ' + result);
} else {
  console.log('Result: ' + result);
}
/************************************* 
 ITEM C
**************************************/
console.log('Item 6C');
function validateInteger (number1) {
    if (Number.isInteger(number1)) {
        return 'True'
    } else {
        return 'False'
    }
}
var n1 = 45
var validation = validateInteger(n1) 
console.log (n1)
console.log (validation)
/************************************* 
 ITEM D
**************************************/
console.log('Item 6D');
function additionInteger (number1, number2) {
    if ((isNaN(number1) || isNaN(number2)))  {
        return 'NaN';
      } 
      else if (!(Number.isInteger(number1)) || !(Number.isInteger(number2))){
          adding = number1 + number2
          return Math.round (adding) 
      }
      else {
          return number1 + number2
    }
}
var n1, n2, result;
n1 = 25;
n2 = 27.8;
result = additionInteger (n1, n2);
console.log('Number 1: ' + n1);
console.log('Number 2: ' + n2); 
if (isNaN(n1) || isNaN(n2)) {
   window.alert('At least one parameter in wrong')
   console.log('Result: ' + result);
} else if (!(Number.isInteger(n1)) || !(Number.isInteger(n2))) {
    window.alert('Error: at least one number is not integer');
    console.log('Result: ' + result);
}
else {
    console.log('Result: ' + result);
}
