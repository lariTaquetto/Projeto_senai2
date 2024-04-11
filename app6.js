let numero1 = parseInt (prompt ("Digite um numero."));
let numero2 = parseInt (prompt ("Digite um numero."));
let numero3 = parseInt (prompt ("Digite um numero."));
let total
 
function conta(numero1, numero2, numero3){
    total = (numero1 + numero2 + numero3) / 3
    return console.log (`A media desses valores é ${total}`)
 
}
conta (numero1, numero2, numero3);
