/************************************* 
Third Exercise: Arrays
**************************************/
console.log('Third Exercise: Arrays');
/************************************* 
 ITEM A
**************************************/
console.log('Item 3A');
var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
 'Noviembre', 'Diciembre'];
console.log('Months Array: ' + months);
console.log('Mes 5: ' + months[4]);
console.log('Mes 5: ' + months[10]);
/************************************* 
 ITEM B
**************************************/
console.log('Item 3B');
console.log('Months array after sorting: ' + months.sort());
/************************************* 
 ITEM C
**************************************/
console.log('Item 3C');
months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
 'Noviembre', 'Diciembre'];
months.push('Winter');
months.unshift('Summer');
console.log('New Months Array:');
console.log(months);
/************************************* 
 ITEM D
**************************************/
console.log('Item 3D');
months.pop();
months.shift();
console.log('Returning to original array:');
console.log(months);
/************************************* 
 ITEM E
**************************************/
console.log('Item 3E');
console.log('In-place reversal of the array: ' + months.reverse());
/************************************* 
 ITEM F
**************************************/
console.log('Item 3F');
months.reverse();
console.log('New String: ' + months.join('-'));
