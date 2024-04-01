const express = require('express');
const cors = require('cors');
const app = express();

const apiRoute = require('./routes/api');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require('./config/database');
const connection = mongoose.connect(config.database,{
	useNewUrlParser: true, 
	useUnifiedTopology: true
});

app.use(cors());

app.use(express.json());

app.use('/api', apiRoute);

if(connection) console.log('database connected');
else console.log('databse not connected');

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const port = process.env.PORT || 3001;

app.listen(port, () =>{
	console.log(`Server is running at ${port}`);
})