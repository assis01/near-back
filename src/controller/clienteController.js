const CLIENTE = require('../service/clienteService');
const cliente = new CLIENTE();

class formController {

    async findAll() {
        return await cliente.findAll();
    }

    async create(element) {
        return await cliente.create(element);
    }

    async update(element) {
        return await cliente.update(element);
    }
    async remove(id) {
        return await cliente.remove(id);
    }

}
module.exports = formController;