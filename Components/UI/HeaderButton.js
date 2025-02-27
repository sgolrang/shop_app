import React from 'react';
import {Platform} from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import Colors from '../../constants/Colors';
 import Icon from 'react-native-vector-icons/dist/Ionicons';

 const CustomHeaderButton = props => {
    return (
      <HeaderButton
        {...props}
        IconComponent={Icon}
        iconSize={23}
        color={Platform.OS === 'android' ? 'white' : Colors.primary}
      />
    );
  };
  
  export default CustomHeaderButton;