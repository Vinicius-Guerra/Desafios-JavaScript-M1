// Desafio - JavaScript: Aprovado ou reprovado

let nomeAluno = prompt(`NOME DO ALUNO:`);
verificaAluno(nomeAluno);

let presenca = parseFloat(prompt(`PRESENÇA:`)); // Convertemos a presença para número float
verificaPresenca(presenca);

let materia1 = prompt(`MATERIA:`);
let nota1 = parseFloat(prompt(`NOTA:`));
verificaNotas(nota1);

let materia2 = prompt(`MATERIA:`);
let nota2 = parseFloat(prompt(`NOTA:`));
verificaNotas(nota2);

let materia3 = prompt(`MATERIA:`);
let nota3 = parseFloat(prompt(`NOTA:`));
verificaNotas(nota3);

let somaNota = nota1 + nota2 + nota3;
let mediaNota = somaNota / 3;


aprovadoOuReprovado(mediaNota, presenca, nomeAluno);

function aprovadoOuReprovado(media, presenca, nomeAluno) {
    if (media >= 8 && presenca >= 6) {
        alert(`A média do aluno ${nomeAluno} é de ${media} e sua presença é de ${presenca}: Aluno Aprovado!`);
    } else {
        alert(`A média do aluno ${nomeAluno} é de ${media} e sua presença é de ${presenca}: Aluno reprovado!`);
    }
}


function verificaPresenca(presenca) {
    if (presenca < 0 || presenca > 10 || isNaN(presenca)) {
        alert(`Presença inválida.`);
    }
}

function verificaNotas(nota) {
    if (nota < 0 || nota > 10 || isNaN(nota)) {
        alert(`Nota inválida.`);
    }
}

function verificaAluno(nomeAluno) {
    if (nomeAluno.length <= 4) {
        alert(`Nome inválido.`);
    }
}