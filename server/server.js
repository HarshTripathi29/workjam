const express = require('express');
const mainRouter = require("./routes/index");
const app = express();

const cors = require("cors");
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000/api/v1', // Replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable cookies to be sent across origins
 
  }));

app.use('/api/v1', mainRouter);

app.listen(3000, ()=>{
    console.log("the server is running at port 3000");
});

