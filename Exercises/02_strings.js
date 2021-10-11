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
/************************************* 
 ITEM D 
**************************************/
console.log('Item 2D');
var myWordFour = 'eSTABLISHMENT';
var wordFourFinal = (myWordFour.substring(0,1)).toUpperCase() 
    + (myWordFour.substring(1,myWordFour.length)).toLowerCase();
console.log("String variable: " + myWordFour);
console.log('New String variable: ' + wordFourFinal);
/************************************* 
 ITEM E
**************************************/
console.log('Item 2E');
var myWordFive = 'North Carolina and South Carolina';
var blankSpacePos = myWordFive.indexOf(' ');
console.log('String variable: ' + myWordFive);
console.log('First Blank Space Position (counting first char as 0): ' + blankSpacePos);
console.log('First Blank Space Position (counting first char as 1): ' + (blankSpacePos + 1));
