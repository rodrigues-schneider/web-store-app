import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import { styles } from './FilterMenuStyles';

let productTypes: string[] = ["Tudo", "Mouse", 'Mousepad', 'Teclado', 'Monitor', 'GPU', 'Soundbar', 'Headset', 'Microfone'];

function ProductFilter(props) {

  const [filter, setFilter] = useState([]);

  function filterHolder(){
    return(
    setFilter(props.productType)
    )
  }

  return (
    <TouchableOpacity
    onPress={filterHolder}>
      <View
        style={styles.item}>

        <Text
          style={styles.text}>
          {props.productType}</Text>

      </View>

    </TouchableOpacity>

  )
}


function MenuBuilder() {
  const sortedTypes = [productTypes[0], ...productTypes.slice(1).sort()];
  return (
    <>

      {sortedTypes.map(type => (
        <ProductFilter
          key={type}
          productType={type} />
      ))}

    </>
  )
}


export function FilterMenu() {
  return (
    <ScrollView style={styles.container}>
      <MenuBuilder />
    </ScrollView>
  );
}