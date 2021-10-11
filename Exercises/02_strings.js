/************************************* 
 Second Exercise: Strings
**************************************/
console.log('Second Exercise: Strings');
/************************************* 
 ITEM A
**************************************/
console.log('Item 2A');
var myWord = 'otolaryngologist';
console.log('Word without uppercase: ' + myWord);
console.log('Word with uppercase: ' + myWord.toUpperCase());
/************************************* 
 ITEM B
**************************************/
console.log('Item 2B');
var myWordTwo = 'AstonishingThings';
var wordTwoSub = myWordTwo.substring(0,5);
console.log('Variable myWordTwo: ' + myWordTwo);
console.log('First 5 code units: ' + wordTwoSub);
/************************************* 
 ITEM C
**************************************/
console.log('Item 2C');
var myWordThree = 'incomprehensibility';
var wordThreeSub = myWordThree.substring (myWordThree.length - 3,myWordThree.length);
console.log('Variable myWordThree: ' + myWordThree);
console.log('Last 3 code units: ' + wordThreeSub);
