import PRODUCTS from '../../data/dummy-data';
import Product from '../../models/product';
import { CREATE_PRODUCT } from '../actions/products';
import { DELETE_PRODUCT } from '../actions/products';
const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case DELETE_PRODUCT:
        return {
          ...state,
          userProducts: state.userProducts.filter(
            product => product.id !== action.pid
          ),
          availableProducts: state.availableProducts.filter(
              product => product.id !== action.pid
            ),
        };
    }
    return state;
  };
        // case CREATE_PRODUCT: 
        // const newProduct = new Product (
        //     action.ProductData.id,
        //     'u1',
        //     action.productData.title,
        //     action.productData.imageUrl,
        //     action.productData.price
        // );

    // return {
    //     ...state,
    //     availableProducts: state.availableProducts.concat(newProduct),

    // }
