 const readline = require('readline');

 function input(prompt = '') {
   const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout
   });

   return new Promise((resolve) => {
     rl.question(prompt, (answer) => {
       rl.close();
       resolve(answer);
     });
   });
 }

 (async () => {
   const a = parseInt(await input("Digite A: \n"));
   const b = parseInt(await input("Digite B: "));
  
   const x = (a + b);
   console.log('X = ' + x);
 })();


