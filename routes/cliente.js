const Controller = require('../src/controller/clienteController');
const PARAM = require('../config/param');
module.exports = function(app, router) {
    const controller = new Controller();
    router.get('/cliente/listar', function(req, res) {
        try {
            controller.findAll()
                .then((memberList) => {
                    res.status(200).json(memberList)
                })
                .catch((error) => res.status(500).json(error))
        } catch (error) {
            res.status(500).json({ error: PARAM.menssagens.errors.errorServer });
        }
    });
  
    router.post('/cliente/salvar', function(req, res) {
        let data = req.body;
        try {
            controller.create(data)
                .then((result) => {
                    res.status(200).json(result);
                })
                .catch((error) => {
                    res.status(500).json({ error: PARAM.menssagens.errors.errorServer });
                });
        } catch (error) {
            res.status(500).json({ error: PARAM.menssagens.errors.errorServer });
        }
    });

    router.put('/cliente/atualizar', function(req, res) {

        try {
            controller.update(req.body)
                .then((result) => {
                    res.json(PARAM.menssagens.sucesso.atualizado);
                })
                .catch((error) => {
                    res.status(500).json({ error: PARAM.menssagens.errors.errorServer });
                });
        } catch (error) {
            res.status(500).json({ error: PARAM.menssagens.errors.errorServer });
        }
    });
    
    router.delete('/cliente/remover', function(req, res) {
        try {
            controller.remove(req.params.id)
                .then((result) => {
                    res.json(PARAM.menssagens.sucesso.deletado);
                })
                .catch((error) => {
                    res.status(500).json({ error:  PARAM.menssagens.errors.errorServer });
                });
        } catch (error) {
            res.status(500).json({ error:  PARAM.menssagens.errors.errorServer  });
        }
    });
};