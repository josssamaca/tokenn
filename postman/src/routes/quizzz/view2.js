const express= require("express");
const router=express.Router();
router.get("/consulta",async(req,res)=>{
    //res.send("vista inicial");
    res.render("quizz2/view2");
});


module.exports= router;