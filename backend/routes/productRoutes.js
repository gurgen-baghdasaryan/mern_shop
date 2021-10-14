const express = require('express');
const router = express.Router();


const{getAllProducts, getProductById} = require('../controller/productControllers')

//End Points
//get all produycts 
router.get('/',getAllProducts)

// get product by ID
router.get('/:id', getProductById)

module.exports = router;