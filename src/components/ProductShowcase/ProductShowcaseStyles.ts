import { StyleSheet } from 'react-native';
import {forest_hunt} from '../../../assets/color-palettes'

export const styles = StyleSheet.create({
  container: {
    width: '48%',
    backgroundColor: "#fff",

    borderColor: forest_hunt.bege,
    borderWidth: 1,
    borderRadius: 15,

    padding: 10,

    elevation: 10,
  },

  text:{
    fontSize: 16,
    color: forest_hunt.terracota,
    fontWeight: 'bold',
    textDecorationLine: 'none'

  },

  olderPrice:{
    textDecorationLine: 'line-through',
    color: forest_hunt.bege_fundo
  },

  discountText:{
    fontSize: 12,
    fontWeight: 'bold',
    textDecorationLine: 'none',
    color: forest_hunt.verde_escuro
  },
  price:{
    color: forest_hunt.verde_claro,
    fontSize: 16,
    fontWeight: 'bold'


  },

  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover'
  },

});