function criptografia(mensagem, chave, converter) {
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    const alfabetoMaiusculo = alfabeto.toUpperCase();
    let resultado = "";

    for (let letra of mensagem) {
        if (alfabeto.includes(letra)) {
            resultado += converter(letra, chave, alfabeto);
        } else if (alfabetoMaiusculo.includes(letra)) {
            resultado += converter(letra, chave, alfabetoMaiusculo);
        } else {
            resultado += letra;
        }
    }

    return resultado;
}

function cifraLetra(letra, chave, alfabeto) {
    let resultado = '';
    for (let i = 0; i < alfabeto.length; i++) {
        if (alfabeto[i] === letra) {
            let novoIndice = (i + chave) % alfabeto.length;
            resultado = alfabeto[novoIndice];
            break;
        }
    }
    return resultado;
}

function decifraLetra(letra, chave, alfabeto) {
    let resultado = '';
    for (let i = 0; i < alfabeto.length; i++) {
        if (alfabeto[i] === letra) {
            let novoIndice = (i - chave + alfabeto.length) % alfabeto.length;
            resultado = alfabeto[novoIndice];
            break;
        }
    }
    return resultado;
}

