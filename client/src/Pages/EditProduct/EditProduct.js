  import React, { useState, useEffect } from 'react';
  import { TextField, Button } from '@mui/material';
  import { useDispatch, useSelector } from 'react-redux';
  import { useNavigate, useParams } from 'react-router-dom';
  import { getOneProduct, updateProduct } from '../../JS/actions/product';
  
  const EditProduct = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [product, setProduct] = useState({});
    const productToGet = useSelector((state) => state.productReducer.productToGet );

    const handlechange = (e) => {
      setProduct({ ...product, [e.target.name]: e.target.value });
    };

    useEffect(() => {
      dispatch(getOneProduct(id));
        if (productToGet) {
        setProduct(productToGet);
      }
    }, [dispatch,id]);

    useEffect(() => {
      if (productToGet) {
        setProduct(productToGet);
      }
    }, [productToGet]);

    const handleUpdateProduct = (e) => {
      e.preventDefault();
      dispatch(updateProduct(id, product));
      navigate('/product');
    };



    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <TextField id="outlined-basic"  variant="outlined" name="productName" value={product.productName} onChange={handlechange} />
        <TextField id="outlined-basic"  variant="outlined" name="description" value={product.description} onChange={handlechange} />
        <TextField id="outlined-basic"  variant="outlined"  name="price" value={product.price} onChange={handlechange} />
        <TextField id="outlined-basic"  variant="outlined"  name="imageUrl" value={product.imageUrl} onChange={handlechange} />
      
        <Button onClick={handleUpdateProduct} style={{ backgroundColor: '#b90000' }}  variant="contained">
          Update
        </Button>
      </div>
    );
  };

  export default EditProduct;