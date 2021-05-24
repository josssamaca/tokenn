const productModel = require('../models/productos')

async function listarProductos(req,res){
    const result_productos = await productModel().listProduct();
    //console.log(result_productos);
    res.render('productos/list_productos',{result_productos})
}

    async function cargarProductos(req,res){
        const data = req.body;
        await productModel().crearProduct(data);
         res.redirect('/productos/listarproductos')
        

        
        //console.log(data);


    // res.render('productos/list_productos',{result_productos})
    }
    async function borrarProductos(req,res){
        const data = req.params.id
        await productModel().eliminarProduct(data);
        res.redirect('/productos/listarproductos')
    }
    async function cambiaProductos(req,res){
        const data = [
            req.body.nombre_producto,
            req.body.descri_producto,
            req.body.precio,
            req.params.id


        ]
    await productModel().modificaProduct(data);
    res.redirect('/productos/listarproductos')
    }






module.exports={
    listarProductos,
    cargarProductos,
    borrarProductos,
    cambiaProductos
}