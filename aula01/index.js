function calcularDesconto() {
    let valorProduto = document.getElementById('preco').value;

    let resultado = valorProduto - (valorProduto * 0.2);

    console.log(resultado)

    let resultadoFormato = parseFloat(resultado).toFixed(2);

    let textoResultado = `O valor do desconto de 20% do produto é: R$ ${resultadoFormato}`;

    document.getElementsByTagName('h3')[0].innerHTML = textoResultado
}

