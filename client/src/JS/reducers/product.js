import { ADD_PRODUCTS, EDIT_PRODUCTS, FAIL_PRODUCTS, GET_ONE_PRODUCTS, GET_PRODUCTS, LOAD_PRODUCTS } from "../actionstypes/product";

    
    const initialState = {
        load: false,
        errors: null,
        listProducts: [],
        productToGet: {},
        newProduct: {},
        updatedProduct: {},
    };

    const productReducer = (state = initialState, { type, payload }) => {
        switch (type) {
        case LOAD_PRODUCTS:
            return {...state, load : true}
        case GET_PRODUCTS:
            return {...state,load :false,listProducts:payload.productlist}
        case GET_ONE_PRODUCTS:
            return {...state,load:false,productToGet:payload.productToGet}
            case ADD_PRODUCTS:
                return {...state, load : false , newProduct:payload.newProduct}
                case EDIT_PRODUCTS:
                    return {...state,load:false,updatedProduct:payload.updatedProduct} 
                    case FAIL_PRODUCTS:
                        return {...state,load:false,errors:payload} 
                        default:
                            return state;
                        }
                    };
                    
                    export default productReducer;