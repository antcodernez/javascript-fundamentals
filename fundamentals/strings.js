// Strings

let stringInSingle = 'Hi baby';
let stringInDouble = "Hi cat mao";
// concat
let stringFrancesXD = `Hi baby girl, ${stringInSingle}`;

// concat legacy
let legacy= stringInSingle + " " + stringInDouble;

// we need consistency in the proyect only use one type of quatation marks

console.log(stringFrancesXD);
console.log("Concat legacy" + legacy);

// How to know the lenght of an string
console.log(stringFrancesXD.length);

// lowercase letters
console.log(legacy.toLocaleLowerCase());

// Uppercase letters
console.log(legacy.toLocaleUpperCase());
 
// Using subString()

console.log(stringFrancesXD.substring(3, 12));
console.log(stringFrancesXD.substring(3));
