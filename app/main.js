let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosdaAPI()


// Função assincrona
async function getBuscarLivrosdaAPI() {
    // Realizando a requisição
    const resposta = await fetch(endpointDaAPI);
    livros = await resposta.json();
    let livroscomDesconto = aplicarDesconto(livros);
    exibirLivrosnaTela(livroscomDesconto);

    console.table(livros);
}





