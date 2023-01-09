
//Programa de validação de Idade

function liberarAcesso() {
    // e.preventDefault();

    let idade = document.getElementById('idade').value;
    let nome = document.getElementById('nome').value;

    const idadeLei = 60;

    if (idade=='' && nome=='') {
        alert('Favor informar a Nome/Idade')
        }
        else if (idade >= 18 && idade <=59){
            console.log(`Pode entrar, ${nome}`);      
        }
        else if (idade >= idadeLei) {
            console.log(`Na melhor idade! Entra FREE,  ${nome}`);
        }
        else {
            console.log(`Foi barrado no baile!, ${nome}`);  
        }   
        
}

// function liberarAcesso(idade, nome) {

//     const idadeLei = 60;

//     if (idade >= 18 && idade <=59){
//         console.log(`Pode entrar, ${nome}`);      
//     }
//     else if (idade >= idadeLei) {
//         console.log(`Na melhor idade! Entra FREE,  ${nome}`);
//     }
//     else {
//         console.log(`Foi barrado no baile!, ${nome}`);  
//     }   
// }

// liberarAcesso(15, 'Kelly');
// liberarAcesso(39, 'Sávio');
// liberarAcesso(33, 'Angelo');