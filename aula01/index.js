function calcularDesconto() {
    let valorProduto = document.getElementById('preco').value;
    let resultado = valorProduto - (valorProduto * 0.2);

    console.log(resultado)

    let textoResultado = document.getElementsByTagName('h3')[0].innerHTML = 'Valor c/ desconto do produto é:' `${resultado}`;
    
}

