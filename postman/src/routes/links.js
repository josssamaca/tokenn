const express= require("express");
const router=express.Router();
router.get("/add",(req,res)=>{
    //res.send("oh yeah");
    res.render("links/add");

   
});
router.get("/indec",(req,res)=>{
    //res.send("oh yeah");
    res.render("menu/indec");
});


module.exports= router;