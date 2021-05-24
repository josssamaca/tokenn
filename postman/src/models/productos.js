const pool = require ("../database")


module.exports = function(){

    async function listProduct(){
        let sql= "select * from productos"
        return await pool.query(sql);
    }
    async function crearProduct(datos){
        let sql= "insert into productos set ?"
        return await pool.query(sql,datos);
    }
    async function eliminarProduct(datos){
        let sql= "delete from productos where id_producto= ?"
        return await pool.query(sql,datos);
    }
    async function modificaProduct(datos){
        let sql= "update productos set nombre_producto = ?, descri_producto = ?, precio = ? where id_producto = ?"
        return await pool.query(sql,datos);
    }
    return{
        listProduct,
        crearProduct,
        eliminarProduct,
        modificaProduct
    }

}