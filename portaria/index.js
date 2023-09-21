// Desafio - JavaScript: Desafio Portaria

let nome = prompt("Digite o seu nome:");
let idade = prompt("Digite a sua idade:");
let estaAcompanhado = prompt("Você está acompanhado? (s/n)");

if(estaAcompanhado.toLowerCase() == 's') {
    estaAcompanhado = true;
} else {
    estaAcompanhado = false;
}

entradaBalada(nome,idade, estaAcompanhado);

function entradaBalada(nome, idade, estaAcompanhado) {
    if(idade < 18) {
        return window.alert(`Entrada não permitida para ${nome}: Menor de idade`);
    } else if (idade >= 18 && estaAcompanhado) {
        return window.alert(`Entrada permitida para ${nome}: Conceder desconto`);
    } else {
        return `Entrada permitida para ${nome}: Valor integral.`;
    }

}