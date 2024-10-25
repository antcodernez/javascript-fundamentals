// Explicit type casting

const string = '34';

const num = parseInt(string);
const xd = parseFloat(num)

// console.log(num);

// binary conversion

const binary = '1010101'
const decimal = parseInt(binary, 2) // Base number 2
// console.log(decimal);

// Implicit type casting
const sum = '5' + 3;
// console.log(sum); // The variable are concat

const sumBol = '5' + true;
// console.log(sumBol); // The variable are concat

const stringValue = '10';
const numberValue = 10;
const boolValue = true;
const values = [stringValue, numberValue, boolValue]


for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        const res = values[i] + values[j]
        console.log(`Result: ${res} 
            result type: ${typeof res}
            we are added ${values[i]} + ${values[j]}
            Types: ${typeof values[i]} + ${typeof values[j]}
            `);           
    }
}


// IF you add a string with a boolean or a number 