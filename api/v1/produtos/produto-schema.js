const Joi = require("joi");

const consultProduto = {
    query: Joi.object({
        name: Joi.string()
                    .min(2)
                    .max(100),
        category: Joi.string()
                    .max(50),
        price: Joi.number()
                    .positive()
                    .precision(2)
    })            
}

const createProduto = {
    payload: Joi.object({
        name: Joi.string()
                    .min(2)
                    .max(100)
                    .required(),
        description: Joi.string()
                    .max(255)
                    .required(),
        category: Joi.string()
                    .max(50)
                    .required(),
        brand: Joi.string()
                    .max(50)
                    .required(),
        price: Joi.number()
                    .positive()
                    .precision(2)
                    .required(),
        quantity: Joi.number()
                    .integer()
                    .positive()
                    .required(),
        codeBar: Joi.string()
                    .length(13)
                    .required(),
        dimension: Joi.object({
            altura: Joi.number().positive().required(),
            largura: Joi.number().positive().required(),
            profundidade: Joi.number().positive().required()
        }).required(),
        weight: Joi.object({
            peso: Joi.number().positive().required()
        }).required(),
        status: Joi.string()
                .valid('ativo', 'inativo')
                .default('ativo')
    })
};

const updateProduto = {
    params: Joi.object({
        id: Joi
            .number()
            .integer()
            .positive()
            .required()
    }),
    payload: Joi.object({
        name: Joi.string()
                    .min(2)
                    .max(100)
                    .required(),
        description: Joi.string()
                    .max(255)
                    .required(),
        category: Joi.string()
                    .max(50)
                    .required(),
        brand: Joi.string()
                    .max(50)
                    .required(),
        price: Joi.number()
                    .positive()
                    .precision(2)
                    .required(),
        quantity: Joi.number()
                    .integer()
                    .positive()
                    .required(),
        codeBar: Joi.string()
                    .length(13)
                    .required(),
        dimension: Joi.object({
            altura: Joi.number().positive().required(),
            largura: Joi.number().positive().required(),
            profundidade: Joi.number().positive().required()
        }).required(),
        weight: Joi.object({
            peso: Joi.number().positive().required()
        }).required(),
        status: Joi.string()
                .valid('ativo', 'inativo')
                .default('ativo')
    })
}

const deleteProduto = {
    params: Joi.object({
        id: Joi
            .number()
            .integer()
            .positive()
            .required()
    })
}

const findByIDProduto = {
    params: Joi.object({
        id: Joi
            .number()
            .integer()
            .positive()
            .required()
    })
}

module.exports = {consultProduto, createProduto, updateProduto, deleteProduto, findByIDProduto}