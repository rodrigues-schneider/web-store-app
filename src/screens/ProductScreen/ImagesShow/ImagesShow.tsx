import React from 'react';
import { View, Image, FlatList } from 'react-native';


import { styles } from './ImagesShowStyles';

type ImagesShowProps = {
  images: string[];
}

export function ImagesShow({ images }: ImagesShowProps) {
  return (
    <View style={styles.container}>

      <FlatList
        data={images}
        keyExtractor={(item, index) => String(index)}

        horizontal={true}

        renderItem={({ item }) => (

          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item }}
              style={styles.image}
            />
          </View>

        )}
      />
    </View>
  );
}