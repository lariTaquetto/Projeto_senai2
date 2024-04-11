let titulo = document.querySelector(`h1`);
titulo.innerHTML= `Hora Do Desafio`;

function validarConsole(){
    console.log(`O botão foi clicado`);
}

function validarAlert(){
   alert("Nunes lindo");
}

function validarPrompt(){
    let cidade = prompt("Digite o nome de sua cidade");
        alert(`Estive em ${cidade} e lembrei de você`);
}

function validarSoma(){
    let numero=parseInt (prompt("Digite um número"));
    let numero2=parseInt (prompt("Digite outro número"));
    let soma=numero+numero2
    alert(`A soma de ${numero} e ${numero2} é igual a ${soma}`);
}