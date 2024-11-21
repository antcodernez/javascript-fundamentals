/*
    do {
        code; first execute and after check the condition    
    } while (condition);
*/
import readline from "readline";

let logged = false 

const users = ["juan", "pedro"];

do {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })    

    rl.question('Add you user', (user) => {
        const exists = users.includes(user);

        if(exists) {
            logged = true;
            console.log(`Welcome again ${user}`);
            rl.close();
        }

        console.log(`This user don't exist`);
    })

} while (logged);