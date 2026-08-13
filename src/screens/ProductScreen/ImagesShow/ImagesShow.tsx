import React from 'react';
import { View, Image, FlatList } from 'react-native';

import { styles } from './ImagesShowStyles';

type ImagesShowProps = {
  images: string[];
}

export function ImagesShow({images}: ImagesShowProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item, index) => String(index)}
        
        horizontal={true} 
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}

        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={styles.image} 
          />
        )}
      />
    </View>
  );
}