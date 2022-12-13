let pais = 'Brasil';
let frase = ' país Continental';

// 
console.log(pais);
// transformando para MAIUSCULA
console.log(pais.toUpperCase());
// transfomrando para minuscula
console.log(pais.toLowerCase());


// Concatenação 
console.log(pais + frase);


//Concatenação com a Template String (forma atualiza)
console.log(`${pais} ${frase}`);

//Concatenação com a Template String (forma atualiza)
console.log(`${pais} Um país Continental`);

let fraseCompleta = `${pais} Um país Continental`;

console.log(fraseCompleta.replace('continental', 'Tropical'));


// Mêtodo exige parametros no parametros  
// Propriedades não exige parenteses
console.log(fraseCompleta.length);


let n1 = 3;
let n2 = 4;

let resultado1 = n1 > n2;
let resultado2 = n1 < n2;
let resultado3 = n1 == n2;

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);

let a = '10';
let b = '20';



console.log(parseInt(a)+parseInt(b));





