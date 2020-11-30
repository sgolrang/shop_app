import React from 'react';
import{View,Text} from 'react-native';
import { createStore, combineReducers , compose} from 'redux';
import { Provider } from 'react-redux';
import cartReducer from './store/reducers/Cart';
import productsReducer from './store/reducers/products';
import ShopNavigator from './navigation/ShopNavigator';


const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  products: productsReducer,
   cart: cartReducer
});

const store = createStore(rootReducer,{}, composeEnhancers());

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider> 
  );
}
