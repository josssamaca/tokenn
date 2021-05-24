const express= require("express");
const router=express.Router();
router.get("/consulta",async(req,res)=>{
    //res.send("vista inicial");
    res.render("quizz4/view4");
});


module.exports= router;