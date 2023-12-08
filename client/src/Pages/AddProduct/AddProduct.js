import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { addProduct } from '../../JS/actions/product'; 
import End from '../../Components/Footer/End';

const AddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));  
    navigate('/product');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <TextField id="outlined-basic" label="Name" variant="outlined" name="productName" onChange={handleChange} />
      <TextField id="outlined-basic" label="Description" variant="outlined" name="description" onChange={handleChange} />
      <TextField id="outlined-basic" label="Price" variant="outlined" name="price" onChange={handleChange} />
      <TextField id="outlined-basic" label="ImageUrl" variant="outlined" name="imageUrl" onChange={handleChange} />
      
      <Button onClick={handleAddProduct} style={{ backgroundColor: '#b90000' }} variant="contained">Add</Button>
      <End/>
    </div>
  );
};

export default AddProduct;
