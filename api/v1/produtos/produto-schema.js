const Joi = require('joi');

const schema = Joi.object({
  id: Joi.string().required(),
  nome: Joi.string().required(),
  descricao: Joi.string().optional(),
  categoria: Joi.string().required(),
  marca: Joi.string().optional(),
  preco: Joi.number().required(),
  quantidadeEstoque: Joi.number().integer().required(),
  codigoBarras: Joi.string().required(),
  dimensoes: Joi.object({
    altura: Joi.number().required(),
    largura: Joi.number().required(),
    profundidade: Joi.number().required(),
    unidadeMedida: Joi.string().required(),
  }).required(),
  peso: Joi.object({
    valor: Joi.number().required(),
    unidadeMedida: Joi.string().required(),
  }).required(),
  status: Joi.string().required(),
  dataCadastro: Joi.date().required(),
});

module.exports = schema;
