
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
/* 
const arrayNotas = [1,2,3,"notas",true];
console.log(arrayNotas);

arrayNotas.push(6);
console.log() */


/* 
const arraySalada = ["Banana", "Maçã", "Pera", "Uva"]
console.log("Salada itens 0:", arraySalada);

arraySalada.push("Leite Condensado");
arraySalada.push("Leite em Pó");

console.log("Salada itens 1:", arraySalada);
const removido = arraySalada.pop();

console.log("Salada itens 2:", arraySalada);

console.log("Salada item removido:", removido); */


// Criando uma busca dentro Array

/* const nomes = ["Ronier", "Larissa", "Davi", "Alessando"];

let posicao = console.log(nomes.indexOf("Davi"));

if(posicao === -1){
    console.log("Nome não encontrado");
} else { 
    console.log(nomes[posicao]);
}
console.log(nomes[posicao]); */

//Criando uma função para interagir no Array
/* 
function(){

}

function(p1, p2){
    return 
} */

// No exemplo abaixo a função imprimir esta recebendo o parametro funcaoImprimir e o texto que vai esta dentro dessa ação.
function imprimirFuncao(funcaoImprimir, texto){
    funcaoImprimir(texto);
}
imprimirFuncao(console.log, "Olá mundo");


const salada = ['Banana', 'Maçã', 'Uva', 'Pera']
function capslk(valor){
    return valor.toUpperCase();
}

const saladaUpper = salada.map()=> { return 'nada'} 