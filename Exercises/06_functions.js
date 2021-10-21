/************************************* 
Sixth Exercise: Functions
**************************************/
console.log('Sixth Exercise: Functions');
/************************************* 
 ITEM A
**************************************/
console.log('Item 6A');
function addition (number1, number2){
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
        window.alert('At least one parameter in wrong');
        console.log('At least one parameter wrong');
        return 'NaN';
    } 
    else {
        return number1 + number2;
    }
}
n2 = 'Peter';
result = addition (n1, n2);
console.log('Number 1: ' + n1);
console.log('Number 2: ' + n2); 
console.log('Result: ' + result)
/************************************* 
 ITEM C
**************************************/
console.log('Item 6C');
function validateInteger (number1) {
    if (Number.isInteger(number1)) {
        return True
    } 
    else {
        return False
    }
}
var validation = validateInteger(n1) 
console.log (n1)
console.log ("Is integer?: " + validation)
/************************************* 
 ITEM D
**************************************/
console.log('Item 6D');
function addition (number1, number2) {
    if ((isNaN(number1) || isNaN(number2)))  {
        window.alert('At least one parameter is wrong');
        console.log('At least one parameter is wrong');
        return 'NaN';
      } 
      else if (!(Number.isInteger(number1)) || !(Number.isInteger(number2))){
          window.alert('At least one parameter in not integer');
          console.log('At least one parameter is not integer');
          return Math.round (number1+number2); 
      }
      else {
          return number1 + number2
    }
}
n1 = 25;
n2 = 27.8;
result = addition (n1, n2);
console.log('Number 1: ' + n1);
console.log('Number 2: ' + n2); 
console.log('Result: ' + result);
/************************************* 
 ITEM E
**************************************/
console.log('Item 6E');
function validation(n) {
    if (isNaN(n)) {
        return NaN;
    } else {
        return true
    }
}
function addition (number1, number2) {
    val1 = validation (number1);
    val2 = validation (number2);
    if ((val1 = NaN) || (val2 = NaN)) {
        window.alert('Al least one parameter is wrong')
        console.log('At least one parameter is wrong')
        return NaN;
    } 
     else {
        a = number1 + number2;
        return a;
    }
}
n1 = 25;
n2 = 'Peter';
result = addition(n1,n2);
console.log('Number 1: ' + n1);
console.log('Number 2: ' + n2); 
console.log('Result: ' + result);