import { StyleSheet } from 'react-native';
// Importando a sua paleta de cores! Ajuste o caminho se necessário.
import { forest_hunt } from '../../../assets'; 

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: forest_hunt.bege_fundo, 
  },
  
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    // Um verde escuro ou a cor de texto principal da sua paleta
    color: forest_hunt.verde_escuro || '#2E4C33', // (Substitua pela sua variável)
    marginTop: 16,
    paddingHorizontal: 16,
  },
  
  description: {
    fontSize: 16,
    // Uma cor de texto mais suave para leitura
    color: forest_hunt.bege || '#5C6B5E', // (Substitua pela sua variável)
    marginTop: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
    lineHeight: 24,
  },
  
  price: {
    fontSize: 16,
    // Preço antigo pode usar um tom neutro ou desbotado da sua paleta
    color: '#8D998E', 
    textDecorationLine: 'line-through',
    paddingHorizontal: 16,
  },
  
  discount: {
    fontSize: 14,
    // Se você tiver uma cor de "alerta" ou "destaque" na paleta, use aqui!
    color: forest_hunt.verde_claro || '#D35400', // Um tom terroso/laranja combinaria com "Forest Hunt"
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginTop: 4,
  },
  
  newprice: {
    fontSize: 32,
    fontWeight: 'bold',
    // O verde principal ou escuro da sua paleta para dar foco ao preço final
    color: forest_hunt.verde_claro, 
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  
  stock: {
    fontSize: 14,
    color: forest_hunt.verde_escuro || '#2E4C33',
    fontWeight: '500',
    paddingHorizontal: 16,
    marginTop: 8,
  },
  
  shippingInfo: {
    fontSize: 14,
    fontStyle: 'italic',
    color: forest_hunt.bege || '#5C6B5E',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 40, 
  },
});