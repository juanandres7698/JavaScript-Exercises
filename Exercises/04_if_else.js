/************************************* 
Fourth Exercise: If else
**************************************/
console.log('Fourth Exercise: If else');
/************************************* 
 ITEM A
**************************************/
console.log('Item 4A');
var number = Math.random();
console.log(number);
if (number >=0.5){
    console.log('Greater than 0.5');
    window.alert('Greater than 0.5');
} else {
    console.log('Lower than 0.5');
    window.alert('Lower than 0.5');
}
/************************************* 
 ITEM B
**************************************/
console.log('Item 4B');
var age = Math.round(Math.random()*101);
//var age = 1;
//var age = 9;
//var age = 15;
//var age = 26;
//var age = 45;
//var age = 67;
//var age = 91;
console.log(age);
if (age<2) {
    console.log('Bebe');
    window.alert('Bebe');
}
else if (age>=2 && age<=12){
    console.log('Niño');
    window.alert('Niño');
}
else if (age>=13 && age<=19){
    console.log('Adolescente');
    window.alert('Adolescente');
}
else if (age>=20 && age<=30){
    console.log('Joven');
    window.alert('Joven');
}
else if (age>=31 && age<=60){
    console.log('Adulto');
    window.alert('Adulto');
}
else if (age>=61 && age<=75){
    console.log('Adulto mayor');
    window.alert('Adulto mayor');
}
else {
    console.log('Anciano');
    window.alert('Anciano');
}