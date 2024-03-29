const express = require('express');
const searchController = require('../controllers/searchController');
const filterController = require('../controllers/filterController');
const router = express.Router();

router.get('/',(req, res) => {
	res.send('this is test route');
});

router.post('/search', (req, res) => {
	const postData = req.body;
	var searchResult = searchController(postData.data);
	console.log(searchResult);
	// console.log(postData.data);
	res.status(201).json({
		message: 'Post created successfully',
		data: searchResult
	})
})

router.post('/company-filter', (req,res) =>{
	const postData = req.body;
	var companyInfo = filterController(postData);
	console.log(companyInfo);
	res.status(201).json({
		message: 'Post created successfully',
		data: companyInfo
	})
})

module.exports = router;


