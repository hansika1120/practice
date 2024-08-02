const Movie = require("../modals/movie");
async function handleGetMovie(req,res){
    const movie =await Movie.find({});
    return res.json(movie);
}

async function handleCreateMovie(req,res){
    const{title,year,rating} = req.body;
    await Movie.create({
        title,
        year,
        rating,
    });
    return res.status(201).json({msg:"Created successfully"});
}

module.exports = {
    handleGetMovie,
    handleCreateMovie
}