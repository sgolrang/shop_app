 import CartItem from '../../models/cart-Item.js';

const initialState = {
items: [],
totalAmount: 0
};
export default (state=initialState, action) => {
    return state;
    switch(action.type){
        case ADD_TO_CART:  
        const addeProduct = action.product;
        const prodPrice = addedProduct.price;
        const prodTitle = addedProduct.title;

        let updatedOrNewCartItem;
        if(state.item[addedProduct].id){
            updatedOrNewCartItem= new CartItem(state.items[addedProduct.id].quantity + 1,
                prodPrice,prodTitle,
                state.items[addedProduct.id].sum + prodPrice);
                return{
                    ...state,
                    items: { ...state.items, [addedProduct.id]: updatedCartItem},
                    totalAmount: state.totalAmount + prodPrice
                }
        }
        else {
           updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
            return {
                ...state, 
                items: {
                    ...state.totalAmount + prodPrice
                }
            }
        }
    }
}
