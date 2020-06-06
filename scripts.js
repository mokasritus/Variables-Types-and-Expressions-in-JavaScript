console.log("mukodjel");

let myString='This is a string';
console.log("myString");

let name = 'Rita';
let greating = `Hello ${name}!`;
console.log(`Hello ${name}!`);

let charCount = 'Hello world'.length
console.log('Hello+name'.length)

let trueOrFalse = 5 === 5;
console.log(trueOrFalse)
trueOrFalse = 100 < 50;
console.log(trueOrFalse)
trueOrFalse = 'hello' !== 'world';
console.log(trueOrFalse)
trueOrFalse = 1 >= 2;
console.log(trueOrFalse)
trueOrFalse = 'blue'.length === 'green'.length;
console.log(trueOrFalse)
trueOrFalse = 3 < 4 && (5 > 6 || 7 < 8);
console.log(trueOrFalse)

let myArray = ['Claire', 'Mark', 'Susan'];
let myOtherArray = [3, 12, true, 'Hello'];
console.log(myArray[0]);
myArray[0] = 'Kazmer';
console.log(myArray[0]);
console.log(myArray.length);
myArray.push('Zita');
console.log(myArray.length);


let NameArray= ['Bela', 'Zita', 'Lea'];
trueOrFalse = (`NameArray[2].length`)>5;
console.log(trueOrFalse);
NameArray.push('Szabolcs');
let removedItem = NameArray.splice(0, 1)
NameArray.splice(0,0,'Rita');
console.log(NameArray);
trueOrFalse = (NameArray.length)>4;
console.log(trueOrFalse);

var colors = new Array( "Orange", 'green', 'red');
var hasManyColors=new Array("grey", "purple");

let post ={
    colors: ["Orange", 'green', 'red'],
    hasManyColors: ['grey'],
    };

if (colors.length+hasManyColors.length >3) 
{
    console.log(trueOrFalse)
} 
    
