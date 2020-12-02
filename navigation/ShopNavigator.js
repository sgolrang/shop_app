import React from 'react';
import {  createAppContainer } from 'react-navigation';
import{ createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform } from 'react-native';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import Icon from 'react-native-vector-icons/dist/Ionicons';
 
const defaultNavOptions = {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
  }
const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  },
   {
     navigationOptions: {
       drawerIcon: drawerConfig =>  {
         <Icon  name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
       size= {23} 
       color={drawerConfig.tintColor}
       />
       }
       
     }
  }
);
const OrdersNavigator = createStackNavigator({
  Orders: OrdersScreen
}, {
  defaultNavigationOptions: defaultNavOptions
});
const shopNavigator =  createDrawerNavigator ({
  Products: ProductsNavigator,
  Orders: OrdersNavigator
}, {
  contentOptions: {
    activeTintColor: Colors.primary
  }
})

export default createAppContainer(ProductsNavigator);
