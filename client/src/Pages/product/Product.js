    import React, { useEffect } from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import { getProducts } from '../../JS/actions/product';
    import ProductCard from '../../Components/ProductCard/ProductCard';
import End from '../../Components/Footer/End';
import ProductSlider from '../../Components/Caroussel/ProductSlider';

    const Products = () => {
      const listProducts = useSelector(state => state.productReducer.listProducts);
      const dispatch = useDispatch();
      const load = useSelector(state => state.productReducer.load);

      useEffect(() => {
        dispatch(getProducts());
      }, [dispatch]);


      return (
        <div>
                <ProductSlider/>
        <div style={{display:'flex',justifyContent:'space-around',flexDirection:'row',flexWrap:'wrap'}} >     
        {load ? (
            <h1>Loading...</h1>
          ) : (
            listProducts.map((el) => (
            
                <ProductCard product={el} key={el._id}/>
            ))
          )}
        </div>
        <End/>
        </div>
      );
    };

    export default Products;