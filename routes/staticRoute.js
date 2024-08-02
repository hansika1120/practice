const express = require('express');
const router = express();
const Movie = require("../modals/movie");

router.get("/addMovie",(req,res)=>{
    return res.render('movie');
})
router.get("/",async (req,res)=>{
    const movie=  await Movie.find({});
    return res.render("home",{
        movies:movie,
    });
})

router.get("/signup",async(req,res)=>{
    return await res.render("signup");
})

router.get("/login",async(req,res)=>{
    return await res.render("login");
})
module.exports=router;