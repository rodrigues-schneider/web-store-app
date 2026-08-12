import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    top: 0,

    paddingTop: 20,

    height: '12%',
    width: '100%',


    backgroundColor: '#ff0000',

    borderBottomColor: '#000000',
    borderBottomWidth: 2,
    elevation: 5,


  },

  text: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    marginTop: 15,

  },

  image: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',

  },

  touchable: {
    height: '70%',
    width: '20%',
    marginTop: 15,
    marginRight: 10,
  }

});