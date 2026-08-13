import React, { useState } from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import { ProductShowcase } from '../'
import { ApiService } from '../../services'

import { styles } from './ProductShelfStyles';
import { MyStackNavigator } from '../../navigation';

export enum FetchType {
    ALL = 'all',
    MIXED = 'mixed',
    CATEGORY = 'category',
    ID = 'id',
}

type ShelfProps = {
    fetchType: FetchType,
    categoryNames?: string[],
}

export function ProductShelf({ fetchType, categoryNames }: ShelfProps) {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const selectService = async (currentLength: number) => {
        switch (fetchType) {
            case FetchType.MIXED:
                return await ApiService.getMixedProducts((currentLength));
            case FetchType.CATEGORY:
                if (!categoryNames) return [];
                return await ApiService.getProductsByCategory(20, currentLength, ...categoryNames)
            case FetchType.ALL:
            default:
                return await ApiService.getAllProducts(20, currentLength);
        }
    }

    const loadMoreProducts = async () => {
        if (loading) return;

        setLoading(true);
        try {
            const nextProducts = await selectService(products.length);

            if (!nextProducts) return;

            setProducts((prev) => {
                const combined = [...prev, ...nextProducts];
                return combined.filter(
                    (item, index, self) => index === self.findIndex((p) => p.id === item.id)
                );
            });

        } finally {
            setLoading(false)
        }
    };
    return (
        <View
            style={styles.container}>
            <FlatList
                style={styles.list}
                data={products}
                keyExtractor={(item) => String(item.id)}

                contentContainerStyle={styles.contentContainer}
                numColumns={2}
                columnWrapperStyle={styles.columns}

                ItemSeparatorComponent={() => <View style={styles.separator} />}

                renderItem={({ item }: any) => (<ProductShowcase
                    image={item.thumbnail}
                    name={String(item.title)}
                    price={Number(item.price)}
                    discount={Number(item.discountPercentage)}
                    onPress={() => {MyStackNavigator.goToPage('product', { productId: item.id })}}
                />)}

                onEndReached={loadMoreProducts}
                ListFooterComponent={loading ? <ActivityIndicator size="large" color="#000" style={{ margin: 16 }} /> : null} />
        </View>

    );
}