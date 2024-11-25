const produtoController = require('./produto-controller');

const produtoRoutes = [
  { method: 'POST', path: '/produtos', handler: produtoController.cadastrarProduto },
  { method: 'PUT', path: '/produtos/{id}', handler: produtoController.alterarProduto },
  { method: 'DELETE', path: '/produtos/{id}', handler: produtoController.removerProduto },
  { method: 'GET', path: '/produtos/{id}', handler: produtoController.buscarProduto },
  { method: 'GET', path: '/produtos', handler: produtoController.listarProdutos },
];

module.exports = produtoRoutes;
