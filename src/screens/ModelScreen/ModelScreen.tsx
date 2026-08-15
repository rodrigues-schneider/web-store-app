import React from 'react';
import { useRoute } from '@react-navigation/native';
import { View } from 'react-native';

import { ProductShelf } from '../../components'

import { styles } from './ModelScreenStyles';
import { FetchType } from '../../components/ProductShelf/ProductShelf';

type ModelScreenProps = {
  fetchType: FetchType,
  categoryNames: string[]
}


export function ModelScreen() {
  const route = useRoute<any>();
  const { fetchType, categories } = route.params;
  return (
    <View
      style={styles.container}>
      <ProductShelf
        fetchType={fetchType}
        categoryNames={categories} />
    </View>


  );
}