import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './ProductShowcaseStyles';

export function ProductShowcase(props: any) {
      
  const id = props.id

  return (
    <View style={styles.container}>

      <Text
        style={styles.text}>
        {props.name}
      </Text>

      <Image
        style={styles.image}
        source={props.imagem} />

      <Text
        style={styles.text}>
        {props.color}
      </Text>

      <Text
        style={styles.text}>
        {props.value}
      </Text>

    </View>
  );
}