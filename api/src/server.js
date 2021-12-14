const express = require('express');
const dotenv = require('dotenv');
const cors  = require('cors');
const HttpException = require('./utils/HttpException.utils');
const errorMiddleware = require('./middleware/error.middleware');


// Initialize the Express
const app = express();
// Initialize Envoironment
dotenv.config();
// parse request of content-type: application/json 
// parse incoming requests with JSON payloads
app.use(express.json());
// Enabling cors for all request 
app.use(cors());
// Enable Pre flight 
app.options("*",cors());

app.all('*', (req,res,next) => {
    const err = new HttpException(404,"Endpoints Not Found");
    next(err);
});
app.use(errorMiddleware);

const port = Number(process.env.PORT || 4040);

app.listen(port, ()=>
    console.log(`Server running on port ${port}`)
);