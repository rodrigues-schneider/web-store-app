import React from 'react';
import { View } from 'react-native';

import { styles } from './WomensProductsStyles';
import { ProductShelf } from '../../components';
import { FetchType } from '../../components/ProductShelf/ProductShelf';

export function FemaleProducts() {
  return (
    <View style={styles.container}>
      <ProductShelf
        fetchType={FetchType.CATEGORY}
        categoryNames={["womens-bags", "womens-dresses", "womens-jewellery", "womens-shoes", "womens-watches"]} />
    </View>
  );
}