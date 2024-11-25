const Produto = require('./produto-model');

async function criarProduto(dados) {
  return await Produto.create(dados);
}

async function atualizarProduto(id, dados) {
  return await Produto.update(dados, { where: { id } });
}

async function excluirProduto(id) {
  return await Produto.destroy({ where: { id } });
}

async function buscarProdutoPorId(id) {
  return await Produto.findByPk(id);
}

async function buscarProdutosPorFiltro(filtros) {
  return await Produto.findAll({ where: filtros });
}

module.exports = {
  criarProduto,
  atualizarProduto,
  excluirProduto,
  buscarProdutoPorId,
  buscarProdutosPorFiltro,
};
