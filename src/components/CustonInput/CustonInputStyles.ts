import { StyleSheet } from 'react-native';
import { forest_hunt } from '../../../assets/color-palettes'

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#fff',
  },

  textInput:{
    width: '100%',
    
    borderColor: forest_hunt.bege,
    borderWidth: 1,
    borderRadius: 5,
    margin: 5
  },

  text:{
    fontSize: 15,
    fontWeight: 'bold',

    alignSelf: 'flex-start'
    },

    icon:{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        top: 0,
        height: '100%',
        margin: 10

    }
});