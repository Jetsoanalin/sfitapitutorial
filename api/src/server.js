const express = require('express');
const dotenv = require('dotenv');
const cors  = require('cors');
const HttpException = require('./utils/HttpException.utils');
const errorMiddleware = require('./middleware/error.middleware');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
var urlencoderParser = bodyParser.urlencoded({extended:false})
const userRoute = require('./routes/user.route')

// Initialize the Express
const app = express();
app.use(express.json());

// Initialize Envoironment
dotenv.config();
// parse request of content-type: application/json 
// parse incoming requests with JSON payloads
app.use(jsonParser);
app.use(urlencoderParser);

// Enabling cors for all request 
app.use(cors());

// Enable Pre flight 
app.options("*",cors());

app.use('/api/v1/users',userRoute);


app.all('*', (req,res,next) => {
    const err = new HttpException(404,"Endpoints Not Found");
    next(err);
});
app.use(errorMiddleware);


const port = Number(process.env.PORT || 4040);

app.listen(port, ()=>
    console.log(`Server running on port ${port}`)
);