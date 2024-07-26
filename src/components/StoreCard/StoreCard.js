import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './StoreCard.style';
const StoreCard = ({store}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: store.imgURL}} />
      <View>
        <Text style={styles.title}>{store.title}</Text>
        <Text style={styles.price}>{store.price}</Text>
      </View>
      {!store.inStock && <Text style={styles.outOfStock}>Stokta yok</Text>}
    </View>
  );
};
export default StoreCard;
