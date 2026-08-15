import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './ProductShowcaseStyles';

export type ProductProps = {
  image: any,
  name: string,
  price: number,
  discount: number,
  backgroundColor: any,
  onPress: () => void;
}

export function ProductShowcase(props: ProductProps) {

  const hasDiscount = props.discount === undefined ? false : true;
  const discountedPrice = props.price * (1 - props.discount / 100);
  const discountTax = ((props.discount * 10) / 10).toFixed(2);

  const brFormat = (valor: number) => {
    valor = valor * 5, 19;
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  };

  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: props.backgroundColor || styles.container.backgroundColor}]}
      onPress={props.onPress}>

      <Image
        source={{ uri: props.image }}
        style={styles.image} />

      <Text
        style={styles.text}>
        {props.name}
      </Text>
    <View style={{justifyContent: 'flex-end'}}>
      <Text
        style={hasDiscount ? styles.olderPrice : styles.price}>
        {brFormat(props.price)} {hasDiscount && (<Text style={styles.discountText}>  {discountTax}% Off! </Text>)}
      </Text>
      {hasDiscount && (<Text style={styles.price}>{brFormat(discountedPrice)}</Text>)}
</View>

    </TouchableOpacity>
  );
}