const Product = require('../models/Product')


const getAllProducts = async (req ,res) =>{


    try {
        const products = await Product.find({});

        res.json(products)
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"error ahahahaahh"})//INTERNAL SERVER ERROR
    }


}



const getProductById = async (req ,res) =>{


    try {
        // We access the ID param on the request object
        const product = await Product.findById(req.params.id);

        res.json(product)
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"error ahahahaahh"})
    }
}

module.exports ={
    getAllProducts,
    getProductById,
}