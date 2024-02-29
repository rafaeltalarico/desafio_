document.addEventListener('DOMContentLoaded', function () {
    // Referência ao ID com os itens do carrinho
    var carrinho = document.getElementById('carrinho');
    // Referência ao ID do "Meu carrinho"
    var linkMeuCarrinho = document.getElementById('meuCarrinho');

    // Interação ao clicar em "Meu Carrinho"
    linkMeuCarrinho.addEventListener('click', function (event) {
        event.preventDefault();
        // Verifica se o carrinho está oculto
        if (carrinho.style.display === 'none') {
            // Se não estiver, o carrinho será exibido
            carrinho.style.display = 'block';
            mostrarItensDoCarrinho();
        } else {
            carrinho.style.display = 'none';
        }
    });   
});

// Função que irá exibir os itens do carrinho
function mostrarItensDoCarrinho() {
    // URL para a página com os itens do carrinho
    var url = 'carrinho.html';
    // Abrre a nova aba com os itens do carrinho
    window.open(url, '_blank');
}