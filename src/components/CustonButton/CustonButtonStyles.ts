import { StyleSheet } from 'react-native';
import { forest_hunt as forest_hunt } from '../../../assets/color-palettes';

export const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center',
        height: '15%',
        width: '100%',

        backgroundColor: forest_hunt.verde_claro,

        borderRadius: 10,
        marginTop: 10,

        elevation: 5
    },

    text: {
        color: "#fff",
        padding: 10,
        fontWeight: 'bold',
    },
});