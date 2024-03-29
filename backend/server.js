const express = require('express');
const cors = require('cors');
const app = express();

const apiRoute = require('./routes/api');

app.use(cors());

app.use(express.json());

app.use('/api', apiRoute);

const port = process.env.PORT || 3001;

app.listen(port, () =>{
	console.log(`Server is running at ${port}`);
})