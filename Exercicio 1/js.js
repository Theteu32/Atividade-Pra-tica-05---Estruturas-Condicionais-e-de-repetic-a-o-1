let somaIdades = 0;
let estudantes = -1;
let ano;

while ((ano = parseInt(prompt("Digite a idade do aluno (ou 999 para encerrar):"))) !== 999) {
    if (!isNaN(ano)) { 
        somaIdades += ano;
        estudantes++;
    }
}

if (estudantes >= 0) {
    console.log("Quantidade de alunos na turma:", estudantes + 1);
    console.log("Média de idade dos alunos:", (somaIdades / estudantes).toFixed(2));
} else {
    console.log("Não há alunos na turma.");
}