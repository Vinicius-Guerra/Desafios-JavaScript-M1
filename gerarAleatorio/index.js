// Desafio - JavaScript: Contando Casas

window.alert("Vamos iniciar o game!");
const numeroAleatorio = gerarNumeroAleatorio();
let palpite = parseInt(prompt(`Digite seu palpite`));

verificarPalpite(numeroAleatorio, palpite);
 
function verificarPalpite(numeroAleatorio, palpite) {
    let tentativa = 1;

    if(numeroAleatorio == palpite) {
        return window.alert(`Você acertou na tentativa ${tentativa}.`);
    } 

    while(numeroAleatorio !== palpite) {
        window.alert(`Tente novamente`);
        palpite = parseInt(prompt(`Digite seu  novo palpite`));
        tentativa++;
    }

    return window.alert(`Você acertou na tentativa ${tentativa}.`); 
}


function gerarNumeroAleatorio() {
    const numeroAleatorio = Math.floor(Math.random() * 21);

    return numeroAleatorio;
}


//     while(numeroAleatorio != palpite) {
//         if(numeroAleatorio != palpite) {
//             window.alert(`Tente novamente`);
//             palpite = parseInt(prompt(`Digite seu novo palpite`));
//         } else {
//             window.alert(`O numero é ${numeroAleatorio}, voce acertou na tentativa ${tentativa}`);
//         }
//         tentativa++;
//     }
// }