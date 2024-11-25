const produtoBusiness = require('./produto-business');

async function cadastrarProduto(request, h) {
  const produto = await produtoBusiness.criarProduto(request.payload);
  return h.response(produto).code(201);
}

async function alterarProduto(request, h) {
  const { id } = request.params;
  await produtoBusiness.atualizarProduto(id, request.payload);
  return h.response({ mensagem: 'Produto atualizado com sucesso' }).code(200);
}

async function removerProduto(request, h) {
  const { id } = request.params;
  await produtoBusiness.excluirProduto(id);
  return h.response({ mensagem: 'Produto removido com sucesso' }).code(200);
}

async function buscarProduto(request, h) {
  const { id } = request.params;
  const produto = await produtoBusiness.buscarProdutoPorId(id);
  if (!produto) return h.response({ mensagem: 'Produto não encontrado' }).code(404);
  return produto;
}

async function listarProdutos(request, h) {
  const filtros = request.query;
  const produtos = await produtoBusiness.buscarProdutosPorFiltro(filtros);
  return produtos;
}

module.exports = {
  cadastrarProduto,
  alterarProduto,
  removerProduto,
  buscarProduto,
  listarProdutos,
};
