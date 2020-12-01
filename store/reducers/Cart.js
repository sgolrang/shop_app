import { ActionSheetIOS } from 'react-native';
import CartItem from '../../models/CartItem.js';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/Cart';
const initialState = {
    items: [],
    totalAmount: 0
};
export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;

            let updatedOrNewCartItem;
            if (state.items[addedProduct.id]) {

                updatedOrNewCartItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id].sum + prodPrice
                  );
                
            }
            else {
                console.log('###############################',prodPrice)

                updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
            }
            return {
                ...state,
                items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
                totalAmount: state.totalAmount + prodPrice
              };
        case REMOVE_FROM_CART:
            const selectedCartItem = state.items[action.pid]
            const currentQty = selectedCartItem.quantity;
            let updatedCartItem;
            if (currentQty > 1) {
                const updatedCartItem = new CartItem(
                    selectedCartItem.quantity - 1, selectedCartItem.productPrice, selectedCartItem.productTitle,

                    selectedCartItem.sum - selectedCartItem.productPrice
                );
                updatedOrNewCartItem = {...state.items, [action.pid]: updatedOrNewCartItem};
            } else {
                updatedCartItem = { ...state.items };
                delete updatedCartItem[action.pid];
            }
            return {
                ...state, 
                items: updatedCartItem,
                totalAmount: state.totalAmount - selectedCartItem.productPrice
            }

        default:
            return state;
    }
}
