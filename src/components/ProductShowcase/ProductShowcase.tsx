import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './ProductShowcaseStyles';

export type ProductProps = {
  image: any,
  name: string,
  price: number,
  discount: number,
  onPress: () => void;
}

export function ProductShowcase(props: ProductProps) {

  const hasDiscount = props.discount === undefined ? false : true;
  const discount = (1 - props.discount / 100);
  const price = hasDiscount ? props.price * discount : props.price;
  const discountTax = ((props.discount * 10) / 10).toFixed(2);

  const formatarParaReal = (valor: number) => {
    valor = valor * 5, 19;
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}>

      <Image
        source={{ uri: props.image }}
        style={styles.image} />

      <Text
        style={styles.text}>
        {props.name}
      </Text>

      <Text
        style={hasDiscount ? styles.olderPrice : styles.price}>
        {formatarParaReal(props.price)} {hasDiscount && (<Text style={styles.discountText}>  {discountTax}% Off! </Text>)}
      </Text>
      {hasDiscount && (<Text style={styles.price}>{formatarParaReal(price)}</Text>)}

    </TouchableOpacity>
  );
}