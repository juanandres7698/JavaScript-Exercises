/************************************* 
Fifth Exercise: For
**************************************/
console.log('Fifth Exercise: For');
/************************************* 
 ITEM A
**************************************/
console.log('Item 5A');
var numbers = new Array ('one','two','three','four','five');
console.log('Array Numbers:');
console.log(numbers);
for (var i=0; i<=numbers.length-1; i++){
    window.alert(numbers[i]);
    console.log(numbers[i]);
};
/************************************* 
 ITEM B
**************************************/
console.log('Item 5B');
for (var i=0; i<=numbers.length-1; i++){
    numbers[i] = (numbers[i].substring(0,1)).toUpperCase()+(numbers[i].substring(1,numbers[i].length)).toLowerCase();
    window.alert(numbers[i]+' modified');
    console.log(numbers[i]+' modified');
};
console.log('New array Numbers:');
console.log(numbers);
/************************************* 
 ITEM C
**************************************/
console.log('Item 5C');
var sentence = '';
for (var i=0; i<=numbers.length-1; i++){
    sentence = sentence + numbers[i];
    console.log(sentence);
};
window.alert(sentence);
