import { StyleSheet } from 'react-native';
import {forest_hunt} from '../../../assets'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: forest_hunt.bege_fundo
  },

  list:{
    flex:1
  },

  contentContainer: {
    backgroundColor: forest_hunt.bege_fundo,
    padding: 5,
    paddingBottom: 10,

    shadowColor: forest_hunt.verde_escuro,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset:{width: 0, height: 6},
  },

  separator:{
    height: 10, 

  },

  columns:{
    justifyContent: 'space-around',
  }
});