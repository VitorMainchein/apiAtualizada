const express = require('express')
const router = express.Router()
const controlador = require('../controladores/controlador-clientes')
const { validadorDeCookie } = require('../middlewares/validadorDeCookie')

router.get('', validadorDeCookie,controlador.listClientes)
router.get('/:id', validadorDeCookie,controlador.getClientes)
router.post('', validadorDeCookie,controlador.createClientes)
router.post('/:id', validadorDeCookie,controlador.updateClientes )
router.delete('/:id', validadorDeCookie,controlador.deleteClientes)

module.exports = router;