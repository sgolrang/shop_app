import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

import cartReducer from './store/reducers/Cart';
import productsReducer from './store/reducers/products';
import ShopNavigator from './navigation/ShopNavigator';
import ordersReducer from './store/reducers/order';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

// const fetchFonts = () => {
//   return Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
//   });
// };

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) 
     
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
