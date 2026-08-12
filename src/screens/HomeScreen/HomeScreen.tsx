import React from 'react';
import { View, Text } from 'react-native';



import { ProductShelf } from '../../components'

import { styles } from './HomeScreenStyles';


export function HomeScreen() {


  return (
    <View
    style={styles.container}>
      <ProductShelf />
    </View>


  );
}