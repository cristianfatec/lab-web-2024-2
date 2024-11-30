const produtoSchema = require('./produtoSchema');
const produtoController = require('./produtoController');

const baseVersion = '/v1';

const routes = [
    {
        method: "GET",
        path: `${baseVersion}/produtos`,
        options: {
            handler: produtoController.findAllProdutos,
            validate: produtoSchema.consultProduto
        }
    },
    {
        method: "GET",
        path: `${baseVersion}/produtos/{id}`,
        options: {
            handler: produtoController.findByIDProduto,
            validate: produtoSchema.findByIDProduto
        }
    },
    {
        method: "POST",
        path: `${baseVersion}/produtos`,
        options: {
            handler: produtoController.createProduto,
            validate: produtoSchema.createProduto
        }
    },
    {
        method: "PUT",
        path: `${baseVersion}/produtos/{id}`,
        options: {
            handler: produtoController.updateProduto,
            validate: produtoSchema.updateProduto
        }
    },
    {
        method: "DELETE",
        path: `${baseVersion}/produtos/{id}`,
        options: {
            handler: produtoController.deleteProduto,
            validate: produtoSchema.deleteProduto
        }
    }
];

module.exports = routes;