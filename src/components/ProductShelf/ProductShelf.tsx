import React from 'react';
import { View, ScrollView } from 'react-native';
import { ProductShowcase } from '../'

import { styles } from './ProductShelfStyles';

export const lista = {
    pano: {
        id: '1',
        nome: 'pano',
        cor: 'azul',
        preco: 'R$10,00'
    },

    saia: {
        id: '2',
        nome: 'saia',
        cor: 'vermelha',
        preco: 'R$80,00'
    },

    sapato: {
        id: '3',
        nome: 'sapato',
        cor: 'preto',
        preco: 'R$150,00'

    },

    bolsa: {
        id: '4',
        nome: 'bolsa',
        cor: 'rosa',
        preco: 'R$200,00'

    },

    relogio: {
        id: '5',
        nome: 'relogio',
        cor: 'dourado',
        preco: 'R$450,00'

    }
}

function ShelfStocker() {
    return (
        <>
            {Object.values(lista).map((item, id) => (
                <View key={item.id} style={styles.itemWrapper}>
                    <ProductShowcase
                        key={item.id}
                        name={item.nome}
                        color={item.cor}
                        value={item.preco}
                    />
                </View>


            ))}
        </>

    )
}


export function ProductShelf() {
    return (
        <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}>

            <ShelfStocker />

        </ScrollView>
    );
}