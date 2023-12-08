            import axios from "axios"
            import { ADD_PRODUCTS, EDIT_PRODUCTS, FAIL_PRODUCTS, GET_ONE_PRODUCTS, GET_PRODUCTS, LOAD_PRODUCTS } from "../actionstypes/product";

            export const getProducts =() => async (dispatch)=>{
                    dispatch({type : LOAD_PRODUCTS})
                try {
                let result = await axios.get(`/api/product/get_products`)
                dispatch({type : GET_PRODUCTS, payload : result.data})
                
                } catch (error) {
                dispatch({type : FAIL_PRODUCTS ,payload : error.response})
                }
            };

            export const addProduct= (newProduct) => async(dispatch) =>{
                dispatch({type : LOAD_PRODUCTS})
                try {
                  let result = await axios.post(`/api/product/add_products`,newProduct)
                  dispatch({type : ADD_PRODUCTS , payload : result.data})
                  dispatch(getProducts())
                } catch (error) {
                  dispatch({type : FAIL_PRODUCTS , payload :error.response})
                  
                }
              };
              

            export const deleteProduct = (id) => async (dispatch) =>{
            dispatch({type : LOAD_PRODUCTS})
            try {
            await axios.delete(`/api/product/delete_product/${id}`)
            dispatch(getProducts())
            } catch (error) {
                dispatch({type : FAIL_PRODUCTS , payload : error.response})
            }
            };


            export const getOneProduct =(id) => async(dispatch) =>{
                dispatch({type : LOAD_PRODUCTS})
                try {
                let result = await axios.get(`/api/product/get_product/${id}`)
                dispatch({type : GET_ONE_PRODUCTS , payload : result.data})
                } catch (error) {
                dispatch({type : FAIL_PRODUCTS , payload :error.response}) 
                }
            }

            export const updateProduct = (id, product) => async (dispatch) => {
                dispatch({ type: LOAD_PRODUCTS });
                try {
                let result = await axios.put(`/api/product/update_product/${id}`, product);
                dispatch({ type: EDIT_PRODUCTS, payload: result.data });
                
                // Fetch the updated product details after successful update
                dispatch(getOneProduct(id)); // Pass the 'id' to fetch the updated product
                } catch (error) {
                dispatch({ type: FAIL_PRODUCTS, payload: error.response });
                }
            };