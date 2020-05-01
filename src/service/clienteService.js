const Repository = require('../repository/clienteDao');
function Service() { }
const repository = new Repository();

Service.prototype.findAll = function (projetoId) {
   return repository.findAll();
};
Service.prototype.create = function (element) {
   return repository.create(element);
};
Service.prototype.update = function (element) {
   return repository.update(element);
};
Service.prototype.remove = function (id) {
   return repository.remove(id);
};
module.exports = Service;