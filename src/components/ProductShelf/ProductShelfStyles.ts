import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

        height: '40%',

        padding: 10,
    },

    itemWrapper: {
        width: '50%',
    }
});