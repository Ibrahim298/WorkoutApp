require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');

const { nextTick } = require('process');
const workoutRoutes=require('./routes/workouts')

//express app
const app = express();

//middleware
app.use(express.json()); // checks if request has body 

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

//routers
app.use('/api/workouts', workoutRoutes);

//db connection
mongoose.connect(process.env.MONGO_URI)
.then((result) => {
    //listen for requests
    app.listen(process.env.PORT, ()=>{
        console.log('Connected to the Database & Listening for requests on port', process.env.PORT)
    })
}).catch((error) => {
    console.log(error)
});

