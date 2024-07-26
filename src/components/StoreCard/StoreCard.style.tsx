// StoreCard.style.js veya styles dosyanızda
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  price: {
    fontSize: 14,
    color: 'green',
    marginBottom: 5,
  },
  outOfStock: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default styles;
