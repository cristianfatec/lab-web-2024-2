

const produtoModel = require('./produtoModel');

const save = async (produto) => {
    const saved = await produtoModel.Produto.create(produto)
    return produto;
}

const list = async(filters) => {   
    const whereClause = {};
    if (filters.name) {
        whereClause.name = filters.name;
    }  
    if (filters.category) {
        whereClause.category = filters.category;
    } 
    if (filters.brand) {
        whereClause.brand = filters.brand;
    } 
    return await produtoModel.Produto.findAll({
        where: whereClause
    });
}

const findById = async (id) => {   
    return await produtoModel.Produto.findByPk(id); 
}

const update = async (id, produto) => {
    const [updated] = await produtoModel.Produto.update(produto, {
        where: { id: id }
    });
    return updated ? await produtoModel.Produto.findByPk(id) : null;
}

const remove = async (id) => {
    const deleted = await produtoModel.Produto.destroy({
        where: { id: id }
    });
    return deleted; 
}

module.exports = {save, list, findById, update, remove};