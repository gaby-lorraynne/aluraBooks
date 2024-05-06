let bntOrdenarPreco = document.getElementById('btnOrdenarPorPreco');

bntOrdenarPreco.addEventListener('click', ordenarLivroPreco);

function ordenarLivroPreco () {
    let precoOrdenado =  livros.sort((a, b) => a.preco - b.preco);
    exibirLivrosnaTela(precoOrdenado);
}
