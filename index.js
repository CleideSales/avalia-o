import cesar from './cesar.js';

const mensagem = "Javascript Cifra de Cesar";
const chave = 5;

console.log("Mensagem original: ", mensagem);

const mensagemCifrada = criptografia(mensagem, chave, cifraLetra);
console.log("Mensagem cifrada: ", mensagemCifrada);

const mensagemDecifrada = criptografia(mensagemCifrada, chave, decifraLetra);
console.log("Mensagem decifrada: ", mensagemDecifrada);