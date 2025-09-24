//funçoes construtoras: uma função construtora não é um objeto, mas sim uma função que cria objetos. 
// 1. Create a custom sleep function
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 2. Define an async function to contain the loop
async function logWithDelay() {
for (let i = 0; i < 10; i++) {
    const data = new Date();
    console.log(data.getMinutes(), data.getSeconds());
    await sleep(1000); // Pause for 1 second before the next iteration
}
}

// 3. Call the async function to start the process
logWithDelay();
