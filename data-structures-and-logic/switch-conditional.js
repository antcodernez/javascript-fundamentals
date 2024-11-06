import readline from "readline";

/* switch(expresion) {
    case value1:
        // code to exect 
    break;
    case value2:
        // code to exect 
    break;
    case value3:
        // code to exect 
    break;
    default:
        // code to exect 
    break;
} */

const rl = new readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log(`Know the price from a fruit`);


rl.question(`Add a name of a fruit: `, (fruit) => {
    const lowerFruit = fruit.toLowerCase();

    switch(lowerFruit) {
            case `manzana`:
                console.log(`Price from ${lowerFruit} is: $50 MXM`);
            break;
            case `papaya`:
                console.log(`Price from ${lowerFruit} is: $40 MXM`); 
            break;
            case `guayaba`:
                console.log(`Price from ${lowerFruit} is: $35 MXM`);
            break;
            case `uvas`:
                console.log(`Price from ${lowerFruit} is: $70 MXM`);
            break;
            default:
                console.log(`I don't know the fruit ${lowerFruit}`);
            break;
        } 
    rl.close();
})