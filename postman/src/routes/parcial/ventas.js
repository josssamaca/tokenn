const express= require("express");
const router=express.Router();
router.get("/consultar",async(req,res)=>{
    //res.send("vista inicial");
    res.render("pelu2/ventas");
});


module.exports= router;