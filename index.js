const express = require('express');
const {connectMongoDb} = require('./connection.js');
const path = require('path');

const movieRouter = require('./routes/movie.js');
const staticRouter = require('./routes/staticRoute.js');
const userRouter = require('./routes/user.js');



const app = express();
app.use(express.urlencoded({extended:false}));

app.use("/movie", movieRouter);
app.use("/",staticRouter);
app.use("/user",userRouter);

app.set("view engine",'ejs');
app.set("views",path.resolve("./views"));

connectMongoDb("mongodb://localhost:27017/practice")
.then(()=>console.log("connected to database"));

app.listen(8000,()=>console.log("server started"));