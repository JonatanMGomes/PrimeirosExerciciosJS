//primeira parte do exercicio
if(caminho ===5 && corro === 2)
{
   console.log('passo o dia bem'); 
} 

if(levanto === 'cedo' || levanto < 8)
{
    console.log('saio tranquilo');
} 

if(!termino_trabalho || !tenho_compromisso)
{
    console.log('saio tarde');
}

//segunda parte do exercicio

//sem if/else descobrir se é primo
var numero = 10

switch (numero) {
    case 2:
        console.log(numero + " é primo")
        break;

    default:
        var primo = true
        for (var contador = numero-1; primo === true && contador > 1; contador --) {
            primo = numero%contador === 0 ? false : true
        }
        var resposta = primo ? (numero + " é primo!") : (numero + " não é primo!")
        console.log(resposta)
        break;
}

//mudar código pra usar ternário
/*
var hora =1
var minutos = 0
if (hora >0){
    minutos = hora * 60
} else{
    minuto = 60
}
*/
var hora = 1
var minutos = hora > 0 ? hora*60 : 60
console.log(minutos)