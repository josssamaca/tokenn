const express= require("express");
const router=express.Router();
router.get("/consultar",async(req,res)=>{
    //res.send("vista inicial");
    res.render("layouts/main");
});


module.exports= router;