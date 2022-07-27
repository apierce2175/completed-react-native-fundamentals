import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: 1,
    title: 'First Item',
  },
  {
    id: 2,
    title: 'Second Item',
  },
  {
    id: 3,
    title: 'Third Item',
  },
  {
    id: 4,
    title: '4 Item',
  },
  {
    id: 5,
    title: '5 Item',
  },
  {
    id: 6,
    title: '6 Item',
  },
  {
    id: 7,
    title: '7 Item',
  },
  {
    id: 8,
    title: '8 Item',
  },
  {
    id: 9,
    title: '9 Item',
  },
  {
    id: 10,
    title: '10 Item',
  },
  {
    id: 11,
    title: '11 Item',
  },
  {
    id: 12,
    title: '12 Item',
  },
  {
    id: 13,
    title: '13 Item',
  },
  {
    id: 14,
    title: '14 Item',
  },
  {
    id: 15,
    title: '15 Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;