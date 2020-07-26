import React from 'react';
import {View, StyleSheet} from 'react-native';
import ItemListView from './ItemListView';

const ItemsScreen = () => {
  return (
    <View style={styles.body}>
      <ItemListView />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ItemsScreen;
