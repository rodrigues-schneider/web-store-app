import React from 'react';
import { View } from 'react-native';



import { ProductShelf } from '../../components'

import { styles } from './HomeScreenStyles';
import { FetchType } from '../../components/ProductShelf/ProductShelf';


export function HomeScreen() {


  return (
    <View
    style={styles.container}>
      <ProductShelf
      fetchType={FetchType.MIXED}/>
    </View>


  );
}