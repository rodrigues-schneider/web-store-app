import { StyleSheet } from 'react-native';
import {forest_hunt} from '../../../../assets/color-palettes'

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',

    height: '40%',
    width: '80%',

    backgroundColor: "#fff",
    
    borderColor: forest_hunt.bege_fundo,
    borderWidth: 1,
    borderRadius: 20,

    padding: 20,

    elevation: 10

  }
});