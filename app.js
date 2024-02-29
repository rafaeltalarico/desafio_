document.addEventListener('DOMContentLoaded', function() {
    const produtos = document.querySelectorAll('.grupo-produtos');
    const botaoProximo = document.getElementById('proximo');
    let indiceAtual = 0;

    function mostrarProdutos() {
        produtos.forEach(function(produto) {
            produto.classList.remove('mostrar');
        });

        produtos[indiceAtual].classList.add('mostrar');
    }

    botaoProximo.addEventListener('click', function() {
        indiceAtual++;
        if (indiceAtual >= produtos.length) {
            indiceAtual = 0;
        }
        mostrarProdutos();
    });

    mostrarProdutos();
});
