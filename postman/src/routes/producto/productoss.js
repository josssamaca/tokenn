const express = require('express')
const router = express.Router();
const productosController = require('../../controllers/productosController')
/* rutas para cargar el hbs */
router.get('/listarproductos', productosController.listarProductos )
router.post('/agregarproductos', productosController.cargarProductos )
router.get('/eliminaproductos/:id', productosController.borrarProductos )
router.post('/modificarproductos/:id', productosController.cambiaProductos )




module.exports = router;