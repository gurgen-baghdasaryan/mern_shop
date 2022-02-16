import React from "react";
import { useEffect,useState } from "react";
import TablePagination from '@mui/material/TablePagination';
import {DebounceInput} from 'react-debounce-input';
import axios from "axios";


import './Home.css'


import ProductList from '../ProductList'



const Home = () => {

  const [products, setproduct] = useState([])
  const [productstoshow, setProductstoshow] = useState([])

  const [search, setsearch] = useState('')
  
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }; //sranov du voroshum es qani hat product lini pagit mej


  useEffect(() => {
    const data = products.filter(e=> {return e.name === search})
        setProductstoshow(data)

  }, [search])//dibounce menq searchi mej statei (searchi mej) incheq uzum u avelacnuma datai mej




  useEffect(() => {
    axios.get(`https://fullshopmern.herokuapp.com/api/products`)
        .then(res => {
          setproduct(res.data)
          setProductstoshow(res.data.slice(0,10))

        })
        .catch(error => console.log(error))
  }, []); //vercnum enq bolor productnere avelacnum enq stateum


  useEffect(() => {
    setProductstoshow(products.slice((page-1)*10, page*10))
  }, [page, products]);



  return (
    <div className="Home">
      <h3 className="Home_title">New Collection</h3>

      <div className="debounce_container">
      <DebounceInput
          placeholder="Search"
          minLength={2}
          debounceTimeout={300}
          onChange={event => setsearch( event.target.value)} />
      </div>
     


       <div className="Home_products">

      {
        productstoshow.map((product) => (
          <ProductList
            key={product._id}
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
            productId={product._id}
          />
        ))
      }

      </div>
      <TablePagination
      component="div"
      count={products.length}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />




    </div>
  );
};

export default Home;
