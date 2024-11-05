import readline from "readline";
// En Node.js, readline es un módulo que proporciona una interfaz para leer datos de una entrada de flujo de texto, como process.stdin (la entrada estándar) o un archivo. Es muy útil para capturar entradas de usuario en aplicaciones de línea de comandos.

const secretNumber = Math.floor(Math.random() * 11);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); //  Crea una nueva interfaz de readline usando process.stdin para la entrada de datos y process.stdout para la salida.

console.log(`Guess the secret Number`);
console.log(`Add a number between 1 and 10`);

rl.question("Add your number n.nr ", (number) => {
    
    secretNumber === Number(number) ? console.log(`You guess the secret number :D 
        The secret number was ${secretNumber}`) : console.log(`Sorry you lost, The secret number was ${secretNumber}`);
    
    rl.close();
});