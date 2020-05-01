const model = require('../models/cliente');
const conteudo_arquivo = require('../models/conteudo_arquivo');

function Dao() {}

Dao.prototype.findAll = function() {
    return model.findAll();
};
Dao.prototype.create = function(element) {
    return model.create(element);
};
Dao.prototype.update = function(element) {
    return model.update(element, {
        where: { id: element.id }
    });
};
Dao.prototype.remove = function(id) {
    return model.destroy({
        where: { id: id }
    });
};
module.exports = Dao;