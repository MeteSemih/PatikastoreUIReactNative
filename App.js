import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import patika_store_data from './src/patika_data.json';
import StoreCard from './src/components/StoreCard';

function App(params) {
  const renderStore = ({item}) => <StoreCard store={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header_text}>PATIKASTORE</Text>
      <TextInput style={styles.search} placeholder="Ara.." />
      <FlatList
        data={patika_store_data}
        renderItem={renderStore}
        keyExtractor={item => item.id.toString()}
        numColumns={2} // İki sütunlu grid için numColumns'u 2 olarak ayarlayın
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  header_text: {
    fontWeight: 'bold',
    color: 'purple',
    fontSize: 40,
    margin: 10,
  },
  search: {
    backgroundColor: '#F5F5F2',
    borderWidth: 2,
    margin: 10,
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 10,
    fontSize: 20,
  },
});
export default App;
