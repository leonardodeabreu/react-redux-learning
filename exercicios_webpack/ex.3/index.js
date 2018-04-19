const produto = {
    nome: 'Caneta BIC',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto) {
    //... significa clonar objeto - nome é spread
    return {...objeto}
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Azul';

console.log(produto, novoProduto)