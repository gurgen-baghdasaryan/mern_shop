require("dotenv").config(); // 
const express = require('express');
const connectionDB = require('./config/db');//conection to BBDD with Mongoose
const productRoutes = require('./routes/productRoutes'); //Create the express router object 

connectionDB();

const app = express()

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "API running..." });
  });
  
app.use('/api/products', productRoutes )

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`server running in the port  ${PORT}`))