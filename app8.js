let numero = parseInt(prompt("Digite um número"));
let total;
function mensagemNumero (numero){
    total= numero*numero
    return console.log (`a multiplicação do número ${numero} é ${total}`);
}
mensagemNumero(numero);