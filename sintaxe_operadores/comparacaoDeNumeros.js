recebeNumeros(1, 10);

function recebeNumeros(num1, num2) {
    let mensagem = criaMensagemNumerosIguais(num1, num2);
    mensagem += criaMensagemSomaNumeros(num1, num2);
    console.log(mensagem)
    return mensagem;
}

function criaMensagemNumerosIguais(numero1, numero2) {
    return  "Os números " + numero1 + ' e ' + numero2 +  (numero1 == numero2 ? " são iguais. " : " não são iguais. " );
}


function criaMensagemSomaNumeros(numero1, numero2) {
    const somaNumero1MaisNumero2 = numero1 + numero2;
    let mensagemSomaNumeros = "";
    if (somaNumero1MaisNumero2 > 10 && somaNumero1MaisNumero2 < 20) {
        mensagemSomaNumeros = "Sua soma é " + somaNumero1MaisNumero2 + ", que é maior que 10 e menor que 20.";
    } else {
        if (somaNumero1MaisNumero2 > 10 && somaNumero1MaisNumero2 > 20) {
            mensagemSomaNumeros = "Sua soma é " + somaNumero1MaisNumero2 + ", que é menor que 10 e maior que 20.";
        } else {
            mensagemSomaNumeros = "Sua soma é " + somaNumero1MaisNumero2 + ", que é menor que 10 e menor que 20.";
        }
    }
    return mensagemSomaNumeros;
}



