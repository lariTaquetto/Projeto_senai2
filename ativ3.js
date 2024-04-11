let numero = parseInt(prompt("Digite um número para fatorar"));
let fatorial = 1;
function calculoFatorial (parNumero){
    if (parNumero== 1 || parNumero == 0){
        return
    }      
    else{
         while (parNumero > 1){
             fatorial *= parNumero
             parNumero--;
             }
    }
    return fatorial;
}
let resultado = calculoFatorial(numero);
alert(`O fatorial do número ${numero} é ${resultado}`);

   