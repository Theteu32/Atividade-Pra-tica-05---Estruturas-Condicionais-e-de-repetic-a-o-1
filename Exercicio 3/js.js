let valor1 = parseInt(prompt('Digite o primeiro valor'));
let valor2 = parseInt(prompt('Digite o último valor'));
let valor3 = parseInt(prompt('Digite o incremento que você deseja'));

for(let i = valor1; i <= valor2; i+=valor3) {
    console.log(`${i}`);
}