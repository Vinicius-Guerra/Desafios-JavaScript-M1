// Desafio - JavaScript: Enigma

function lerCaracteres(texto) {
    if(texto.length > 250) {
        return `O texto possui mais de 250 caracteres, Texto inválido.`;
    }

    let espaco = 1;

    for(let i = 0; i < texto.length; i++) {
        const char = texto[i];
        if(char == char.toUpperCase() || texto[i] == ".") {
            espaco++
        }
    }

    return `o nomero de palavras é ${espaco}`;

}

console.log(lerCaracteres(`sssa1asdss`));