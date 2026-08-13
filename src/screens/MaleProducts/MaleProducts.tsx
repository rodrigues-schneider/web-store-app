import React from 'react';
import { View } from 'react-native';

import { styles } from './MaleProductsStyles';
import { ProductShelf } from '../../components';
import { FetchType } from '../../components/ProductShelf/ProductShelf';

export function MaleProducts() {
  return (
    <View style={styles.container}>
      <ProductShelf
        fetchType={FetchType.CATEGORY}
        categoryNames={["mens-shirts", "mens-shoes", "mens-watches",]} />

    </View>
  );
}