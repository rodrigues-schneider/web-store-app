import { StyleSheet } from 'react-native';
// Importando a sua paleta de cores! Ajuste o caminho se necessário.
import { forest_hunt } from '../../../assets';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: forest_hunt.bege_fundo,
  },

  contentContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 20,

  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: forest_hunt.terracota,
    marginTop: 15,

  },

  price: {
    color: forest_hunt.verde_claro,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 4,
    textDecorationLine: 'none',

  },

  olderPrice: {
    fontSize: 15,
    color: forest_hunt.bege,
    fontWeight: 'normal',
    marginTop: 4,
    textDecorationLine: 'line-through',
  },

  discountText:{
    fontSize: 16,
    color: forest_hunt.verde_claro,
    textDecorationLine: 'none',

  },


  text: {
    fontSize: 16,
    color: forest_hunt.verde_escuro,
    marginTop: 8,
    lineHeight: 24,
  },
});