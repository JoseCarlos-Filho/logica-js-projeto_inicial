alert("Boas vindas ao jogo do número secreto!");
//  Obtem numeros inteiros aleatórios entre 0 e 100
let valorMaximo = 100;
let numeroSecreto = parseInt(Math.random() * valorMaximo + 1);
let chute;
let tentativas = 1;


while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${valorMaximo}`);

    if (numeroSecreto == chute) {
       
    } else {
        if(chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
        } else {
        alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
    console.log(tentativas);
}
// operador ternário;
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso ai, vc descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
// utilizando operadores ternário.
// tentativas > 1 ?  alert(`Isso ai, vc descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`) 
// :  alert(`Isso ai, vc descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
