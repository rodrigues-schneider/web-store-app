import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native'; // Necessário para pegar o ID da rota

import { styles } from './ProductScreenStyles';
import { ImagesShow } from './ImagesShow/ImagesShow';
import { ApiService } from '../../services';

export function ProductScreen() {
  // 1. Pega o ID que foi enviado pela ProductShelf no momento do clique
  const route = useRoute<any>();
  const { productId } = route.params; // Usando o nome do parâmetro que enviamos na prateleira

  // 2. Estados para guardar o produto e controlar o loading
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // 3. Busca os dados na API assim que a tela abrir
  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await ApiService.getProductById(productId);
        setProduct(data);
      } catch (error) {
        console.error("Erro ao carregar produto:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [productId]);

  // 4. Se estiver carregando, mostra o ActivityIndicator
  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  // Se a API falhar e o produto não vier, evita quebrar a tela
  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Produto não encontrado.</Text>
      </View>
    );
  }

  // 5. Calcula o valor final com desconto (opcional)
  const discountValue = product.price * (product.discountPercentage / 100);
  const finalPrice = (product.price - discountValue).toFixed(2);

  return (
    // Trocamos View por ScrollView para o usuário conseguir rolar a tela se a descrição for grande
    <ScrollView style={styles.container}>
      
      <ImagesShow images={product.images} />

      <Text style={styles.name}>{product.title}</Text>

      <Text style={styles.description}>{product.description}</Text>

      <Text style={styles.price}>Preço Original: ${product.price}</Text>

      <Text style={styles.discount}>Desconto: {product.discountPercentage}%</Text>

      <Text style={styles.newprice}>Valor Final: ${finalPrice}</Text>

      <Text style={styles.stock}>Em estoque: {product.stock} unidades</Text>

      <Text style={styles.shippingInfo}>{product.shippingInformation}</Text>

    </ScrollView>
  );
}