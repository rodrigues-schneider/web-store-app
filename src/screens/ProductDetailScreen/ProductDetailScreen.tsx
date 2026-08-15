import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { ImagesShow } from './ImagesShow/ImagesShow';
import { ApiService } from '../../services';

import { styles } from './ProductDetailScreenStyles';

export function ProductScreen() {
  const route = useRoute<any>();

  //Captura as informações do produto transmitidas através da rota
  const { product } = route.params;

  const [images, setImages] = useState<string[]>(
    product?.thumbnail ? [product.thumbnail] : []);
  const [loadingImages, setLoadingImages] = useState(true);

  //Busca as imagens API assim que a tela abrir
  useEffect(() => {
    async function fetchImagens() {

      if (!product.id) return

      try {
        const gallery = await ApiService.getImages(product.id);
        if (gallery && gallery.length > 0) {
          setImages(gallery);
        }

      } catch (error) {
        console.error("Erro ao carregar galeria de imagens:", error);
      } finally {
        setLoadingImages(false);
      }
    }
    fetchImagens();
  }, [product?.id]);

  if (!product) {
    return (
      <View>
        <Text>Produto não encontrado.</Text>
      </View>
    )
  }

  const brFormat = (valor: number) => {
    valor = valor * 5, 19;
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  };

  const hasDiscount = product.discountPercentage === undefined ? false : true;
  const discountedPrice = product.price * (1 - product.discountPercentage / 100);
  const discountTax = ((product.discountPercentage * 10) / 10).toFixed(2);
  const installments = (product.price * 1.1) / 10;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>

      <ImagesShow images={images} />

      {loadingImages && (
        <ActivityIndicator size="small" color="#666" style={{ marginTop: 8 }} />
      )}

      <Text style={styles.title}>{product.title}</Text>


      <Text
        style={hasDiscount ? styles.olderPrice : styles.price}>
        {brFormat(product.price)}
        {hasDiscount && (<Text style={styles.discountText}>   {discountTax}% Off!  </Text>)}
      </Text>

      {hasDiscount && (<Text style={styles.price}>{brFormat(discountedPrice)}</Text>)}

      <Text style={[styles.price, {fontSize: 15}]}>10x  {brFormat(installments)}</Text>

      <Text style={styles.text}>Stock: {product.stock}</Text>
      <Text style={styles.text}>{product.shippingInformation}</Text>
      <Text style={styles.text}>{product.description}</Text>

    </ScrollView >
  );
}