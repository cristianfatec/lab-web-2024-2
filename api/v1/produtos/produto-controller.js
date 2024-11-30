
const produtoBusiness = require('./produtoBusiness');

const controller = {};

controller.findAllProdutos = async (request, h) => {
    try {
        const result = await produtoBusiness.list(request.query);
        return h.response(result).code(200)
    } catch (error) {
        console.error('Erro ao buscar produtos:', error); 
        return h.response({ message: 'Erro ao buscar produtos.', error: error.message }).code(500);
    }

}

controller.createProduto = async (request, h) => {
    try {
        const result = await produtoBusiness.save(request.payload);

        if (!result) {
            return h.response({ message: 'Verifique se passou todas as caracteristicas do produto.' }).code(400);
        }
        return h.response(result).code(201); 
    } catch (error) {
        console.error(error); 
        return h.response({ message: 'Erro ao criar produto.', error: error.message }).code(500);
    }
}

controller.findByIDProduto = async (request, h) => {
    const { id } = request.params;
    console.log(id)
    try {
        const result = await produtoBusiness.findById(id);
        if (!result) {
            return h.response({ message: 'Produto não encontrado.' }).code(404);
        }
        return h.response(result).code(200);
    } catch (error) {
        console.log(error);
        return h.response({message: 'Erro ao buscar produto', error: error.message }).code(500)
    }
}

controller.updateProduto = async (request, h) => {
    const { id } = request.params;

    try {
        const result = await produtoBusiness.update(id, request.payload);

        if (!result) {
            return h.response({ message: 'Produto não encontrado' }).code(404);
        }

        return h.response(result).code(200);
    } catch (error) {
        console.error(error)
        return h.response({ message: 'Error ao atualizar o produto', error: error.message }).code(500)
    }
}

controller.deleteProduto = async (request, h) => {
    const { id } = request.params;

    try {
        const result = await produtoBusiness.remove(id);

        if (!result) {
            return h.response({ message: 'Produto não encontrado' }).code(404);
        }

        return h.response({ message: 'Produto removido com sucesso.' }).code(200);
    } catch (error) {
        console.error(error)
        return h.response({ message: 'Erro ao remover o produto.', error: error.message }).code(500); 
    }
}

module.exports = controller;