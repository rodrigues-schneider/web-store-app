import { StyleSheet, Dimensions } from 'react-native';
import { forest_hunt } from '../../../../assets';


const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: forest_hunt.bege_claro,
    borderRadius: 12,

  },

  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 20,
    height: 350,
    overflow: 'hidden'

  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    borderColor: '#fff'
  }
});